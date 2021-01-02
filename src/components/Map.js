import React, { useState } from "react";
import { Chart } from "react-google-charts";

const Map = ({info, handleClick}) => {

    const dataWorld = [
        ['Country', 'Popularity'],
        ['China', 500],
        ['United States', 300],
        ['Canada', 500],
        ['France', 600],
        ['Russia', 700],
    ];

    const dataCN = [
        ['Province', 'Popularity'],
        ['United States', 300],
        ['CN-11', 300],
        ['CN-44', 500]
    ];

    return(
        <div id="map">
            <Chart
                width={'100%'}
                height={'80%'}
                chartType="GeoChart"
                enableRegionInteractivity={true}
                data={info.data}
                loader={<div>Loading Chart</div>}

                chartEvents={[
                    {
                        eventName: 'select',
                        callback: ({ chartWrapper }) => {
                            const selection = chartWrapper.getChart()
                            const chart = selection.getSelection()
                            if (chart.length) {
                                // console.log("Selected Country", data[selectedId[0].row + 1]);
                                handleClick(chart[0].row + 1)
                                console.log(chart[0].row + 1);
                            } else {
                                console.log("No Country to show ");
                            }
                        },
                    },
                ]}

                options={{
                    region: info.region,
                    resolution: info.resolution,
                    backgroundColor: '#81d4fa',
                    datalessRegionColor: '#f8bbd0',
                    defaultColor: '#f5f5f5',
                }}

                mapsApiKey='AIzaSyCY4o5Ha7M_LBo3QApPU5Gfh_LAge2onQI'
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )

}


export default Map