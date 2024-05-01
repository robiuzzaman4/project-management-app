"use client";

import React from "react";
import { Form, Input, Button, message } from "antd";
import { useRouter } from "next/navigation";

type Values = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = (values: Values) => {
    if (values.username === "admin" && values.password === "123456") {
      message.success("Login successful!");
      router.push("/dashboard");
    } else {
      message.error("Invalid username or password");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white shadow rounded-lg flex flex-col gap-8">
      <h2 className="text-3xl font-semibold text-center">Welcome Back!</h2>
      <Form
        form={form}
        name="login"
        initialValues={{
          username: "admin",
          password: "123456",
          remember: true,
        }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
