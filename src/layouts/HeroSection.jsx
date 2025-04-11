import React from "react";
import Model3D from "../assets/img/Model3D.png";
import Wave from "../assets/img/Wave.png";
import Button from "../components/Button";
import checkicon from "../assets/img/check-icon.png";
import handicon from "../assets/img/hand-icon.png";
import windowicon from "../assets/img/window-icon.png";

const HeroSection = () => {
  return (
    <section className="relative font-poppins bg-linear-to-tr from-white from-35% via-graybg via-70% to-darkergraybg to-90% pb-8 pt-20 px-4 sm:px-8 md:px-12 xl:px-40">
      <div className="w-full h-screen pt-6 sm:flex sm:items-center">
        <div className="h-full  sm:flex-1 sm:pt-16 sm:min-w-[60%] xl:pr-44  xl:min-w-3xl">
          <h2 className="text-paragraph font-semibold md:text-lg">
            Halo Selamat Datang...
          </h2>
          <h1 className="font-bold text-heading mt-2 text-2xl md:text-5xl">
            Request bantuan dan laporkan kendalamu
          </h1>
          <p className="text-sm text-paragraph mt-2 md:text-base">
            IconSup merupakan website pengaduan kendala dan bantuan terhadap 14
            Layanan Icon+. Website ini merupakan project perkuliahan dan bukan
            merupakan website resmi
          </p>
          <div className="flex gap-x-2 sm:gap-x-6 mt-4 sm:mt-6">
            <Button title={"Masuk"} />
            <Button title={"Daftar"} />
          </div>
        </div>
        <div className="w-full hidden h-full sm:block xl:relative">
          <img
            className="sm:max-w-52 md:max-w-72 lg:max-w-60 xl:max-w-64 animate-floatSlow delay-150"
            src={Model3D}
            alt="Model-Icon"
          />
          <img
            className="hidden max-w-30 absolute -top-6 -left-24 animate-floatBottom xl:block"
            src={windowicon}
            alt="Window-Icon"
          />
          <img
            className="hidden max-w-24 absolute bottom-96 right-6 animate-floatTop xl:block"
            src={checkicon}
            alt="Check-Icon"
          />
          <img
            className="hidden max-w-40 absolute -left-40 bottom-50 animate-floatBottom delay-150 xl:block"
            src={handicon}
            alt="Hand-Icon"
          />
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0">
        <img className="w-full h-full" src={Wave} alt="Wave-Background" />
      </div>
    </section>
  );
};

export default HeroSection;
