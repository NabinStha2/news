import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SportsCard = ({ image, title, id }) => {
  return (
    <Card className="m-2 rounded">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Link to={`/details/${id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default SportsCard;
