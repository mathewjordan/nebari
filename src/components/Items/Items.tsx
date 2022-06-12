import { Canvas, CollectionItems } from "@iiif/presentation-3";
import { Label } from "@samvera/nectar-iiif";
import React from "react";

interface ItemsProps {
  items: CollectionItems[] | Canvas[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div>
          <Label label={item.label} />
        </div>
      ))}
    </>
  );
};

export default Items;
