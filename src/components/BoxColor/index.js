import React from 'react'

export default function index(props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      

    const  rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    return (
        <div className="BoxColor">
            <div style={divStyle}>rgb(${props.r},${props.g},${props.b})
            <br/>
            {rgbToHex(props.r, props.g, props.b)}
            </div>
        </div>
    )

}
