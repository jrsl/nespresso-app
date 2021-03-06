import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CoffeeMachineTop.scss";
import { CoffeeMachineShopping } from "./coffee-machine-shopping/CoffeeMachineShopping";

export const CoffeeMachineTop = props => {
    const [showPurchaseMessage, setShowPurchaseMessage] = useState(false);
    const [shoppingArea, setshoppingArea] = useState(true);
    const {
        thumbUrl,
        machineName,
        machineSubline,
        machineDescription,
        machineTopUsp,
        machinePrice,
        machineColors,
        coffee,
        machineCoffeeIds,
        accessories
    } = props;

    const purchasedMachine = () => {
        setShowPurchaseMessage(true);
        setTimeout(function() {
            setShowPurchaseMessage(false);
        }, 4000);
    };

    const showMainShoppingArea = () => {
        setshoppingArea(true);
    };

    const closeShoppingArea = () => {
        setshoppingArea(false);
    };

    return (
        <>
            <Container className="machine-top-wrapper">
                {showPurchaseMessage && (
                    <Alert variant="success">
                        You just purchased a {machineName}
                    </Alert>
                )}
                <Link to={"/"}>
                    <Button variant="outline-secondary">
                        {"Overzicht machines"}
                    </Button>
                </Link>
                <Row className="machine-top-row">
                    <Col md={6}>
                        <Image
                            src={thumbUrl}
                            fluid
                            style={{
                                marginTop: "-100px",
                                pointerEvents: "none"
                            }}
                        />
                    </Col>
                    <Col md={6}>
                        <h1 className="machine-title">{machineName}</h1>
                        <h2 className="machine-subtitle">{machineSubline}</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: machineDescription
                            }}
                            className="machine-description"
                        ></p>
                        <div>
                            <a href="#machine-about" className="anchor-to">
                                Meer informatie
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="machine-top-row">
                    {machineTopUsp.map((machineTopUspItem, index) => {
                        return (
                            <Col md={4} key={index}>
                                <div className="machine-extra-features">
                                    <Image
                                        src={machineTopUspItem.icon_url}
                                        className="machine-usp-icon"
                                    />{" "}
                                    <p>{machineTopUspItem.icon_description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Row className="machine-top-row machine-main-tab">
                    <Col md={6} className="machine-main-tab-col">
                        <Card className="machine-main-card adviesprijs-card">
                            <Card.Header>Machine Adviesprijs</Card.Header>
                            <Card.Body>
                                <Card.Title>&euro;{machinePrice}</Card.Title>
                                <Button
                                    variant="success"
                                    onClick={purchasedMachine}
                                >
                                    Bestellen
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="machine-main-tab-col">
                        <Card className="machine-main-card aanbieding-card">
                            <Card.Header>Machine Aanbieding</Card.Header>
                            <Card.Body
                                className={`${
                                    shoppingArea ? "aanbieding-card-active" : ""
                                }`}
                            >
                                <Card.Title>&euro;{machinePrice}</Card.Title>
                                <Card.Text>
                                    Bij aanschaf van minimaal 200 capsules
                                </Card.Text>
                                <Button
                                    variant="success"
                                    onClick={showMainShoppingArea}
                                >
                                    Bekijk aanbod
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {shoppingArea && (
                <CoffeeMachineShopping
                    closeShoppingArea={closeShoppingArea}
                    machineColors={machineColors}
                    thumbUrl={thumbUrl}
                    machineName={machineName}
                    machinePrice={machinePrice}
                    coffee={coffee}
                    machineCoffeeIds={machineCoffeeIds}
                    accessories={accessories}
                />
            )}
        </>
    );
};
