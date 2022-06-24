import { ItemsStyled } from "./Items.styled";
import React from "react";
import { NebariComponent } from "@/types/nebari";

const Items: React.FC<NebariComponent> = (props) => <ItemsStyled {...props} />;

export default Items;
