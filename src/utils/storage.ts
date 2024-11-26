let key = "TOKEN_KEY";
export const setToken = (value: string) => {
  localStorage.setItem(key, value);
};

export const getToken = () => {
  return localStorage.getItem(key);
};

export const remmoveToken = () => {
  return localStorage.removeItem(key);
};
