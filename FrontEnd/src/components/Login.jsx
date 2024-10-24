import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/user";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/loaderSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await loginUser(values);
      if (response?.success) {
        localStorage.setItem("tokenForBMS", response?.data);
        navigate("/");
        message.success(response.message);
      } else if (response?.message === "Please enter valid password") {
        // to do
        message.error(response?.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      dispatch(hideLoading());
    }
  };

  // check If user is already logged in
  useEffect(() => {
    if (localStorage.getItem("tokenForBMS")) {
      navigate("/", { replace: true }); // replace: true to avoid user going back
    }
  }, []);

  return (
    <header className="App-header">
      <main className="main-area mw-500 text-center px-3">
        <section>
          <h1>Login to BookMyShow</h1>
        </section>
        <section>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[{ required: true, message: "Email is Required" }]}
            >
              <Input
                id="email"
                type="email"
                placeholder="Enter your Email"
              ></Input>
            </Form.Item>
            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is Required" }]}
            >
              <Input
                id="password"
                type="password"
                placeholder="Enter your Password"
              ></Input>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
        <section>
          <p>
            Not registered yet ? <Link to="/register">Register now</Link>
          </p>
          <p>
            Forgot Password? <Link to="/forget">Click Here</Link>
          </p>
        </section>
      </main>
    </header>
  );
};

export default Login;
