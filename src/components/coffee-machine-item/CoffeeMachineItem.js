import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./CoffeeMachineItem.scss";

export const CoffeeMachineItem = props => {
    const { machine } = props;
    const machineContent = machine.content[0];

    return (
        <Container>
            <Button variant="dark">
                <Link to={"/"} style={{ color: "#fff" }}>
                    Back to machines
                </Link>
            </Button>
            <Row style={{ marginTop: "40px" }}>
                <Col md={4}>
                    <Image
                        src={machineContent.machine_gallery[0].thumbUrl}
                        fluid
                    />
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                    <h1 className="machine-title">
                        {machineContent.machine_name}
                    </h1>
                    <h2 className="machine-subtitle">
                        {machineContent.machine_subline}
                    </h2>
                    <p className="machine-description">
                        {machineContent.machine_description_full}
                    </p>
                </Col>
            </Row>
        </Container>
    );
};