import React from "react";
import styles from "./TextareaInput.module.scss";
import { Container } from "react-bootstrap";

type Props = {
    title: string,
    rows: number,
    value: string
}

const TextareaInput: React.FC<Props> = ({
    title, rows, value
}) => {
    return (
        <Container fluid className="px-0">
            <div className={styles.title}>
                {title}
            </div>
            <textarea
                className={styles.textarea}
                defaultValue={value}
                rows={rows}
                disabled
            />
        </Container>
    )
};

export default TextareaInput;