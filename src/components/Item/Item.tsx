import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { ItemStyled } from "@/components/Item/Item.styled";
import { Label, Thumbnail } from "@samvera/nectar-iiif";
import React from "react";
import { NebariItem } from "@/types/nebari";
import { useInView } from "react-intersection-observer";

interface ItemProps {
  item: NebariItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { ref, inView } = useInView();

  return (
    <ItemStyled ref={ref}>
      <figure>
        <AspectRatio.Root ratio={1 / 1}>
          {inView && item.thumbnail && <Thumbnail thumbnail={item.thumbnail} />}
        </AspectRatio.Root>
        <Label label={item.label} as="figcaption" />
      </figure>
    </ItemStyled>
  );
};

export default Item;
