"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, TextInput } from "flowbite-react";

type Inputs = {
  name: string;
};

const NewProduct = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<Inputs>({});

  async function onSubmit({ name }: Inputs) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      push("/");
    } catch (err) {
      throw new Error();
    }
  }

  return (
    <form
      className="flex flex-col gap-4 bg-white rounded-lg p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-lg">Adicionar produto</h1>

      <label className="flex flex-col" htmlFor="name">
        Nome do produto
        <TextInput
          placeholder="Ex: iPhone 15 Pro Max 512 GB"
          type="text"
          id="name"
          {...register("name")}
        />
      </label>

      <Button type="submit" color="blue">Adicionar</Button>
    </form>
  );
};

export default NewProduct;
