import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { Label, Thumbnail } from "@samvera/nectar-iiif";
import React, { useEffect, useState } from "react";
import { ItemStyled } from "@/components/Item/Item.styled";
import { NebariItem } from "@/types/nebari";
import { useInView } from "react-intersection-observer";
import { m, LazyMotion, domAnimation, MotionConfig } from "framer-motion";

interface ItemProps {
  active?: boolean;
  fixedAspectRatio?: number;
  handleClick: (item: NebariItem) => void;
  item: NebariItem;
}

/**
 * This should probbaly be globally defined somewhere
 */
const defaultAspectRatio = 1 / 1;

const Item: React.FC<ItemProps> = ({ item, fixedAspectRatio, handleClick }) => {
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
    <ItemStyled ref={ref} onClick={() => handleClick(item)}>
      <figure>
        <AspectRatio.Root ratio={aspectRatio}>
          <MotionConfig transition={{ duration: 1 }}>
            {inView && item.thumbnail && (
              <LazyMotion features={domAnimation}>
                <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Thumbnail
                    thumbnail={item.thumbnail}
                    altAsLabel={item.label}
                  />
                </m.div>
              </LazyMotion>
            )}
          </MotionConfig>
        </AspectRatio.Root>
        <Label label={item.label} as="figcaption" />
      </figure>
    </ItemStyled>
  );
};

export default Item;
