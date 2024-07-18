import login from "./login.module.scss";
import { Col, Row, Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import {} from "antd";
import { reqLogin } from "../../api/login";
import { setToken } from "../../utils/storage";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
type FieldType = {
  username?: string;
  password?: string;
};

export default function Login() {
  let navigate = useNavigate();
  const [messageApi, contextHoldertip] = message.useMessage();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const res = await reqLogin(values);
    if (res.code == 20000) {
      const token = res.data.token;
      messageApi.open({
        type: "success",
        content: "登录成功",
      });
      setToken(token);
      // 跳转到首页
      navigate("/");
    } else {
      messageApi.open({
        type: "error",
        content: res.message ? res.message : "用户名或密码错误",
      });
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={login.loginContainer}>
      {contextHoldertip}
      <Row justify="center">
        <Col xl={12} xs={0}></Col>
        <Col xl={12} xs={24} flex={1} style={{ height: "100%" }}>
          <Form
            className={login.formItem}
            name="basic"
            wrapperCol={{ span: 24 }}
            initialValues={{ username: "admin", password: "111111" }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1 className={login.title_h1}>Hello</h1>
            <h2 className={login.title_h2}>欢迎来到React管理平台</h2>
            <Form.Item<FieldType>
              name="username"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input
                style={{ width: "100%" }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item style={{ width: "100%" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
