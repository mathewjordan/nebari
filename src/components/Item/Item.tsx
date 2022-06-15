import * as AspectRatio from "@radix-ui/react-aspect-ratio";
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
        <AspectRatio.Root ratio={1 / 1}>
          {item.thumbnail && <Thumbnail thumbnail={item.thumbnail} />}
        </AspectRatio.Root>
        <Label label={item.label} as="figcaption" />
      </figure>
    </ItemStyled>
  );
};

export default Item;
