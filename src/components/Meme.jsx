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

    const handleChange= (e) => {
        const {name, value} = e.target
        setmeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(

            <div className="form row">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                 <button className="form_btn"
                 onClick={getMemeImg}
                 >Get a new meme image</button>

                 <div>
                    <img src={meme.randomImage}  alt="memeImg"
                    className="meme_img" 
                    />
                    <h2 className="top_text">{meme.topText}</h2>
                    <h2 className="bottom_text">{meme.bottomText}</h2>
                 </div>

            </div>
    )
}

export default Meme

