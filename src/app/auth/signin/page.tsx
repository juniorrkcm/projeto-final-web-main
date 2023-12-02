"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Button, TextInput } from "flowbite-react";

type Inputs = {
  username: string;
  password: string;
};

const SignIn = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  async function onSubmit({ username, password }: Inputs) {
    try {
      setLoading(true);
      signIn("credentials", { username, password, callbackUrl: "/" });
    } catch {
      setLoading(false);
      throw new Error("Falha ao entrar.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-white rounded-lg p-4"
    >
      <Image
        width={175}
        height={75}
        src={"/logo.png"}
        alt="Leilão Legal"
        className="self-center"
      />
      <TextInput placeholder="Usuário" type="text" {...register("username")} />
      <TextInput
        placeholder="Senha"
        type="password"
        {...register("password")}
      />

      <Button type="submit" color="blue">Entrar</Button>
      <p className="text-sm w-fit">
        Não possui conta? <Link href={"/auth/signup"}>Cadastre-se</Link>
      </p>
    </form>
  );
};

export default SignIn;
