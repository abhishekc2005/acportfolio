import Image from "next/image";

const BackgroundHeader = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-32 md:h-48 rounded-2xl overflow-hidden shadow-sm">
        <Image
          src="/header_bg.png"
          alt="Header Background"
          fill
          sizes="(max-width: 672px) 100vw, 672px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="absolute -bottom-10 left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-background overflow-hidden shadow-md z-10">
        <Image
          src="/profile.jpg"
          alt="Chetan Yadav"
          fill
          sizes="96px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default BackgroundHeader;
