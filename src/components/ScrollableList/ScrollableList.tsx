import Items from "@/components/Items/Items";
import React from "react";

interface ScrollableListProps {
  items: any;
}

const ScrollableList: React.FC<ScrollableListProps> = ({ items }) => {
  return (
    <>
      <Items items={items} />
    </>
  );
};

export default ScrollableList;
