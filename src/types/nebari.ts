import { Behavior, ViewingDirection } from "@iiif/vocabulary";
import { ContentResource, InternationalString } from "@iiif/presentation-3";

export interface NebariItem {
  id: string;
  label: InternationalString;
  type: "Canvas" | "Collection" | "Manifest";
  thumbnail?: ContentResource[];
}

export interface NebariComponent {
  behavior?: Behavior;
  items: NebariItem[];
  viewingDirection?: ViewingDirection;
}

export interface NebariGrid extends NebariComponent {
  masonry?: boolean;
}
