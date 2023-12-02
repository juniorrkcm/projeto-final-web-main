"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, TextInput } from "flowbite-react";
import Link from "next/link";

type Inputs = {
  name: string;
  image: FileList;
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
      <h1 className="text-lg text-center">Adicionar produto</h1>

      <label className="flex flex-col" htmlFor="name">
        Nome do produto
        <TextInput
          placeholder="Nome do produto"
          type="text"
          id="name"
          {...register("name")}
        />
      </label>

      <label className="flex flex-col" htmlFor="name">
  Descrição
  <TextInput
    placeholder="Breve descrição do produto"
    type="text"
    id="name"
    {...register("name")}
  />
</label>

<label className="flex flex-col" htmlFor="image">
        <input
          type="file"
          id="image"
          {...register("image")}
        />
      </label>

      <Button type="submit" color="blue">Adicionar</Button>
      <p className="text-sm w-fit text-center" style={{ display: 'block', margin: 'auto' }}>
      <Link href={"/"}> Voltar para Inicio</Link>
      </p>
    </form>
  );
};

export default NewProduct;
