import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Nav from './Nav';
import EmailBody from './EmailBody';
import EmailGroup from './EmailGroup';

import "./style.css";

import allMessages from './messages.json';

const content = ({toggleHeaderPopup}) => {
  
  const [selectEmail, setSelectEmail] = useState(null);
  const [slideWidth, setSlideWidth] = useState('0px')

  return (
      <div className="page-content-wrapper full-height">
        <div className="content full-height">
            {/* Start Secondary side bar nav */}
            <Nav to="compose_email" toggleHeaderPopup={toggleHeaderPopup}/>
            {/* End Secondary side bar nav */}
            {/* Start email list content */}
            <div className="inner-content full-height">
              <div className="split-view">
                <Row className="email-content">
                  <Col xs={12} md={"auto"} className="no-padding-right" style={ window.screen.width < 768 ? {width: '372px', position: 'relative'} : {width: '372px'}}>
                    <div className="list-view-group-container" id="email-group-div-id" 
                      style={ window.screen.width < 768 ? {left: slideWidth, transition: 'left 1s ease', zIndex: '2', position: 'inherit', top: '0px !important'} : {left: '0px'}}
                    >
                      {/* Start Email list */}
                      <EmailGroup emailGroups={allMessages.emails} onReadEmail={setSelectEmail} onSlide={setSlideWidth} emailListPosition={slideWidth}/>
                      {/* End Email list */}
                    </div>
                    {/* Start small screen email body */}
                    <div className="email-body-small-screen">
                      <EmailBody viewedEmail={selectEmail} emailGroups={allMessages.emails} onSlide={setSlideWidth}/>
                    </div>
                    {/* End small screen email body */}
                  </Col>
                  {/* Split email detail view */}
                  <Col className="no-padding-left email-body-large-screen">
                    {/* Start Email body */}
                    <EmailBody viewedEmail={selectEmail} emailGroups={allMessages.emails}/>
                    {/* End Email body */}
                  </Col>
                </Row>
                {/* START COMPOSE BUTTON FOR TABS */}
                  <div className="compose-wrapper d-md-none">
                  <Link to="compose_email" className="compose-email text-info pull-right m-r-15 m-t-15">
                      <i className="pg-icon">edit</i>
                  </Link>
                  </div>
                {/* END COMPOSE BUTTON */}
              </div>
            </div>
            {/* End email list content */}
        </div>
    </div>
  );
};

export default content;
