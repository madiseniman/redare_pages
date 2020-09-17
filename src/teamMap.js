import React from "react";
import './CSS/teamMap.css';
import SwedenLines from './Assets/Team/Team Map/swedenLines.svg';
import NonSwedenLines from './Assets/Team/Team Map/nonSwedenLines.svg';
import Map from './Assets/Team/Team Map/map.svg';

export default () => (
    <teamMap>
        <img src={Map} className="Map" alt="Map"/>
        <img src={SwedenLines} className="SwedenLines" alt="From Sweden"/>
        <img src={NonSwedenLines} className="NonSwedenLines" alt="From Abroad"/>

    </teamMap>
);
