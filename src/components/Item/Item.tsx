import { Canvas, CollectionItems } from "@iiif/presentation-3";
import { ItemStyled } from "@/components/Item/Item.styled";
import { Label } from "@samvera/nectar-iiif";
import React from "react";

interface ItemsProps {
  item: CollectionItems | Canvas;
}

const Item: React.FC<ItemsProps> = ({ item }) => {
  return (
    <ItemStyled>
      <Label label={item.label} />
    </ItemStyled>
  );
};

export default Item;
