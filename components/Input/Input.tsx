import React from "react";
import styles from "./Input.module.scss";
import {
    Container
} from "react-bootstrap";

type Props = {
    title: string,
    value: any,
    actionText: string,
    className: any
}

const Input: React.FC<Props> = ({ title, value, actionText, className }) => {
    return (
        <Container fluid className={`px-0 ${className || ""}`}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles["input__container"]}>
                <input
                    defaultValue={value}
                    disabled
                />
                {
                    actionText ?
                        (
                            <div className={styles.action}>
                                {actionText}
                            </div>
                        ) : (
                            <></>
                        )
                }
            </div>
        </Container>
    );
};

export default Input;