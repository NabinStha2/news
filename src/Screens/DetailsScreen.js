import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  businessNewsArticles,
  newsArticles,
  sportsNewsArticles,
} from "../newsApi";

const DetailsScreen = ({ match }) => {
  const articleId = Number(match.params.id);

  const newsArticle = newsArticles.find(
    (article) => article.source.id === articleId
  );
  const businessArticle = businessNewsArticles.find(
    (article) => article.source.id === articleId
  );
  const sportsArticle = sportsNewsArticles.find(
    (article) => article.id === articleId
  );

  return (
    <Container className="ml-auto">
      <Col>
        <Row className="my-3">
          <h2>
            {newsArticle
              ? newsArticle.title
              : businessArticle
              ? businessArticle.title
              : sportsArticle.tit}
          </h2>
        </Row>
        <Row>
          <Image
            id="detail__img"
            src={
              newsArticle
                ? newsArticle.urlToImage
                : businessArticle
                ? businessArticle.urlToImage
                : sportsArticle.img
            }
            rounded
          />
        </Row>
        <Row className="my-3">
          <h4>
            Description:{" "}
            {newsArticle
              ? newsArticle.description
              : businessArticle
              ? businessArticle.description
              : sportsArticle.des}
          </h4>
        </Row>
        <Row>
          <p>
            <span>
              {newsArticle
                ? newsArticle.content
                : businessArticle
                ? businessArticle.content
                : sportsArticle.con}
            </span>
          </p>
        </Row>
      </Col>
    </Container>
  );
};

export default DetailsScreen;
