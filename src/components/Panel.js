import React, { useState } from "react";
import Map from "./Map";
import Graph from "./Graph";
import Control from "./Control";
import _data from "./DataLoader"

const Panel = () => {
    const [level, setLevel] = useState("0");
    const [region, setRegion] = useState("world");
    const [mapRegion, setMapRegion] = useState("world");
    const [resolution, setResolution] = useState("countries");
    const [data, setData] = useState(_data.world);

    let levelClick = (value) => {
        setLevel(value);
        console.log(value)
    }

    let regionClick = (value) => {
        setMapRegion(value);
        if (value == "CN") {
            setData(_data.CN);
            setResolution('provinces');
        } else if (value == "US") {
            setData(_data.US);
            setResolution('provinces');
        } else {
            setData(_data.world)
            setResolution('countries');
        }
        console.log(value)
    }

    let resetClick = () => {
        setRegion('world');
        setResolution('countries');
        setLevel('0');
    }

    let mapClick = (value) => {
        setRegion(data[value][0].f)
        console.log(data[value])
    }

    let styles = {
        margin: '25px'
    };

    return (

        <div style={styles}>
            <header>
            <h1 style={{textAlign:"center"}}>COVID-19 Data Imputation</h1>
            <h3 style={{textAlign:"center"}}>Last Updated: 12/9/2020 &nbsp; &nbsp; Data Retrieved: 08/20/2020</h3>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </header>
            <div className={"Description"}>
                <text>
                    Please first select a "Region" from a list of several continents and two countries. Then, the map
                    on the right will be updated to reflect your selection. You can click on the map to see specific
                    number for the location. After this step, you will see the graph of your selection.
                    <br/>
                    There are four different levels of imputations: "Zero only" which imputes only for reported zero cases,
                    "Until 10 cases" means ...
                    <br/>
                    The "Index" is the ratio of "imputed cases : total cases"
                    <br/>
                    For more details, click here to download the short paper
                    <br/>
                    <br/>
                </text>
            </div>

            <div className={"container"}>
                <div className={"left"}>
                    <Graph region={region} level={level}/>
                    <Control handleLevelClick = {levelClick} handleRegionClick={regionClick}/>
                </div>

                <div className={"right"}>
                    <Map info={{data: data, region: mapRegion, resolution: resolution}} handleClick={mapClick}/>
                </div>
            </div>
        </div>

    )
}

export default Panel