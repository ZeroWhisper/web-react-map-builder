import React from "react";

import { Content } from "./style";

const AppBody = props => {
  return <Content>{props.children}</Content>;
};

export default AppBody;
