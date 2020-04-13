import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import logo from './logo.svg';
import './App.css';
import {decrementValue, incrementValue} from "./redux/actions/value_actions";

function App() {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CRA starter boilerplate with redux configured
        </p>
        <button onClick={() => dispatch(incrementValue())}>+</button>
        <p style={{ color: "#fff" }}>{value}</p>
        <button onClick={() => dispatch(decrementValue())}>-</button>
      </header>
    </div>
  );
}

export default App;
