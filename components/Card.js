import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";

function Cards(props) {
  return (
    <Card
      className="color_nav text-light"
      style={{ width: "50vw", minWidth: "270px" }}
    >
      <Image
        className={props.className}
        alt={props.alt}
        width={props.width}
        height={props.height}
        {...props}
        src={props.src}
      />
      <Card.Body>
        <Card.Title>{props.contentTitle}</Card.Title>
        <Card.Text>{props.contentText}</Card.Text>

        <Link href={props.hrfeButtonOne}>
          <Button variant="success">{props.buttonOne}</Button>
        </Link>
        <br></br>
        <br></br>
        <Link href={props.hrfeButtonTwo}>
          <Button variant="success">{props.buttonTwo}</Button>
        </Link>
        <br></br>
        <br></br>
        <Card.Text>
          <small>{props.contentTextsmall}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Cards.propTypes = {
  contentTitle: PropTypes.string,
  contentText: PropTypes.string,
  contentTitle: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Cards;
