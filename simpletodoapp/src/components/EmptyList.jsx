import React from "react";
import { BsEmojiNeutral } from "react-icons/bs";
import { BsEmojiNeutralFill } from "react-icons/bs";

function EmptyList() {
  return (
    <div className="text-customFr w-full h-60 border-2 border-dashed rounded-lg border-customFr flex flex-col gap-5 justify-center items-center">
      <div className="md:text-7xl text-6xl ">
        <BsEmojiNeutralFill />
      </div>
      <p className="lg:text-xl md:text-lg text-base text-center">
        The list is empty! Go do some stuff!
      </p>
    </div>
  );
}

export default EmptyList;
