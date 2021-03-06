import React from "react";
import Table from "react-bootstrap/Table";

export const CoffeeMachineSpecs = props => {
    const { specs } = props;

    return (
        <Table striped hover responsive>
            <tbody>
                {specs.map((specItem, index) => {
                    return (
                        <tr key={index}>
                            <td>{specItem.label}</td>
                            <td>{specItem.value}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};
