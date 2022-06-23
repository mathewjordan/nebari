import { NebariComponent, NebariItem } from "@/types/nebari";
import React, { useState } from "react";
import Controls from "@/components/Controls/Controls";
import Item from "@/components/Item/Item";
import { SliderStyled } from "./Slider.styled";

const Slider: React.FC<NebariComponent> = ({ itemCallback, items }) => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <>
      <Controls handleChange={setActiveIndex} />
      <SliderStyled>
        {items.map((item, index) => (
          <Item
            active={activeIndex === index}
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
