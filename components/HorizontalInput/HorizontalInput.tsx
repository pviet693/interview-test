import React from "react";
import { Container } from "react-bootstrap";
import styles from "./HorizontalInput.module.scss";

type Props = {
    title: string,
    value: any,
    hasBackground: boolean,
    hasPadLock: boolean,
    actionText: string,
    className: string,
    inputType: string
}

const HorizontalInput: React.FC<Props> = ({
    title, value, hasBackground, hasPadLock, actionText, className, inputType
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
            {
                actionText ? (
                    <div className={styles.action}>
                        {actionText}
                    </div>
                ) : (
                    <input
                        disabled
                        defaultValue={value}
                        type={inputType}
                    />
                )
            }
            {
                hasPadLock ? (
                    <img
                        src="/static/icons/padlock.svg"
                        width="20"
                        height="25"
                        alt="Image Alt"
                    />
                ) : (
                    <></>
                )
            }
        </Container>
    );
};

export default HorizontalInput;