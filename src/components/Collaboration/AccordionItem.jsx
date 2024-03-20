import { useState } from "react";

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="mb-[1rem]">
      <button
        className={`items-center flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="flex items-center justify-center h-10 mr-4 rounded-lg bg-primary/5 text-primary">
          <img
            src="/src/assets/check.svg"
            className="w-[24px] h-[24px]"
            alt="icon"
          />
        </div>

        <div className="w-full">
          <h4 className="">{header}</h4>
        </div>
      </button>
      {/* ${
          active ? "block" : "hidden"
        } */}
      <div
        className={`duration-200 ease-in-out  ${active ? "block" : "hidden"}`}
      >
        <p className="py-3 text-base leading-relaxed text-n-4">{text}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
