import React from "react";
import './CSS/team.css'
import Jason from "./Assets/Team/Jason.svg";
import David from "./Assets/Team/David.svg";
import Steven from "./Assets/Team/Steven.svg";
import Zoey from "./Assets/Team/Zoey.svg";
import Dylan from "./Assets/Team/Dylan.svg";
import Madisen from "./Assets/Team/Madisen.svg";
import Danielle from "./Assets/Team/Danielle.svg";


export default () => (
    <team>

        <img src={Jason} className="Jason" alt="Jason"/>
        <p className="Jason-text"><b>Jason Czarnezki</b> <br/> Co-founder <br/> CEO </p>

        <img src={David} className="David" alt="David"/>
        <p className="David-text"><b>David Huselius</b> <br/> Co-founder <br/> Chief Product <br/> Officer </p>

        <img src={Steven} className="Steven" alt="Steven"/>
        <p className="Steven-text"><b> Steven Lord </b><br/> Chief Technology <br/> Officer </p>

        <img src={Zoey} className="Zoey" alt="Zoey"/>
        <p className="Zoey-text"><b> Zoey Tsopela </b><br/> Chief Marketing <br/> Officer</p>

        <img src={Dylan} className="Dylan" alt="Dylan"/>
        <p className="Dylan-text"><b>Dylan Clancy </b><br/>Chief Design <br/>Officer</p>

        <img src={Madisen} className="Madisen" alt="Madisen"/>
        <p className="Madisen-text"><b>Madisen <br/> Whitfield </b><br/> Developer</p>

        <img src={Danielle} className="Danielle" alt="Danielle"/>
        <p className="Danielle-text"><b>Danielle Chaung </b><br/>Developer</p>
    </team>
);