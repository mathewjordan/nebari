import { styled } from "@/stitches";

const ItemStyled = styled("button", {
  zIndex: "1",
  width: "100%",
  margin: "1rem 0",
  padding: "0",
  cursor: "pointer",
  border: "none",
  display: "inline",
  backgroundColor: "transparent",
  textAlign: "left",

  figure: {
    margin: "0",
    padding: "0",

    img: {
      position: "absolute",
      left: "0",
      top: "0",
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
