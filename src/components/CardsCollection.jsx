import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

export default function CardsCollection() {
  return (
    <div className="card-columns">
      <Card>
        <CardImage
          src="https://preview.ibb.co/gLbbM8/our-team-person.jpg"
          name="funny boy"
        />
        <CardBody title="Card with image">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </CardBody>
      </Card>

      <Card>
        <CardBody title="Just text card">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-warning">
            Go somewhere
          </a>
        </CardBody>
      </Card>

      <Card>
        <CardBody title="Just text card">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" class="card-link">
            Ссылка карты
          </a>
          <a href="/" class="card-link">
            Другая ссылка
          </a>
        </CardBody>
      </Card>

      <Card>
        <CardImage
          src="https://image.ibb.co/e3FE9J/portfolio-clever-poster.png"
          name="funny boy"
        />
        <CardBody title="Card with image">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-success">
            Go somewhere
          </a>
        </CardBody>
      </Card>

      <Card>
        <CardBody title="Just text card">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias
            praesentium quod et qui cupiditate, expedita asperiores dolore sint
            veniam commodi ea porro accusantium voluptatum vero repudiandae
            quaerat, veritatis nobis.
          </p>
          <a href="/" className="btn btn-danger">
            Go somewhere
          </a>
        </CardBody>
      </Card>

      <Card>
        <CardBody title="Just text card">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-secondary">
            Go somewhere
          </a>
        </CardBody>
      </Card>

      <Card>
        <CardImage
          src="https://i.ibb.co/JHBRbjz/some-image.jpg"
          name="funny boy"
        />
        <CardBody title="Card with image">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-info">
            Go somewhere
          </a>
        </CardBody>
      </Card>
    </div>
  );
}
