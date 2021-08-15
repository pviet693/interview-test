import React from "react";
import { Container } from "react-bootstrap";
import styles from "./HorizontalSelect.module.scss";
import { Dropdown } from "primereact/dropdown";

type Props = {
    title: string,
    value: any,
    hasBackground: boolean,
    className: string,
    options: Array<any>
}

const HorizontalSelect: React.FC<Props> = ({
    title, value, hasBackground, className, options
}) => {
    return (
        <Container
            fluid
            className={`${styles.container} ${hasBackground ? styles.background : ""} ${className || ""}`}
        >
            <div className={styles.title}>
                {title}
            </div>
            <div>:</div>
            <div className="custom-dropdown-horizontal-select">
                <Dropdown
                    value={value}
                    options={options}
                />
            </div>
        </Container>
    );
};

export default HorizontalSelect;