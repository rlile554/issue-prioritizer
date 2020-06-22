import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Login from './components/Login/Login';
import Prioritizer from './components/Prioritizer/Prioritizer';

function App(props) {
  return (
    <div className="mainContent">
      {!props.apiKey && <Login />}
      {!!props.apiKey && <Prioritizer />}
    </div>
  );
}

const select = (state) => {
  return {
    loading: state.loading,
    apiKey: state.apiKey,
  }
}

export default connect(select)(App);
