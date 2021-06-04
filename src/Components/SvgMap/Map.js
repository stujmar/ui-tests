import React from 'react';
import { mapWrapper } from './SvgMap.module.css';

const Map = () => {
    return (
        <div className={mapWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517 310">
                <g id="outline">
                    <g>
                    <rect x="0.5" y="0.5" width="516" height="308" rx="27.67" style={{fill: "#fff"}}/>
                    <path d="M488.83,1A27.2,27.2,0,0,1,516,28.17V280.83A27.2,27.2,0,0,1,488.83,308H28.17A27.2,27.2,0,0,1,1,280.83V28.17A27.2,27.2,0,0,1,28.17,1H488.83m0-1H28.17A28.17,28.17,0,0,0,0,28.17V280.83A28.17,28.17,0,0,0,28.17,309H488.83A28.17,28.17,0,0,0,517,280.83V28.17A28.17,28.17,0,0,0,488.83,0Z"/>
                    </g>
                </g>
                <g id="ten">
                    <rect x="39" y="220" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="nine">
                    <rect x="151" y="220" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="eight">
                    <rect x="263" y="220" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="seven">
                    <rect x="375" y="220" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="six">
                    <rect x="39" y="90" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="five">
                    <rect x="203" y="90" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="four">
                    <rect x="375" y="90" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="three">
                    <rect x="375" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="two">
                    <rect x="203" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
                <g id="one">
                    <rect x="39" width="112" height="90" style={{fill: "#00ff1e"}}/>
                </g>
            </svg>
        </div>
    )
}

export default Map; 