import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Model3D from "../assets/img/Model3D.png";
import Wave from "../assets/img/Wave.png";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="relative font-poppins bg-linear-to-tr from-white from-35% via-graybg via-70% to-darkergraybg to-90% pb-8 pt-20 px-4 sm:px-8 md:px-12 xl:px-40">
        <div className="w-full h-screen pt-6 sm:flex sm:items-center">
          <div className="h-full  sm:flex-1 sm:pt-16 xl:pr-44  xl:max-w-3xl">
            <h2 className="text-paragraph font-semibold md:text-lg">
              Halo Selamat Datang...
            </h2>
            <h1 className="font-bold text-heading mt-2 text-2xl md:text-5xl">
              Request bantuan dan laporkan kendalamu
            </h1>
            <p className="text-sm text-paragraph mt-2 md:text-base">
              IconSup merupakan website pengaduan kendala dan bantuan terhadap
              14 Layanan Icon+. Website ini merupakan project perkuliahan dan
              bukan merupakan website resmi
            </p>
            <div className="flex gap-x-2 sm:gap-x-6 mt-4 sm:mt-6">
              <Button title={"Masuk"} />
              <Button title={"Daftar"} />
            </div>
          </div>
          <div className="hidden h-full sm:block ">
            <img
              className="sm:max-w-52 md:max-w-72 lg:max-w-60 xl:max-w-64"
              src={Model3D}
              alt="Model-Icon"
            />
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0">
          <img className="w-full h-full" src={Wave} alt="" />
        </div>
      </main>
    </>
  );
};

export default HomePage;
