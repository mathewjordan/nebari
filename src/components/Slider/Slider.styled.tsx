import Masonry from "react-masonry-css";
import { styled } from "@/stitches";
import { ItemStyled } from "../Item/Item.styled";

const SliderStyled = styled("div", {
  display: "flex",
  position: "relative",
  zIndex: "0",
  width: "auto",
  maxWidth: "100%",
  overflow: "scroll",
  alignItems: "flex-start",

  [`& ${ItemStyled}`]: {
    width: "240px",
    minWidth: "240px",
    marginRight: "2rem",
  },
});

export { SliderStyled };
