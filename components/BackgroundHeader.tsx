import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

const BackgroundHeader = () => {
  return (
    <div className="relative w-full h-30 md:h-48 rounded-3xl overflow-hidden">
      <Image
        src="/header_bg.png"
        alt="Header"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute -bottom-12 left-6 w-24 h-24 rounded-full border-4 border-white overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </div>

      <ModeToggle />
    </div>
  );
};

export default BackgroundHeader;
