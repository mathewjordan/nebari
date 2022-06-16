import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { ItemStyled } from "@/components/Item/Item.styled";
import { Label, Thumbnail } from "@samvera/nectar-iiif";
import React, { useEffect, useState } from "react";
import { NebariItem } from "@/types/nebari";
import { useInView } from "react-intersection-observer";

interface ItemProps {
  item: NebariItem;
  fixedAspectRatio?: number;
}

const Item: React.FC<ItemProps> = ({ item, fixedAspectRatio }) => {
  const defaultAspectRatio = 1 / 1;
  const { ref, inView } = useInView();
  const [aspectRatio, setAspectRatio] = useState(
    fixedAspectRatio ? fixedAspectRatio : defaultAspectRatio
  );

  useEffect(() => {
    if (!fixedAspectRatio && item.thumbnail && item.thumbnail?.length > 0) {
      const thumbnail = item.thumbnail[0];
      const width = thumbnail.width ? thumbnail.width : 200;
      const height = thumbnail.height ? thumbnail.height : 200;
      setAspectRatio(width / height);
    }
  }, []);

  return (
    <ItemStyled ref={ref}>
      <figure>
        <AspectRatio.Root ratio={aspectRatio}>
          {inView && item.thumbnail && <Thumbnail thumbnail={item.thumbnail} />}
        </AspectRatio.Root>
        <Label label={item.label} as="figcaption" />
      </figure>
    </ItemStyled>
  );
};

export default Item;
