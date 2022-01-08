import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>

      <Row>
        <iframe src="https://datastudio.google.com/embed/reporting/0529499e-813a-4893-9f0a-f49c04b0ca5e/page/nFvhC" width={1200} height={900} frameBorder={0}></iframe>
      </Row>


    </Container>

  );
};

export default withAuthenticationRequired(ProfileComponent);
