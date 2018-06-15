import React from "react";
import * as styles from "./styles";
const razrabotka = require("../../assets/images/razrabotka.png");


const NotFound = () => (
    <styles.CardWrapper>

        <styles.Row>
            <styles.Image src={razrabotka}/>
        </styles.Row>

    </styles.CardWrapper>
);

export default NotFound;
