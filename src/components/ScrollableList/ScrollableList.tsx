import Item from "@/components/Item/Item";
import { NebariComponent } from "@/types/nebari";
import React from "react";

const ScrollableList: React.FC<NebariComponent> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </>
  );
};

export default ScrollableList;
