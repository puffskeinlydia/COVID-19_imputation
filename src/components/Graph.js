import React, { useState } from "react";
import Graphs from "./GraphLoader";

const Graph = ({region, level}) => {
    let path = "./" + region + '_' + level + '.png'
    let file = Graphs.find(x => x.path === path);

    if (file === undefined) {
        return (
            <div className={"undefinedGraph"}>
                The selected graph doesn't exist. Try other combinations of Region + Level.
            </div>
        )
    } else {
        return(
            <div className={"graphContainer"}>
                <img src={file.file} alt={"Imputation graph"} style={{width: "80%", height: "60%"}}/>
            </div>
        )
    }
}

export default Graph