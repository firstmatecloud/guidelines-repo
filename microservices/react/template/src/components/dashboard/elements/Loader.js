import {square} from 'ldrs'
import * as React from "react";

square.register()

export default function Loader({size, text}) {
    return (
        <div style={{textAlign: "center"}}>
            <p style={{marginBottom: 20}}>{text}</p>
            <l-square
                size={size}
                stroke="10"
                stroke-length="0.25"
                bg-opacity="0.2"
                speed="2"
                color="white"
            ></l-square>
        </div>
    )
}