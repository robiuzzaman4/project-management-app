import Container from "@/components/container";
import ProfileHeader from "@/components/profile-header";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full py-8">
      <Container>
        <ProfileHeader/>
      </Container>
    </div>
  );
};

export default Dashboard;
