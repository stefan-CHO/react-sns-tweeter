import React from "react";
import { Form, Button, Input } from "antd";
import { useInput } from "../pages/signup";
import { useSelector, useDispatch } from "react-redux";
import { loginAction, logoutAction, LOG_OUT, LOG_IN } from "../reducers/user";

const LoginForm = () => {
  const [loginId, onChangeLoginId] = useInput("");
  const [loginPassword, onChangeLoginPassword] = useInput("");
  const dispatch = useDispatch();

  const onSubmitLogin = () => {
    console.log(loginId, loginPassword);
    dispatch(loginAction);
  };
  // const { isLogged } = useSelector((state) => state.user);
  return (
    <React.Fragment>
      <Form
        name="user-login"
        onFinish={onSubmitLogin}
        layout={"vertical"}
        style={{ margin: "10px" }}
      >
        <Form.Item
          label="user-id"
          name="user-id"
          rules={[{ required: true, message: "Please input your ID" }]}
          onChange={onChangeLoginId}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="user-password"
          name="user-password"
          rules={[{ required: true, message: "Please input your Password" }]}
          onChange={onChangeLoginPassword}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" style={{ float: "right" }}>
            LogIn
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default LoginForm;