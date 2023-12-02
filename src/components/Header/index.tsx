"use client";

import { Avatar, Button, Navbar } from "flowbite-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  username: string;
  shots: number;
};

export const Header = ({ username, shots }: HeaderProps) => {
  return (
    <header className="flex flex-col">
      <Navbar fluid rounded>
        <Navbar.Brand href="http://localhost:3000">
          <Image width={175} height={75} src={"/logo.png"} alt="Leilão Legal" />
        </Navbar.Brand>

        <div className="flex md:order-2 gap-4">
          {shots !== undefined ? (
            <Link href={"/buyShots"}>
              <Button color="red">Você tem {shots} lances</Button>
            </Link>
          ) : null}
          <Avatar
            rounded
            placeholderInitials={username[0].toUpperCase() || ""}
          />
        </div>
      </Navbar>

      <menu className="flex bg-red-700 h-10 justify-center items-center gap-6">
        <Link href={"/"} className="text-white">
          Home
        </Link>
        <Link href={"/products/new"} className="text-white">
          Cadastrar produto
        </Link>
        <Link href={"/shots"} className="text-white">
          Comprar Lances
        </Link>
        <button type="button" onClick={() => signOut()} className="text-white">
          Sair
        </button>
      </menu>
    </header>
  );
};
