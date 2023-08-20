import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "./Badges";

const MyCard = ({ cardImg, cardTitle, cardText,bgBadge,textBadge }) => {
  return (
    <Card style={{ width: "17rem"}}>
      <Card.Img variant="top" className="img" src={cardImg} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
      <Badge
      bgBadge={bgBadge}
      textBadge={textBadge}
       />
    </Card>
  );
};

export default MyCard;
