"use client";

import React from "react";
import Image from "next/image";
import { Avatar, Card } from "flowbite-react";

const Depoimentos = () => {
  return (
    <>
      <section className="mt-8 pt-24 pb-24 relative grid grid-cols-3 gap-4 pl-32 pr-32">
  {/* Depoimento 1 */}
  <Card className="bg-white z-10 shadow-sm flex flex-col justify-between">
    <div className="mb-2 flex justify-center items-center">
      <div className="rounded-full overflow-hidden" style={{ width: '100px', height: '100%' }}>
        <Image
          src="/pato.jpeg"
          alt="pato"
          width={100}
          height={100}
        />
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
        Pato
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
        Ceara - CE
      </span>
      <p className="text-center mt-4">
        Só queria ser um pato agiota
      </p>
    </div>
  </Card>

  {/* Depoimento 2 */}
  <Card className="bg-white z-10 shadow-sm flex flex-col justify-between">
    <div className="mb-2 flex justify-center items-center">
      <div className="rounded-full overflow-hidden" style={{ width: '100px', height: '100%' }}>
        <Image
          src="/cheems.jpeg"
          alt="cheems"
          width={100}
          height={100}
        />
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
        Cheems
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
        Acre - AC
      </span>
      <p className="text-center mt-4">
        Dog cor de caramelo.
      </p>
    </div>
  </Card>

  {/* Depoimento 3 */}
  <Card className="bg-white z-10 shadow-sm flex flex-col justify-between">
    <div className="mb-2 flex justify-center items-center">
      <div className="rounded-full overflow-hidden" style={{ width: '100px', height: '100%' }}>
        <Image
          src="/pombo.jpeg"
          alt="pombo"
          width={100}
          height={100}
        />
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
        Pombo
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
        Roraima - RR
      </span>
      <p className="text-center mt-4">
        Pombo triste porque não ganhou no jogo do bicho.
      </p>
    </div>
  </Card>

          
        <Image
          src={"/background1.jpg"}
          fill
          alt="background"
          style={{ objectPosition: "0 100%" }}
          className="object-cover"
        />
        <div className="col-span-3 flex justify-center">
          <button className="p-2 flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2">
            Ver Todos
          </button>
        </div>
      </section>
    </>
  );
};

export default Depoimentos;