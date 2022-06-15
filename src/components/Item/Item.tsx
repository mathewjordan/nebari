import { ItemStyled } from "@/components/Item/Item.styled";
import { Label, Thumbnail } from "@samvera/nectar-iiif";
import React from "react";
import { NebariItem } from "@/types/nebari";

interface ItemProps {
  item: NebariItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <ItemStyled>
      <figure>
        {item.thumbnail && <Thumbnail thumbnail={item.thumbnail} />}
        <Label label={item.label} as="figcaption" />
      </figure>
    </ItemStyled>
  );
};

export default Item;
