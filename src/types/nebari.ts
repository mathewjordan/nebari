import { Behavior, ViewingDirection } from "@iiif/vocabulary";
import { InternationalString } from "@iiif/presentation-3";

export interface NebariItem {
  id: string;
  label: InternationalString;
  type: "Canvas" | "Collection" | "Manifest";
}

export interface NebariComponent {
  behavior?: Behavior;
  items: NebariItem[];
  viewingDirection?: ViewingDirection;
}

export interface NebariGrid extends NebariComponent {
  masonry?: boolean;
}
