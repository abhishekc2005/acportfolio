const SubHeading = ({ text }: { text: string }) => {
  return (
    <h2 className="w-fit flex flex-row items-center gap-2 justify-center mb-1 sm:mb-2">
      <p className="text-lg sm:text-xl font-bold text-nowrap">{text}</p>
    </h2>
  );
};

export default SubHeading;
