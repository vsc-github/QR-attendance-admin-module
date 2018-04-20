import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Automated Attendance System</h1>
        </header>
        <p className="App-intro">
          Please scan this code from your phone:
        </p>
          <div className="qr-code-wrap">
              <QRCode
                  value={`${new Date().toJSON().slice(0,10).split('-').reverse().join('-')}_${Date.now()}`}
                  size={256}
              />
          </div>
          <div style={{ marginTop: '2rem'}}> The value of current QR code is <b>{`${new Date().toJSON().slice(0,10).split('-').reverse().join('-')}_${Date.now()}`}</b> </div>
      </div>
    );
  }
}

export default App;
