import { GridProps } from "@/types/nebari";
import { GridStyled } from "@/components/Grid/Grid.styled";
import Item from "@/components/Item/Item";
import React from "react";

const Grid: React.FC<GridProps> = ({ items }) => {
  return (
    <GridStyled breakpointCols={3} className="nebari-grid">
      {items.map((item) => (
        <Item item={item} />
      ))}
    </GridStyled>
  );
};

export default Grid;
