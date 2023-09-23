"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type SignUser = {
  email?: string;
  password?: string;
};
const Signin = () => {
  const router = useRouter();
  const [user, setUser] = useState<SignUser>({
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
  const handleSubmit = () => {
    console.log(user);
  };
  return (
    <div>
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
      <button
        onClick={(e) => {
          e.preventDefault();
          signIn("credentials", { ...user, redirect: false })
            .then((resp) => console.log(resp))
            .catch((e) => console.log(e));
        }}
      >
        Signin
      </button>
    </div>
  );
};

export default Signin;
