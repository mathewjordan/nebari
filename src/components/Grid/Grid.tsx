import { GridProps } from "@/types/nebari";
import Items from "@/components/Items/Items";
import React from "react";

const Grid: React.FC<GridProps> = ({ items }) => {
  return (
    <>
      <Items items={items} />
    </>
  );
};

export default Grid;
