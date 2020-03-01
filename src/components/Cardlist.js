import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  const renderCards = () => {
    return robots.map(robot => {
      return <Card robot={robot} />;
    });
  };

  return <div>{renderCards()}</div>;
};

export default Cardlist;
