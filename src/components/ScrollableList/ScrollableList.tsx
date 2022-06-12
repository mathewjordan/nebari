import Items from "@/components/Items/Items";
import { NebariProps } from "@/types/nebari";
import React from "react";

const ScrollableList: React.FC<NebariProps> = ({ items }) => {
  return (
    <>
      <Items items={items} />
    </>
  );
};

export default ScrollableList;
