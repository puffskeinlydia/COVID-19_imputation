import React, { useState } from "react";

const Overlay = () => {
    const [click, setClick] = useState('none');

    return(
        <div id="overlay" style={{display: click}}>
            <div id="overlayText">
                TODO: Some introduction text
                <button onClick={() => setClick('none')}>Start to explore</button>
            </div>
        </div>
    )
}

export default Overlay;