import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
