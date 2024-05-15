import React, { Component } from 'react';
import './pages/scss/pages.scss';
import './App.scss';

import { withRouter } from 'react-router';

import Corporate from './Theme/Corporate';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (

      <div className='App'>
        {/* <Condensed />
        <Executive />
        <Casual />
        <Simple /> */}
        <Corporate />
        {/* <Quickview /> */}
      </div>
    );
  }
}

export default withRouter(App);
