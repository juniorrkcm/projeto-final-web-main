


import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "flowbite-react";

const Produtos = () => {
  const [countdown, setCountdown] = useState(30);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isActive, countdown]);

  const handleButtonClick = () => {
    setIsActive(true);
    setCountdown(30);
  };

  return (
    <>
      <section className="mt-8 pt-24 pb-24 relative grid grid-cols-3 gap-4 pl-32 pr-32">
        {/* Produto 1 */}
        <Card className="bg-white z-10 shadow-sm flex flex-col justify-between">
          <div className="mb-2 flex justify-center items-center">
            <div
              className="rounded-full overflow-hidden"
              style={{ width: '100px', height: '100%' }}
            >
              <Image
                src="/xbox.png"
                alt="Produto 1"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
              Produto 1
            </h5>
            <p className="text-center mt-4">
              Xbox Series X.
              </p> 
              <p>Contador: {countdown}s</p>
            
            <button onClick={handleButtonClick}>Iniciar Contador</button>
          </div>
        </Card>
        {/* Produto 2 */}
        <Card className="bg-white z-10 shadow-sm flex flex-col justify-between">
          <div className="mb-2 flex justify-center items-center">
            <div
              className="rounded-full overflow-hidden"
              style={{ width: '100px', height: '100%' }}
            >
              <Image
                src="/ps5.png"
                alt="Produto 2"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
              Produto 2
            </h5>
            <p className="text-center mt-4">
              Playstaition 5.
            </p>
            <p>Contador: {countdown}s</p>
            <button onClick={handleButtonClick}>Iniciar Contador</button>
          </div>
        </Card>

        {/* Produto 3 */}
<Card className="bg-white z-10 shadow-sm flex flex-col justify-between">
  <div className="mb-2 flex justify-center items-center">
    <div
      className="rounded-full overflow-hidden"
      style={{ width: '100px', height: '100%' }}
    >
      <Image
        src="/nintendo.png"
        alt="Produto 3"
        width={100}
        height={100}
      />
    </div>
  </div>
  <div className="flex flex-col items-center">
    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
      Produto 3
    </h5>
    <p className="text-center mt-4">
      Nintendo Switch.
    </p>
    <p>Contador: {countdown}s</p>  
    <button onClick={handleButtonClick}>Iniciar Contador</button>
  </div>
</Card>

<Image
src={"/background1.jpg"}
fill
alt="Produtos"
style={{ objectPosition: "0 100%", width: "100%", height: "100%" }}
className="object-cover"
/>

<div style={{ position: "relative", width: "100%", height: "100%" }}>

<div
style={{
  position: "absolute",
  top: "50%",
  left: "155%",
  transform: "translate(-50%, -770%)",
  color: "white",
  fontSize: "2em",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  fontFamily: "Arial, sans-serif",
}}
>
  Produtos
</div>
</div>
<div className="col-span-3 flex justify-center">
            <button className="p-2 flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg focus:ring-2">
            Ver Todos
            </button>
            </div>
      </section>
    </>
  );
};

export default Produtos;
