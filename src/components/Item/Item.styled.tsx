import { styled } from "@/stitches";

const ItemStyled = styled("div", {
  zIndex: "1",
  width: "100%",

  figure: {
    padding: "0",
    margin: "0",

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
});

export { ItemStyled };
