const plotly = require('plotly')('bach3012', '0vTs3vNQsr7zpGM5c8Nd');

function draw(x, y){

    var draw_mact = {
        x: x,
        y: y,
        mode: 'markers',
        name: 'cool',
        text: ['mact'],
        marker: {
            color: "rgb(164, 194, 244)",
            size: 12,
            line: {
                color: "red",
                width: 0.5
            }
        },
        type: "scatter"
    };

    var data = [draw_mact];

    var layout = {
        title: 'cool',
        xaxis: {
            title: 'cool',
            showgrid: false,
            zeroline: false
        },
        yaxis: {
            title: "Percent",
            showline: false
        }
    };

    var graphOptions = {layout: layout, filename: "line-style", fileopt: "overwrite"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
};

module.exports.draw = draw;