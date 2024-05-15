import React from "react";

import WithoutHeaderLayout from "../../shared/Layouts/WithoutHeader";
import Header from "../../ui/Header";
import ContentWrapperComponent from "./Content";

const Component = ({ location }) => {
  let path = location.pathname;
  // console.log(location);
  return (
    // <WithoutHeaderLayout location={location}>
    <div
      className={
        path.includes("/executive") || path.includes("/casual")
          ? "no-padding page-container"
          : "page-container"
      }
    >
      {/* <Header location={location} /> */}
      {/* START PAGE CONTENT WRAPPER */}
      <ContentWrapperComponent path={path} />
      {/* END PAGE CONTENT WRAPPER */}
    </div>
    // </WithoutHeaderLayout>
  );
};

export default Component;
