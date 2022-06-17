import { Behavior, ViewingDirection } from "@iiif/vocabulary";
import {
  IIIFExternalWebResource,
  InternationalString,
} from "@iiif/presentation-3";

export interface NebariItem {
  id: string;
  label: InternationalString;
  type: "Canvas" | "Collection" | "Manifest";
  thumbnail?: IIIFExternalWebResource[];
}

export interface NebariComponent {
  behavior?: Behavior;
  itemCallback?: (item: NebariItem) => void;
  items: NebariItem[];
  viewingDirection?: ViewingDirection;
}

export interface NebariGrid extends NebariComponent {
  masonry?: boolean;
}
