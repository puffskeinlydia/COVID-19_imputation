import React, { useState } from "react";

let pngs = require.context("../../images", false, /.*\.png$/);

const Graphs = pngs.keys().map(path => ({path, file: pngs(path)}))

export default Graphs