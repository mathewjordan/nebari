import { NebariComponent, NebariItem } from "@/types/nebari";
import Item from "@/components/Item/Item";
import React from "react";
import { SliderStyled } from "./Slider.styled";
import Controls from "../Controls/Controls";

const Slider: React.FC<NebariComponent> = ({ itemCallback, items }) => {
  return (
    <>
      <Controls />
      <SliderStyled>
        {items.map((item) => (
          <Item
            fixedAspectRatio={1 / 1}
            handleClick={itemCallback as (item: NebariItem) => void}
            item={item}
            key={item.id}
          />
        ))}
      </SliderStyled>
    </>
  );
};

export default Slider;
