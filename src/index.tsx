import { Behavior, ViewingDirection } from "@iiif/vocabulary";
import Grid from "@/components/Grid/Grid";
import ScrollableList from "@/components/ScrollableList/ScrollableList";

interface NebariProps {
  behavior?: Behavior;
  items: [];
  viewingDirection?: ViewingDirection;
}

export { Grid, ScrollableList };
