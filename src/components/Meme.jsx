import React from "react";

const Meme= () => {
    return(
        <form className="form row">
                <input placeholder="Top text" className="form-input" type="text"/>    
                <input placeholder="Bottom text"  className="form-input" type="text"/>
            <button className="form_btn">Get a new meme image</button>
        </form>
    )
}

export default Meme