import Item from "@/components/Item/Item";
import { NebariComponent } from "@/types/nebari";
import React from "react";
import { SliderStyled } from "./Slider.styled";

const Slider: React.FC<NebariComponent> = ({ items }) => {
  const handleClick = (id: string) => {
    console.log(id);
  };

  return (
    <SliderStyled>
      {items.map((item) => (
        <Item
          handleClick={handleClick}
          fixedAspectRatio={1 / 1}
          item={item}
          key={item.id}
        />
      ))}
    </SliderStyled>
  );
};

export default Slider;
