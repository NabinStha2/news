import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "../components/NewsCard";
import { newsArticles } from "../newsApi";

const HomeScreen = ({ match }) => {
  // const keyword = match.params.keyword;
  // console.log(keyword);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <NewsCard article={newsArticles[0]} />
        </Col>
      </Row>
      <Row>
        {newsArticles.slice(1).map((article) => (
          <Col key={article.publishedAt} md={4}>
            <NewsCard article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
