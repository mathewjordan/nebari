import Items from "@/components/Items/Items";
import React from "react";
import { Canvas, CollectionItems } from "@iiif/presentation-3";

interface GridProps {
  items: CollectionItems[] | Canvas[];
  masonry?: boolean;
}

const Grid: React.FC<GridProps> = ({ items }) => {
  return (
    <>
      <Items items={items} />
    </>
  );
};

export default Grid;
