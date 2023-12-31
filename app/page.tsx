"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type SignUser = {
  name?: string;
  email?: string;
  password?: string;
};
const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState<SignUser>({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const tempUser = user;
    tempUser[name] = e.target.value;
    setUser(tempUser);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const userInfo = await response.json();
    console.log(userInfo);
    router.push("/signin");
  };
  return (
    <div>
      name:{" "}
      <input
        type="text"
        defaultValue={user.name}
        name="name"
        className="border border-black"
        onChange={(e) => handleChange(e, "name")}
      />
      email:{" "}
      <input
        type="text"
        defaultValue={user.email}
        name="email"
        className="border border-black"
        onChange={(e) => handleChange(e, "email")}
      />
      password:{" "}
      <input
        type="password"
        name="password"
        defaultValue={user.password}
        className="border border-black"
        onChange={(e) => handleChange(e, "password")}
      />
      <button onClick={(e) => handleSubmit(e)}>Signup</button>
    </div>
  );
};

export default Signup;
