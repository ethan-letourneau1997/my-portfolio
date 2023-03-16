import { Container, Row, Col, Card } from "react-bootstrap";
import checkBox from "../images/png/checkbox.png";

function Home() {
  return (
    <div className="Home">
      <Container>
        <Row className="text-center">
          <div className="title-wrapper">
            <h1>
              I'm <span className="header-name">Ethan Letourneau</span>
            </h1>
            <h1>and i make websites</h1>
          </div>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center mb-4"
          >
            {/* REST API */}
            <Card className="web-card" style={{ width: "20rem" }}>
              <Card.Body className="p-4">
                <Card.Title className="pb-4 pt-2">Web</Card.Title>
                <Card.Subtitle>
                  Design Modern Responsive web applications
                </Card.Subtitle>
                <hr className="hr my-3" />
                <div className="d-flex flex-column gap-1">
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    HTML, CSS, JavaScript
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    React
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Django, Node, Flask
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Rest API
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Responsive Design
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="d-flex justify-content-center mb-4 "
          >
            {/* REST API */}
            <Card className="code-card" style={{ width: "20rem" }}>
              <Card.Body className="p-4">
                <Card.Title className="pb-4 pt-2">Code</Card.Title>
                <Card.Subtitle>
                  Knowledge in a variety of language and technologies
                </Card.Subtitle>
                <hr className="hr my-3" />
                <div className="d-flex flex-column gap-1">
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Python
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Java
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />C
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Git
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Docker
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            className="d-flex justify-content-center mb-4 "
          >
            {/* REST API */}
            <Card className="data-card" style={{ width: "20rem" }}>
              <Card.Body className="p-4">
                <Card.Title className="pb-4 pt-2">Data</Card.Title>
                <Card.Subtitle>
                  Experience working with large amounts of data
                </Card.Subtitle>
                <hr className="hr my-3" />
                <div className="d-flex flex-column gap-1">
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Database Design
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Database Integration
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    SQL
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Data Analytics
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <img src={checkBox} height="30" alt="" />
                    Tableau
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
