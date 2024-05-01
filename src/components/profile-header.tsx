import Image from "next/image";
import React from "react";

const ProfileHeader = () => {
  return (
    <div className="w-full bg-white shadow p-4 md:p-8 rounded-lg grid gap-8">
      <div className="w-12 h-12 rounded-full bg-lime-100 p-2 grid place-items-center">
        <Image
          src={"/logo.svg"}
          alt="logo"
          height={720}
          width={720}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="text-3xl font-semibold">Welcome to Dashboard!</h1>
    </div>
  );
};

export default ProfileHeader;
