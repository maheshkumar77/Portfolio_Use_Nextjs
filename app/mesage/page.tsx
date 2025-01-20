"use client";
import { BackgroundBeamsWithCollision } from "../component/ui/background-beams-with-collision";
import EncryptButton from '../component/aniboton'
import  Realtoch  from '../component/fieldinput'
export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
     <div className="flex justify-center items-center  h-screen w-full flex-col">
     <h2 
     
     className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Get in<span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-[#780206] to-[#061161] ">Toch</span>
      </h2>
      <div
      
      className=" flex justify-center items-center">
      <Realtoch/>
      </div>
      <div
      className="grid min-h-auto place-content-center bg-transparent p-4">
      <EncryptButton />
    </div>
    </div>
    </BackgroundBeamsWithCollision>
  );
}
