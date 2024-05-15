import React from 'react'

import '../style.css';

const content = () => {
    return (
        <React.Fragment>
            
            <div className="d-flex justify-content-center full-height-extra full-width align-items-center">
                <div className="error-container text-center">
                    <h1 className="error-number">404</h1>
                    <h2 className="semi-bold">Sorry but we couldnt find this page</h2>
                    <p className="p-b-10">This page you are looking for does not exsist <a href="#">Report this?</a>
                    </p>
                    <div className="error-container-innner text-center">
                        <form className="error-form">
                            <div className=" transparent text-left">
                                <div className="form-group form-group-default input-group">
                                    <div className="form-input-group">
                                        <label>Search</label>
                                        <input className="form-control" placeholder="Try searching the missing page" type="email"/>
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text transparent">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="pull-bottom sm-pull-bottom full-width d-flex align-items-center justify-content-center">
                <div className="error-container">
                    <div className="error-container-innner">
                        <div className="p-b-30 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix d-flex-md-up row no-margin">
                            <div className="col-md-3 no-padding d-flex align-items-center justify-content-center">
                                <img alt="" data-src="/assets/img/demo/pages_icon.png" 
                                    data-src-retina="/assets/img/demo/pages_icon_2x.png" height="60" 
                                    src="/assets/img/demo/pages_icon.png" width="60"/>
                            </div>
                            <div className="col-md-9 no-padding d-flex align-items-center justify-content-center">
                                <p className="small no-margin flex-1">
                                    Create a pages account. If you have a facebook account, log into it for this process. 
                                    Sign in with <a href="#">Facebook</a> or <a href="#">Google</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default content
