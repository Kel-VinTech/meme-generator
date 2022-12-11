import React,{ useEffect, useState }  from "react";
import WindowTrack from "./WindowTrack"

const Effect =() => {
    const [first, setfirst] = useState(second)

    return(
        <div className="container">
            <button>
                Toggle Window Tracker
            </button>
            <WindowTrack />
            
        </div>
    )
}

export default Effect