import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Heading from "../components/Heading";
import Layout from "../components/Layout/Layout";
import Card from "../components/Card";
import sound from "../public/images/soundofheaven.jpg";
import course from "../public/images/JSCourseAssignment.jpg";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Layout></Layout>
      <Container fluid id="top" className="bg-dark">
        <Row id="first-seciton" className="p-5">
          <Col align="center">
            <Heading
              className="p-5"
              color="white"
              lg={7}
              content="My latest projects"
            ></Heading>
          </Col>
        </Row>
        <Row id="first-seciton" className="p-5">
          <Col align="center">
            <Card
              src={sound}
              width={2548}
              height={1315}
              contentTitle="Exam Project SoundOfHeaven"
              contentText="This website is for a high end sound system customer in Drammen Norway. Its a simple website with a elegant design that focuses on presenting the products to the customers, and to create good first impressions."
              hrfeButtonOne="https://github.com/gsrolex/Soundofheaven"
              hrfeButtonTwo="https://soundof.netlify.app/"
              buttonOne="Github"
              buttonTwo="Soundof.netlify.app"
            ></Card>
          </Col>
        </Row>
        <Row className="p-2">
          <Col id="second-section" align="center">
            <div className="dead"></div>
            <Card
              src={course}
              width={2548}
              height={1315}
              contentTitle="JsFrameworksCA"
              contentText="This website was a school project where we focused on showing our skilles when it comes to API calls and wordpress login using JWT token"
              hrfeButtonOne="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-gsrolex"
              hrfeButtonTwo="https://jsframeworksca.netlify.app/"
              buttonOne="Github"
              buttonTwo="jsframeworksca.netlify.app"
            ></Card>
          </Col>
        </Row>
        <Row id="third-section" className="p-2">
          <Col align="center">
            <div className="dead"></div>
            <Card
              src={sound}
              width={2548}
              height={1315}
              contentTitle="Exam Project SoundOfHeaven"
              contentText="This website is for a high end sound system customer in Drammen Norway. Its a simple website with a elegant design that focuses on presenting the products to the customers, and to create good first impressions."
              hrfeButtonOne="https://github.com/gsrolex/Soundofheaven"
              hrfeButtonTwo="https://soundof.netlify.app/"
              contentTextsmall="*I do not have a 3rd website. I am going to resit it over the summer so used this one to fill empty space. "
              buttonOne="Github"
              buttonTwo="Soundof.netlify.app"
            ></Card>
          </Col>
        </Row>
        <Row className="p-3">
          <Col align="center">
            <div className="dead"></div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}
