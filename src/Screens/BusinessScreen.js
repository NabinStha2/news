import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import NewsCard from "../components/NewsCard";
import { businessNewsArticles } from "../newsApi";

const BusinessScreen = () => {
  return (
    <Container>
      <Row>
        <Col md={7} lg={8}>
          <NewsCard article={businessNewsArticles[0]} />
        </Col>
        <Col md={5} lg={4} className="sports_screen__sideNews">
          {businessNewsArticles.slice(1, 5).map((article) => (
            <Row key={article.id}>
              <Card rounded className="sports_screen__sideCard m-2">
                <Row>
                  <Col md={4}>
                    <Image
                      src={article.urlToImage}
                      rounded
                      className="m-2 sports_screen__sideImg"
                    />
                  </Col>
                  <Col md={8}>
                    <p>{article.title}</p>
                  </Col>
                </Row>
              </Card>
            </Row>
          ))}
        </Col>
      </Row>
      <Row>
        {businessNewsArticles.slice(5).map((article) => (
          <Col key={article.id} md={6} lg={4}>
            <NewsCard article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BusinessScreen;
