import React from "react";

import CardList from "../CardList/CardList";
import Header from "../Header/Header";

function Container() {
  return (
    <>
      <Header />
      <div className="container">
        <CardList />
      </div>
    </>
  );
}

export default Container;
