"use client";

import { useEffect, useState } from "react";

type Greeting =
  | "Good Morning!"
  | "Good Afternoon!"
  | "Good Evening!"
  | "Good Night!";

function getGreeting(): Greeting {
  const currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Good Morning!";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good Afternoon!";
  } else if (currentHour >= 17 && currentHour < 20) {
    return "Good Evening!";
  } else {
    return "Good Night!";
  }
}

const useGreetings = (): Greeting => {
  const [greeting, setGreeting] = useState<Greeting>(getGreeting());

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return greeting;
};

export default useGreetings;
