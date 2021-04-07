import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SportsCard from "../components/SportsCard";
import { entertainmentArticles } from "../newsApi";

const SportsScreen = () => {
  //   console.log(entertainmentArticles[0].images.sm);
  return (
    <Container>
      <Row>
        <Col sm={12} lg={12}>
          <SportsCard
            title={entertainmentArticles[0].name}
            image={entertainmentArticles[0].images.sm}
            id={entertainmentArticles[0].id}
          />
        </Col>
        {/* <Col sm={5} lg={4} className="sports_screen__sideNews">
          {entertainmentArticles.slice(1, 6).map((article) => (
            <Row key={article.id}>
              <Card rounded className="sports_screen__sideCard m-2">
                <Row>
                  <Col sm={4}>
                    <Image
                      src={article.images.sm}
                      rounded
                      className="m-2 sports_screen__sidesm"
                    />
                  </Col>
                  <Col sm={8}>
                    <p>{article.name}</p>
                  </Col>
                </Row>
              </Card>
            </Row>
          ))}
        </Col> */}
      </Row>
      <Row>
        {entertainmentArticles.slice(5).map((article) => (
          <Col key={article.id} sm={6} lg={4}>
            <SportsCard
              title={article.name}
              image={article.images.sm}
              id={article.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SportsScreen;
