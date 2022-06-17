import Item from "@/components/Item/Item";
import { NebariComponent } from "@/types/nebari";
import React from "react";
import { SliderStyled } from "./Slider.styled";

const Slider: React.FC<NebariComponent> = ({ itemCallback, items }) => {
  return (
    <SliderStyled>
      {items.map((item) => (
        <Item
          fixedAspectRatio={1 / 1}
          handleClick={itemCallback}
          item={item}
          key={item.id}
        />
      ))}
    </SliderStyled>
  );
};

export default Slider;
