import { Behavior, ViewingDirection } from "@iiif/vocabulary";

export interface NebariProps {
  behavior?: Behavior;
  items: [];
  viewingDirection?: ViewingDirection;
}

export interface GridProps extends NebariProps {
  masonry?: boolean;
}
