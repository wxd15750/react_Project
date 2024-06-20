import React from "react";
import login from "./login.module.scss";
import { Col, Row, Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";
import {} from "antd";
type FieldType = {
  username?: string;
  password?: string;
};
export default function Login() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={login.loginContainer}>
      <Row justify="center">
        <Col xl={12} xs={0}></Col>
        <Col xl={12} xs={24} flex={1} style={{ height: "100%" }}>
          <Form
            className={login.formItem}
            name="basic"
            wrapperCol={{ span: 24 }}
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
