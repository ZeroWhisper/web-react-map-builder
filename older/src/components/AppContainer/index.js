import React from "react";
import { FontFace } from "react-nes-component";

import { Content } from "./style";

const AppContainer = props => {
  return (
    <>
      <Content>
        <FontFace />
        {props.children}
      </Content>
    </>
  );
};

export default AppContainer;
