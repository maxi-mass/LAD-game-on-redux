import React from "react";
import {Link, Redirect, withRouter} from "react-router-dom";
import styles from "./GameOver.module.css";
import {connect} from "react-redux";

const GameOver = (props) => {
    if (!props.location.state) {
        return <Redirect to={"/"} />
    }
    
    return (
        <div className={styles.gameOver}>
            <h1>Game Over</h1>
            <div className={styles.message}>{props.location.state.message}</div>

            <div className="button">
                <Link className="link" to={{
                    pathname: "/",
                    state: null
                }} >Новая игра</Link>
            </div>
        </div>
    )
};

export default connect(() => ({}),{})(withRouter(GameOver));