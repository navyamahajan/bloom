/** import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); **/

import React, { Component } from "react";
import { render } from "react-dom";

import Swipeable from "react-swipy";

import Card from "./components/Card";
import Button from "./components/Button";

import { Users } from "./users";

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class App extends Component {
  state = {
    cards: ["First", "Second", "Third"],
    users: [...Users]
  };

  remove = () =>
    this.setState(({ users }) => ({ users: users.slice(1, users.length) }));

  render() {
    const { users } = this.state;

    return (
      <div style={appStyles}>
        <div style={wrapperStyles}>
          {Users.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left}>Reject</Button>
                    <Button onClick={right}>Accept</Button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>
                <img src={users[0].image} />

                </Card>
              </Swipeable>
              {users.length > 1 && <Card zIndex={-1}>
                <img src={users[1].image} />
              </Card>}
            </div>
          )}
          {users.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

