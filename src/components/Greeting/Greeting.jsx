import React from "react";
import {Link} from "react-router-dom";
import styles from "./Greeting.module.css";

const Greeting = () => {
    return (
        <div className={styles.greeting}>
            <h1>Приветствую тебя, Игрок!</h1>
            <div>
                <div className="button">
                    <Link className="link" to={{
                        pathname: "/game",
                        state: {
                            playersQty: 1
                        }
                    }}>Играть одному</Link>
                </div>
                <div className="button">
                    <Link className="link" to={{
                        pathname: "/game",
                        state: {
                            playersQty: 2
                        }
                    }}>Играть вдвоем</Link>
                </div>
            </div>
        </div>
    )
};

export default Greeting;