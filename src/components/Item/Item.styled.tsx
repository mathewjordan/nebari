import { styled } from "@/stitches";

const ItemStyled = styled("div", {
  zIndex: "1",
  width: "100%",

  figure: {
    padding: "0",
    margin: "1rem",

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      backgroundColor: "#f0f0f0",
      color: "transparent",
    },

    figcaption: {
      padding: "1rem 0",
    },
  },
});

export { ItemStyled };
