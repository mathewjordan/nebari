import React, { useEffect, useRef, useState } from "react";
import { GridStyled } from "@/components/Grid/Grid.styled";
import Item from "@/components/Item/Item";
import { media } from "@/stitches";
import { NebariGrid } from "@/types/nebari";
import { useMediaQuery } from "@/hooks/use-media-query";

const Grid: React.FC<NebariGrid> = ({ items }) => {
  const [cols, setCols] = useState(5);

  let mediaQuery = new Map();
  mediaQuery.set("xs", useMediaQuery(media.xs));
  mediaQuery.set("sm", useMediaQuery(media.sm));
  mediaQuery.set("md", useMediaQuery(media.md));
  mediaQuery.set("lg", useMediaQuery(media.lg));
  mediaQuery.set("xl", useMediaQuery(media.xl));

  useEffect(() => {
    if (mediaQuery.get("xs")) {
      setCols(1);
      return;
    }
    if (mediaQuery.get("sm")) {
      setCols(2);
      return;
    }
    if (mediaQuery.get("md")) {
      setCols(3);
      return;
    }
    if (mediaQuery.get("lg")) {
      setCols(4);
      return;
    }
    if (mediaQuery.get("xl")) {
      setCols(5);
      return;
    }
  }, [mediaQuery]);

  return (
    <GridStyled
      breakpointCols={cols}
      className="nebari-grid"
      columnClassName="nebari-grid-column"
    >
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </GridStyled>
  );
};

export default Grid;
