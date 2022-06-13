import { ItemStyled } from "@/components/Item/Item.styled";
import { Label } from "@samvera/nectar-iiif";
import React from "react";
import { NebariItem } from "@/types/nebari";

interface ItemProps {
  item: NebariItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <ItemStyled>
      <Label label={item.label} />
    </ItemStyled>
  );
};

export default Item;
