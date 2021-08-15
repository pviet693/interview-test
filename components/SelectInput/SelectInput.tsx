import React from "react";
import styles from "../Input/Input.module.scss";
import {
    Container
} from "react-bootstrap";
import { Dropdown } from "primereact/dropdown";

type Props = {
    options: Array<any>,
    value: any,
    title: string
}

const SelectInput: React.FC<Props> = ({ title, value, options }) => {
    return (
        <Container fluid className="px-0">
            <div className={styles.title}>
                {title}
            </div>
            <div className="custom-dropdown-primereact">
                <Dropdown
                    value={value}
                    options={options}
                />
            </div>
        </Container>
    );
};

export default SelectInput;