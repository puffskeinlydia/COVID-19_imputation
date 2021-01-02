import React, { useState } from "react";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
        formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
        },
        selectEmpty: {
                marginTop: theme.spacing(2),
        },
}));

const Control = ({handleLevelClick, handleRegionClick}) => {
        const classes = useStyles();
        const [level, setLevel] = React.useState('0');
        const handleLevel = (event) => {
                setLevel(event.target.value)
                handleLevelClick(event.target.value);
        };

        const [region, setRegion] = React.useState('world');
        const handleRegion = (event) => {
                setRegion(event.target.value)
                handleRegionClick(event.target.value);
        };

    return(
        <div className={"container"}>

                <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Region</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={region}
                            onChange={handleRegion}
                        >
                                <MenuItem value={"world"}>World</MenuItem>
                                <MenuItem value={"150"}>Europe</MenuItem>
                                <MenuItem value={"002"}>Africa</MenuItem>
                                <MenuItem value={"019"}>Americas</MenuItem>
                                <MenuItem value={"142"}>Asia</MenuItem>
                                <MenuItem value={"009"}>Oceania</MenuItem>
                                <MenuItem value={"CN"}>China</MenuItem>
                                <MenuItem value={"US"}>US</MenuItem>
                        </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Imputation level</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={level}
                            onChange={handleLevel}
                        >
                                <MenuItem value={"0"}>Zero only</MenuItem>
                                <MenuItem value={"10"}>Until 10 cases</MenuItem>
                                <MenuItem value={"1p"}>Until 1%</MenuItem>
                                <MenuItem value={"2p"}>Until 2%</MenuItem>
                        </Select>
                </FormControl>

            {/*<br/>*/}
            {/*<button onClick={() => handleRegionClick("world")}>Back to world</button>*/}
        </div>
    )
}

export default Control