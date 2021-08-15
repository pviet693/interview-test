import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TabMenu.module.scss";

type Props = {
    activeIndex: number,
    onChangeTabMenu: (index: number) => void
}

const TabMenu: React.FC<Props> = ({ activeIndex, onChangeTabMenu }) => {
    return (
        <Container fluid className="px-0">
            <Container fluid className={styles.container}>
                <div
                    className={`${styles["tab-menu"]} ${activeIndex === 1 ? styles["tab-active"] : styles["tab-inactive"]}`}
                    onClick={() => onChangeTabMenu(1)}
                >
                    <img
                        src="/static/icons/user.svg"
                        alt="Image Alt"
                        className="tab-menu__image"
                    />
                    <div className={`${activeIndex === 1 ? styles["tab-active__name"] : ""}`}>Account Profile</div>
                </div>
                <div
                    className={`${styles["tab-menu"]} ${activeIndex === 2 ? styles["tab-active"] : styles["tab-inactive"]}`}
                    onClick={() => onChangeTabMenu(2)}
                >
                    <img
                        src="/static/icons/bank.svg"
                        alt="Image Alt"
                        className="tab-menu__image"
                    />
                    <div className={`${activeIndex === 2 ? styles["tab-active__name"] : ""}`}>Update Bank Detail</div>
                </div>
                <div
                    className={`${styles["tab-menu"]} ${activeIndex === 3 ? styles["tab-active"] : styles["tab-inactive"]}`}
                    onClick={() => onChangeTabMenu(3)}
                >
                    <img
                        src="/static/icons/email.svg"
                        alt="Image Alt"
                        className="tab-menu__image"
                    />
                    <div className={`${activeIndex === 3 ? styles["tab-active__name"] : ""}`}>Inbox</div>
                </div>
            </Container>
            <hr className="mb-0" style={{ borderColor: "#6389AF", marginTop: -1 }} />
        </Container>
    );
};

export default TabMenu;