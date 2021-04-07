import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import SportsCard from "../components/SportsCard";
import { sportsNewsArticles } from "../newsApi";

const SportsScreen = () => {
  return (
    <Container>
      <Row>
        <Col md={7} lg={8}>
          <SportsCard
            image={sportsNewsArticles[0].img}
            title={sportsNewsArticles[0].title}
            id={sportsNewsArticles[0].id}
          />
        </Col>
        <Col md={5} lg={4} className="sports_screen__sideNews">
          {sportsNewsArticles.slice(1, 6).map((article) => (
            <Row key={article.id}>
              <Card rounded className="sports_screen__sideCard m-2">
                <Row>
                  <Col md={4}>
                    <Image
                      src={article.img}
                      rounded
                      className="m-2 sports_screen__sideImg"
                    />
                  </Col>
                  <Col md={8}>
                    <p>{article.tit}</p>
                  </Col>
                </Row>
              </Card>
            </Row>
          ))}
        </Col>
      </Row>
      <Row>
        {sportsNewsArticles.slice(5).map((article) => (
          <Col key={article.id} md={6} lg={4}>
            <SportsCard
              image={article.img}
              title={article.tit}
              id={article.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SportsScreen;
