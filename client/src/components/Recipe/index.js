import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./recipestyle.css";

//ori naming works
// function Recipe({ title, image, link, header }) {

function Recipe({
  title,
  imageURL,
  itemURL,
  itemURL2,
  instr,
  Button,
  _id,
  button_text,
  handleClick,
  object,
  text
}) {

  console.log("instr", instr);
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        
        <h1 className="recipetitle">{title}</h1>
        {/* <Col size="md-8">
          
        </Col> */}
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn youtube"
              // target="_blank"
              rel="noopener noreferrer"
              target="_blank"
              // href={link}
              href={itemURL}
            >
              Video
            </a>
            <a
              className="btn source"
              // target="_blank"
              rel="noopener noreferrer"
              target="_blank"
              // href={link}
              href={itemURL2}
            >
              Recipe
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row></Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img
            className="img-thumbnail img-fluid w-100"
          
            src={imageURL}
            alt={title}
          />
        </Col>
        <Col size="12 sm-8 md-10">
          <h5 className="howto">How to cook</h5>
          <p>{instr}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Recipe;
