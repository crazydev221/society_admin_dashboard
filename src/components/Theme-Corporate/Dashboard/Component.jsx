import React from "react";

import WithoutHeaderLayout from "../../shared/Layouts/WithoutHeader";
import Header from "../Header";
import ContentWrapperComponent from "./Content";

const Component = ({ location }) => {
  // console.log(location);
  return (
    /* START PAGE CONTENT WRAPPER */
    <ContentWrapperComponent />
    /* END PAGE CONTENT WRAPPER */
  );
};

export default Component;
