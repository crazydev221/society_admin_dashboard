import React, { useState } from "react";
// import Skycons from "react-skycons";

// import footer component
import Copyright from "../../ui/Footer/Copyright/Component";

//import ui widgets component
import GraphWidget from "../../ui/widget/GraphWidget/Component";
import GraphTitleWidget from "../../ui/widget/GraphTitleWidget/Component";
import PlainLiveWidget from "../../ui/widget/PlainLiveWidget/Component";
import GraphLiveWidget from "../../ui/widget/GraphLiveWidget/Component";
import BarDoubleWidget from "../../ui/widget/BarDoubleStackWidget/Component";
import LineAreaGraphWidget from "../../ui/widget/LineAreaGraphWidget/Component";
import ServerLoadWidget from "../../ui/widget/ServerLoadWidget/Component";
import SaleStackBar from "../../ui/widget/SaleStackBarWidget/Component";
import MapWidget from "../../ui/widget/MapWidget/Component";

import PageBreadcrumb from "../../UIElements/Breadcrumb";

import "./style.css";

const Content = () => {
  const progress = (
    <React.Fragment>
      <div
        className="card-progress"
        style={{ "backgroundColor": "rgba(0, 0, 0, 0.6)", display: "block" }}
      ></div>
    </React.Fragment>
  );

  const [refreshOne, setRefreshOne] = useState(false);
  const [refreshTwo, setRefreshTwo] = useState(false);
  const [refreshThree, setRefreshThree] = useState(false);
  const [refreshFour, setRefreshFour] = useState(false);
  const [refreshFive, setRefreshFive] = useState(false);
  const [refreshSix, setRefreshSix] = useState(false);
  const [refreshSeven, setRefreshSeven] = useState(false);
  const [refreshEight, setRefreshEight] = useState(false);
  const [refreshNine, setRefreshNine] = useState(false);
  const [refreshTen, setRefreshTen] = useState(false);
  const [refreshEleven, setRefreshEleven] = useState(false);
  const [refreshTwelve, setRefreshTwelve] = useState(false);
  const [refreshThirteen, setRefreshThirteen] = useState(false);
  const [refreshFourteen, setRefreshFourteen] = useState(false);
  const [refreshFifteen, setRefreshFifteen] = useState(false);

  return (
    <div className="page-content-wrapper ">
      {/* START PAGE CONTENT */}
      <div className="content sm-gutter">
        <div className="container-fluid  sm-padding-10">
          <PageBreadcrumb>
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </PageBreadcrumb>

          <div className="row">
            <div className="col-lg-6 col-xlg-4">
              <div className="row">
                <div className="col-lg-6 col-sm-6  d-flex flex-column p-l-10">

                  <div
                    className="card social-card share  full-width m-b-10 no-border"
                    data-social="item"
                  >
                    <div className="card-header">
                      <h5 className="text-primary pull-left fs-12 d-flex align-items-center">
                        Update <i className="pg-icon">circle_fill</i>
                      </h5>
                      <div className="pull-right small hint-text d-flex align-items-center">
                        5,345 <i className="pg-icon m-l-5">comment</i>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="card-description">
                      <h3>
                        page dashboard Version 3.0 now release with limitless
                        layout possibilities
                      </h3>
                    </div>
                    <div className="card-footer clearfix">
                      <div className="pull-left">
                        via <span className="text-complete">Pages</span>
                      </div>
                      <div className="pull-right hint-text">July 23</div>
                      <div className="clearfix"></div>
                    </div>
                  </div>

                  <div className="card no-border widget-loader-bar m-b-10">
                    <div className="container-xs-height full-height">
                      <div className="row-xs-height">
                        <div className="col-xs-height col-top">
                          <div className="card-header  top-left top-right">
                            <div className="card-title">
                              <span className="font-montserrat all-caps d-flex align-items-center">Weekly Sales <i className="pg-icon">chevron_right</i>
                              </span>
                            </div>
                            <div className="card-controls">
                              <ul>
                                <li><a href="#" className="portlet-refresh text-black" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-xs-height">
                        <div className="col-xs-height col-top">
                          <div className="p-l-20 p-t-50 p-b-40 p-r-20">
                            <h3 className="no-margin p-b-5">$24,000</h3>
                            <span className="small hint-text pull-left">71% of total goal</span>
                            <span className="pull-right small text-primary">$23,000</span>
                          </div>
                        </div>
                      </div>
                      <div className="row-xs-height">
                        <div className="col-xs-height col-bottom">
                          <div className="progress progress-small m-b-0">
                            <div className="progress-bar progress-bar-primary" style={{ width: '71%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="card no-border widget-loader-bar m-b-10">
                    <div className="container-xs-height full-height">
                      <div className="row-xs-height">
                        <div className="col-xs-height col-top">
                          <div className="card-header  top-left top-right">
                            <div className="card-title">
                              <span className="font-montserrat all-caps d-flex align-items-center">Page Visits <i className="pg-icon">chevron_right</i>
                              </span>
                            </div>
                            <div className="card-controls">
                              <ul>
                                <li><a href="#" className="portlet-refresh text-black" data-toggle="refresh"><i className="portlet-icon portlet-icon-refresh"></i></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-xs-height">
                        <div className="col-xs-height col-top">
                          <div className="p-l-20 p-t-50 p-b-40 p-r-20">
                            <h3 className="no-margin p-b-5">423</h3>
                            <span className="small hint-text pull-left">22% higher</span>
                            <span className="pull-right small text-danger">$23,000</span>
                          </div>
                        </div>
                      </div>
                      <div className="row-xs-height">
                        <div className="col-xs-height col-bottom">
                          <div className="progress progress-small m-b-0">

                            <div className="progress-bar progress-bar-danger" style={{ width: "15%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6  d-flex flex-column">

                  <div className="card social-card share  full-width m-b-10 no-border" data-social="item">
                    <div className="card-header clearfix">
                      <h5 className="text-success pull-left fs-12 d-flex align-items-center">Stock Market <i className="pg-icon">circle_fill</i></h5>
                      <div className="pull-right small hint-text d-flex align-items-center">
                        5,345 <i className="pg-icon m-l-5">comment</i>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="card-description">
                      <h5 className="no-margin">Apple Inc.</h5>
                      <h5 className="small hint-text no-margin">NASDAQ: AAPL - Nov 13 8:37 AM ET</h5>
                      <h3 className="m-b-0">111.25 <span className="text-success"><i className="pg-icon text-success">arrow_up</i> 0.15</span>
                      </h3>
                    </div>
                    <div className="card-footer clearfix">
                      <div className="pull-left">by <span className="text-success">John Smith</span>
                      </div>
                      <div className="pull-right hint-text">
                        Apr 23
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="card social-card share share-other full-width m-b-10 d-flex flex-1 full-height no-border sm-vh-75" data-social="item">
                    <div className="circle" data-toggle="tooltip" title="" data-container="body" data-original-title="Label">
                    </div>
                    <div className="card-content flex-1 social-card-img" data-pages-bg-image="assets/img/social_new.jpg" >
                      <ul className="buttons ">
                        <li>
                          <a href="#"><i className="pg-icon">expand</i>
                          </a>
                        </li>
                        <li>
                          <a href="#"><i className="pg-icon">heart</i>
                          </a>
                        </li>
                      </ul>
                      <div className="bg-overlay" style={{ opacity: 0 }}></div></div>
                    <div className="card-description">
                      <p><a href="#">#TBT</a> :D</p>
                    </div>
                    <div className="card-footer clearfix">
                      <div className="time">few seconds ago</div>
                      <ul className="reactions">
                        <li><a href="#" className="d-flex align-items-center">5,345 <i className="pg-icon m-l-5">comment</i></a>
                        </li>
                        <li><a href="#" className="d-flex align-items-center">23K <i className="pg-icon m-l-5">heart</i></a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-header clearfix">
                      <div className="user-pic">
                        <img alt="Avatar" width="33" height="33" data-src-retina="../../assets/img/profiles/avatar_small2x.jpg" data-src="../../assets/img/profiles/avatar.jpg" src="../../assets/img/profiles/avatar_small2x.jpg" />
                      </div>
                      <h5>David Nester</h5>
                      <h6>Shared a link on your wall</h6>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div className="col-lg-6 col-xlg-5 m-b-10 d-flex">
              <div className="widget-11 widget-11-3 card no-border no-margin widget-loader-bar">
                <div className="card-header">
                  <div className="card-title">Today's Table
                  </div>
                  <div className="card-controls">
                    <ul>
                      <li>	
                      <a data-toggle="refresh" className={`card-refresh ${refreshOne ? 'refreshing' : ''}`} href=""
													onClick={(e) => {
														e.preventDefault()
														setRefreshOne(true);
														setTimeout(() => {
														setRefreshOne(false)
														}, 2000)
													}}
													>
													<i className={`card-icon card-icon-refresh ${refreshOne ? 'fade' : ''}`}></i>
													<i className={`card-icon-refresh-lg-white-animated ${refreshOne ? 'active' : ''}`} style={{ "position": "absolute", "top": "14px", "right": "20px" }}></i>
												</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-l-20 p-r-20 p-b-10 p-t-5">
                  <div className="pull-left">
                    <h3 className="text-primary no-margin">Pages</h3>
                  </div>
                  <h4 className="pull-right semi-bold no-margin"><sup>
                    <small className="semi-bold">$</small>
                  </sup> 102,967
                  </h4>
                  <div className="clearfix"></div>
                </div>
                <div className="widget-11-3-table auto-overflow">
                  <table className="table table-condensed table-hover">
                    <tbody>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">$1000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">janedrooler</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">$1000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">$1000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">$1000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">$1000</span>
                        </td>
                      </tr>

                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">$1000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">$1000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">dewdrops</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18">$27</span>
                        </td>
                      </tr>
                      <tr>
                        <td className=" fs-12">Purchase CODE #2345</td>
                        <td className="text-right">
                          <span className="hint-text small">johnsmith</span>
                        </td>
                        <td className="text-right b-r b-dashed b-grey">
                          <span className="hint-text small">Qty 1</span>
                        </td>
                        <td>
                          <span className="font-montserrat fs-18 text-primary">$1000</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-t-15 p-b-15 p-l-20 p-r-20">
                  <p className="small no-margin">
                    <a href="#" className="btn-circle-arrow b-grey"><i className="pg-icon">chevron_down</i></a>
                    <span className="hint-text ">Show more details of <a href="#"> Revox pvt ltd </a></span>
                  </p>
                </div>
                {refreshOne ? progress : null}
              </div>
            </div>

            <div className="visible-xlg col-xlg-3">
              <div className="ar-2-3">
                <div className="widget-11 card   no-margin widget-loader-bar">
                  <div className="card-header">
                    <div className="card-title">Today's Table</div>
                    <div className="card-controls">
                      <ul>
                        <li>
                          <a
														data-toggle="refresh"
														className={`card-refresh ${
															refreshFour ? "refreshing" : ""
														}`}
														href=""
														onClick={(e) => {
															e.preventDefault();
															setRefreshFour(true);
															setTimeout(() => {
																setRefreshFour(false);
															}, 2000);
														}}
													>
														<i
															className={`card-icon card-icon-refresh ${
																refreshFour ? "fade" : ""
															}`}
														></i>
														<i
															className={`card-icon-refresh-lg-white-animated ${
																refreshFour ? "active" : ""
															}`}
															style={{
																position: "absolute",
																top: "14px",
																right: "20px",
															}}
														></i>
													</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-l-20 p-r-20 p-b-10 p-t-5">
                    <div className="pull-left">
                      <h3 className="text-primary no-margin">Pages</h3>
                    </div>
                    <h4 className="pull-right semi-bold no-margin">
                      <sup>
                        <small className="semi-bold">$</small>
                      </sup>{" "}
                      102,967
                    </h4>
                    <div className="clearfix"></div>
                    {refreshFour ? progress : null}
                  </div>
                  <div className="widget-11-table auto-overflow">
                    <table className="table table-condensed table-hover">
                      <tbody>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">janedrooler</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">dewdrops</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18">$27</span>
                          </td>
                        </tr>
                        <tr>
                          <td className=" fs-12">Purchase CODE #2345</td>
                          <td className="text-right">
                            <span className="hint-text small">johnsmith</span>
                          </td>
                          <td className="text-right b-r b-dashed b-grey">
                            <span className="hint-text small">Qty 1</span>
                          </td>
                          <td>
                            <span className="font-montserrat fs-18 text-primary">
                              $1000
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-t-15 p-b-15 p-l-20 p-r-20">
                    <p className="small no-margin">
                      <a href="#" className="btn-circle-arrow b-grey">
                        <i className="pg-icon">chevron_down</i>
                      </a>
                      <span className="hint-text ">
                        Show more details of <a href="#"> Revox pvt ltd </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-4 m-b-10">
              <div className=" card   no-margin widget-loader-circle todolist-widget pending-projects-widget">
                <div className="card-header ">
                  <div className="card-title">
                    <span className="d-flex align-items-center font-montserrat all-caps">
                      Recent projects <i className="pg-icon">chevron_right</i>
                    </span>
                  </div>
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a data-toggle="refresh" className={`card-refresh ${refreshSix ? 'refreshing' : ''}`} href=""
                            onClick={(e) => {
                            e.preventDefault()
                            setRefreshSix(true);
                            setTimeout(() => {
                            setRefreshSix(false)
                              }, 2000)
                            }}
                          >
                            <i className={`card-icon card-icon-refresh ${refreshSix ? 'fade' : ''}`}></i>
                            <i className={`card-icon-refresh-lg-white-animated ${refreshSix ? 'active' : ''}`} style={{ "position": "absolute", "top": "14px", "right": "20px" }}></i>
                        </a>
                      </li>                     
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="">Ongoing projects at <span className="semi-bold">pages</span></h5>
                  <ul className="nav nav-tabs nav-tabs-simple m-b-20" role="tablist" data-init-reponsive-tabs="collapse">
                    <li className="nav-item"><a href="#pending" className="active" data-toggle="tab" role="tab" aria-expanded="true">Pending</a>
                    </li>
                    <li className="nav-item"><a href="#completed" data-toggle="tab" role="tab" aria-expanded="false">Completed</a>
                    </li>
                  </ul>
                  <div className="tab-content no-padding">
                    <div className="tab-pane active" id="pending">
                      <div className="p-t-10">
                        <div className="d-flex">
                          <span className="icon-thumbnail bg-contrast-low pull-left">kp</span>
                          <div className="flex-1 full-width overflow-ellipsis">
                            <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">Revox Ltd
                            </p>
                            <h5 className="no-margin overflow-ellipsis ">Kepler - wordpress builder</h5>
                          </div>
                        </div>
                        <div className="m-t-15">
                          <p className="hint-text small pull-left no-margin">71% completed from total</p>
                          <a href="#" className="pull-right "><i className="pg-icon">more_horizontal</i></a>
                          <div className="clearfix"></div>
                        </div>
                        <div className="progress progress-small m-b-15 m-t-10">
                          <div className="progress-bar progress-bar-info" style={{ width: "71%" }}></div>
                        </div>
                      </div>
                      <div className="p-t-15">
                        <div className="d-flex">
                          <span className="icon-thumbnail bg-warning-light pull-left ">cr</span>
                          <div className="flex-1 full-width overflow-ellipsis">
                            <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">Nike Ltd
                            </p>
                            <h5 className="no-margin overflow-ellipsis ">Corporate rebranding</h5>
                          </div>
                        </div>
                        <div className="m-t-15">
                          <p className="hint-text small pull-left no-margin">20% completed from total</p>
                          <a href="#" className="pull-right "><i className="pg-icon">more_horizontal</i></a>
                          <div className="clearfix"></div>
                        </div>
                        <div className="progress progress-small m-b-15 m-t-10">
                          <div className="progress-bar progress-bar-warning" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block m-t-30">See all projects</a>
                    </div>
                    <div className="tab-pane" id="completed">
                      <div className="p-t-10">
                        <div className="d-flex">
                          <span className="icon-thumbnail bg-contrast-higher pull-left ">ws</span>
                          <div className="flex-1 full-width overflow-ellipsis">
                            <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">Apple Corp
                            </p>
                            <h5 className="no-margin overflow-ellipsis ">Marketing Campaign for revox</h5>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="m-t-15">
                          <p className="hint-text  small pull-left no-margin">45% completed from total</p>
                          <a href="#" className="pull-right "><i className="pg-icon">more_horizontal</i></a>
                          <div className="clearfix"></div>
                        </div>
                        <div className="progress progress-small m-b-15 m-t-10">
                          <div className="progress-bar progress-bar-info" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      <div className="p-t-15">
                        <div className="d-flex">
                          <span className="icon-thumbnail bg-primary-light pull-left ">cr</span>
                          <div className="flex-1 full-width overflow-ellipsis">
                            <p className="hint-text all-caps font-montserrat fs-11 no-margin overflow-ellipsis ">Yahoo Inc
                            </p>
                            <h5 className="no-margin overflow-ellipsis ">Corporate rebranding</h5>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                        <div className="m-t-15">
                          <p className="hint-text  small pull-left no-margin">20% completed from total</p>
                          <a href="#" className="pull-right "><i className="pg-icon">more_horizontal</i></a>
                          <div className="clearfix"></div>
                        </div>
                        <div className="progress progress-small m-b-15 m-t-10">
                          <div className="progress-bar progress-bar-warning" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      <a href="#" className="btn btn-block m-t-30">See all projects</a>
                    </div>
                  </div>
                  {refreshSix ? progress : null}
                </div>
              </div>
            </div>
            <div className="col-lg-8 m-b-10">

              <div className="widget-13 card   no-margin widget-loader-circle full-height">
                <div className="card-header  pull-up top-right ">
                  <div className="card-controls">
                    <ul>
                      <li>
                        <a data-toggle="refresh" className={`card-refresh ${refreshThirteen ? 'refreshing' : ''} text-black`} href=""
                          onClick={(e) => {
                            e.preventDefault()
                            setRefreshThirteen(true);
                            setTimeout(() => {
                              setRefreshThirteen(false)
                            }, 2000)
                          }}
                        >
                          <i className={`card-icon card-icon-refresh ${refreshThirteen ? 'fade' : ''}`}></i>
                          <i className={`card-icon-refresh-lg-white-animated ${refreshThirteen ? 'active' : ''}`} style={{ "position": "absolute", "top": "14px", "right": "20px" }}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="container-sm-height no-overflow">
                  <div className="row row-sm-height">
                    <div className="col-sm-5 col-lg-4 col-xlg-3 col-sm-height col-top no-padding">
                      <div className="card-header  ">
                        <div className="card-title">Geolocation
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="nav nav-pills m-t-10 m-b-15" role="tablist">
                          <li className="active">
                            <a href="#tab1" data-toggle="tab" role="tab" className="b-a b-grey text-color">
                              fb
                            </a>
                          </li>
                          <li>
                            <a href="#tab2" data-toggle="tab" role="tab" className="b-a b-grey text-color">
                              gl
                            </a>
                          </li>
                          <li>
                            <a href="#tab3" data-toggle="tab" role="tab" className="b-a b-grey text-color">
                              am
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab1">
                            <h3 className="m-t-5 m-b-20">Facebook</h3>
                            <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                            <p className="all-caps font-montserrat  no-margin text-success ">14,256</p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">Today</p>
                            <p className="all-caps font-montserrat  no-margin text-warning ">24</p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">Week</p>
                            <p className="all-caps font-montserrat  no-margin text-success ">56</p>
                          </div>
                          <div className="tab-pane " id="tab2">
                            <h3 className="m-t-5 m-b-20">Google</h3>
                            <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                            <p className="all-caps font-montserrat  no-margin text-success ">14,256</p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">Today</p>
                            <p className="all-caps font-montserrat  no-margin text-warning ">24</p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">Week</p>
                            <p className="all-caps font-montserrat  no-margin text-success ">56</p>
                          </div>
                          <div className="tab-pane" id="tab3">
                            <h3 className="m-t-5 m-b-20">Amazon</h3>
                            <p className="hint-text all-caps font-montserrat small no-margin ">Views</p>
                            <p className="all-caps font-montserrat  no-margin text-success ">14,256</p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">Today</p>
                            <p className="all-caps font-montserrat  no-margin text-warning ">24</p>
                            <br />
                            <p className="hint-text all-caps font-montserrat small no-margin ">Week</p>
                            <p className="all-caps font-montserrat  no-margin text-success ">56</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-l-20 p-r-20 p-t-10 p-b-10 pull-bottom full-width hidden-xs">
                        <p className="no-margin">
                          <a href="#" className="btn-circle-arrow b-grey"><i className="pg-icon">chevron_down</i></a>
                          <span className="hint-text">Super secret options</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-7 col-lg-8 col-xlg-9 col-sm-height col-top no-padding relative">
                      <div className="bg-success widget-13-map mapplic-element" style={{ "height": "465px" }}>
                        <MapWidget />
                      </div>
                      {refreshThirteen ? progress : null}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      {/* END PAGE CONTENT */}
      {/* START COPYRIGHT */}
      <Copyright
        year={"2014"}
        brand={"REVOX"}
        reserved={"All rights reserved."}
        terms={"Terms of use"}
        policy={"Privacy Policy"}
      />
      {/* END COPYRIGHT */}

    </div>
  );
};

export default Content;
