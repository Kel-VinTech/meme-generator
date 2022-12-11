import React,{ useEffect, useState }  from "react";

const Meme= () => {
    
    const [meme, setmeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1bij.jpg"
    })
    const [allMeme, setAllMeme] = React.useState([])
    useEffect(() => {
        fetch("https://i.imgflip.com/1bij.jpg")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.meme))
    })

    const getMemeImg =() => {
        const randomImage = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomImage].url
        setmeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    return(

            <div className="form row">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                />

                 <button className="form_btn">Get a new meme image</button>

            </div>
    )
}

export default Meme

