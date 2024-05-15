import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Switch, withRouter } from "react-router";
import { useSelector } from "react-redux";

import ExtraLogin from "../components/Extra/Login";
import Extra404Page from "../components/Extra/404Page";
import Sidebar from '../components/Theme-Corporate/SidebarCorporate';

import Supports from "../pages/customs/supports/Supports";
import Home from "../pages/customs/Home";
import Logout from "../pages/customs/Logout";
import CreateSupport from "../pages/customs/supports/CreateSupport";
import OurWorksGallery from "../pages/customs/outworks/OurWorksGallery";
import CreateOurWork from "../pages/customs/outworks/CreateOurWork";
import NitaliaBlanket from "../pages/customs/nitaliablanket/NitaliaBlanket";
import CreateNitaliaBlankets from "../pages/customs/nitaliablanket/CreateNitaliaBlanket";

const Corporate = ({ location }) => {
  let path = location.pathname;
  const isAuthenticated = useSelector(state => state.AuthReducer.isAuthenticated);

  return (
    <div>
      {!path.includes("/login") &&
        !path.includes("/register") &&
        !path.includes("/404") &&
        !path.includes("/500") && (

          <div className="page-content-wrapper full-height">
            <div className="content full-height">
              <Sidebar location="/home" />
            </div>
          </div>
        )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={ExtraLogin} />

        {isAuthenticated && (
          <>
            <Route exact path="/supports" component={Supports} />
            <Route exact path="/ourworks" component={OurWorksGallery} />
            <Route exact path="/nitaliablankets" component={NitaliaBlanket} />
            <Route exact path="/add-support/:_id" component={CreateSupport} />
            <Route exact path="/add-ourwork/:_id" component={CreateOurWork} />
            <Route exact path="/add-nitaliablanket/:_id" component={CreateNitaliaBlankets} />
            
            <Route exact path="/logout" component={Logout} />
          </>
        )}
        <Route path="*" component={Extra404Page} />
      </Switch>

    </div >
  );
};

export default withRouter(Corporate);
