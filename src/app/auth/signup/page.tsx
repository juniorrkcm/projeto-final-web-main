"use client";

import { Button, TextInput } from "flowbite-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const { push } = useRouter();
  const { register, handleSubmit, setError } = useForm<Inputs>({});

  const [loading, setLoading] = useState(false);

  async function onSubmit({
    username,
    email,
    password,
    confirmPassword,
  }: Inputs) {
    try {
      setLoading(true);
      if (password !== confirmPassword) {
        setError("confirmPassword", { message: "As senhas não conferem" });
      }

      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      await signIn("credentials", { username, password });
      push("/");
    } catch {
      setLoading(false);
    }
  }

  return (
    <form
      className="flex flex-col gap-4 bg-white rounded-lg p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Image
        width={175}
        height={75}
        src={"/logo.png"}
        alt="Leilão Legal"
        className="self-center"
      />

      <TextInput
        placeholder="Usuário"
        type="text"
        autoFocus
        spellCheck={false}
        id="username"
        {...register("username", { required: true })}
      />

      <TextInput
        placeholder="E-mail"
        type="email"
        id="email"
        {...register("email", { required: true })}
      />

      <TextInput
        placeholder="Senha"
        type="password"
        id="password"
        {...register("password", { required: true })}
      />

      <TextInput
        placeholder="Confirmar senha"
        type="password"
        id="confirm-password"
        {...register("confirmPassword", { required: true })}
      />

<Button type="submit" color="red">Criar Conta</Button>
    </form>
  );
};

export default SignUp;
