import React from "react";

import { Content } from "./style";

const AppHeader = props => {
  return <Content>{props.children}</Content>;
};

export default AppHeader;
