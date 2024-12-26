"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const Login = () => {
  const { handleSubmit, reset, register } = useForm<{
    email: string;
    password: string;
  }>();

  const submit = (data: { email: string; password: string }) => {
    signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="p-[10px] bg-green-300"
            placeholder="Email"
            {...register("email")}
            type="email"
          />
        </div>
        <div>
          <input
            className="p-[10px] bg-green-300"
            placeholder="Password"
            {...register("password")}
            type="password"
          />
        </div>
        <button type="submit" className="p-[20px] bg-blue-400">
          send
        </button>
      </form>
    </div>
  );
};

export default Login;
