import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewerCard = ({ viewer, viewerCreatedHandlerReset }) => {
  return (
    <Col className="mb-5" sm key={viewer._id}>
      <Link
        to={`/profile/viewer/detail/${viewer._id}`}
        className="no-underline"
        onClick={viewerCreatedHandlerReset()}
      >
        <Card
          style={{ width: "16rem", height: "12rem" }}
          className="card-border profile-description-cards"
        >
          <Card.Body>
            <Card.Title className="viewer-name">{viewer.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Rating: {viewer.rating}{" "}
            </Card.Subtitle>
            <Card.Text>Personality: {viewer.personalityType}</Card.Text>
            <Card.Text>Following Since: {viewer.followingSince}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ViewerCard;
