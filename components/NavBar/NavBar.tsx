import React from "react";
import styles from "./NavBar.module.scss";
import { Container, Row, Col } from 'react-bootstrap';

const NavBar: React.FC = () => {
    return (
        <Container fluid className="px-0">
            <div className={styles.container}>
                <div className={styles.col__left}>
                    <div className="align-items-center d-flex">
                        <div>
                            <img
                                src="/static/icons/matrix.svg"
                                alt="Image Alt"
                                className={styles["image-matrix"]}
                            />
                        </div>
                        <div>
                            All Services
                        </div>
                    </div>
                </div>
                <div className={`text-right px-0 ${styles.col__right}`}>
                    <div className={styles.profile}>
                        <img
                            src="/static/images/avatar.png"
                            alt="Image Alt"
                            className={`${styles["image-avatar"]} mx-2`}
                        />
                        <div className="d-flex align-items-center" id="dropdown-toggle">
                            <div title="Howdycandidate" className={styles["profile__name"]}>
                                Howdycandidate
                            </div>
                            <img
                                src="/static/icons/down-arrow.svg"
                                alt="Image Alt"
                                className="mx-1"
                            />
                            <div id="dropdown-menu">
                                <div className="dropdown-menu__item">
                                    Action
                                </div>
                                <div className="dropdown-menu__item">
                                    Other Action
                                </div>
                                <div className="dropdown-menu__item">
                                    More Action...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="m-0" style={{ borderColor: "#6389AF" }} />
        </Container>
    );
};

export default NavBar;