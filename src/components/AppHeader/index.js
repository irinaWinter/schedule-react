import React, { Component } from "react";
import "./index.scss";

export default class AppHeader extends Component {
  render() {
    return (
      <header className="page-header">
        <div className="page-header__container container">
          <div className="page-header__wrapper">
            <h1 className="page-header__heading">Конструктор расписания</h1>
          </div>
        </div>
      </header>
    );
  }
}
