import React from "react";
import { Behavior, ViewingDirection } from "@iiif/vocabulary";

interface NebariProps {
  behavior?: Behavior;
  items: [];
  viewingDirection?: ViewingDirection;
}

const Nebari: React.FC<NebariProps> = ({ items }) => {
  return <>...</>;
};

export default Nebari;
