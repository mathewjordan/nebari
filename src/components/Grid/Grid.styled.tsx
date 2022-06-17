import Masonry from "react-masonry-css";
import { styled } from "@/stitches";

const GridStyled = styled(Masonry, {
  display: "flex",
  width: "auto",

  ".nebari-grid-column": {
    marginRight: "2rem",

    "&:last-child": {
      marginRight: "0",
    },
  },
});

export { GridStyled };
