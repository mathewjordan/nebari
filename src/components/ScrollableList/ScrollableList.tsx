import Item from "@/components/Item/Item";
import { NebariProps } from "@/types/nebari";
import React from "react";

const ScrollableList: React.FC<NebariProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </>
  );
};

export default ScrollableList;
