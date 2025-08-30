const SubHeading = ({ text, icon: Icon }) => {
  return (
    <h2 className="w-fit flex flex-row items-center gap-2 justify-center mb-2 sm:mb-3">
      {Icon && <Icon size={18} />}
      <p className="text-lg font-bold text-nowrap">{text}</p>
    </h2>
  );
};

export default SubHeading;
