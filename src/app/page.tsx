import React from "react";
import Container from "@/components/container";
import LoginForm from "@/components/login-form";

const Home = () => {
  return (
    <Container className="h-screen w-full grid place-items-center">
      <LoginForm />
    </Container>
  );
};

export default Home;
