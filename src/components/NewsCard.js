import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  return (
    <Card className="rounded">
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Link to={`/details/${article.source.id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
