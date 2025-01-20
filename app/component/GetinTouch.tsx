
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { motion } from "framer-motion";
import Realtoch from './fieldinput';
import EncryptButton from './aniboton'
export function GetinTouch() {
  return (
    <BackgroundBeamsWithCollision className="your-custom-class-name">
      <div className="flex justify-center items-center flex-col gap-5">
        <h2
          className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
        >
          Get in
          <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-[#780206] to-[#061161]">
            Touch
          </span>
        </h2>

        <div
          // initial={{ opacity: 0, y: 200 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 1 }}
          className="flex justify-center items-center"
        >
          <Realtoch />
        </div>

        <div
         
          className="grid min-h-auto place-content-center bg-transparent p-4"
        >
          <EncryptButton />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

