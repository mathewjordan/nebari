import Masonry from "react-masonry-css";
import { styled } from "@/stitches";
import { ItemStyled } from "../Item/Item.styled";

const SliderStyled = styled("div", {
  display: "flex",
  width: "auto",
  maxWidth: "100%",
  overflow: "scroll",

  [`& ${ItemStyled}`]: {
    width: "240px",
    minWidth: "240px",
    marginRight: "1rem",
  },
});

export { SliderStyled };
