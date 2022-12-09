import React from "react";

const Meme= () => {
    
    const [meme, setmeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1bij.jpg"
    })
    // const [allMemeImg, setAllMemeImg] = React.useState(memesData)

    // const getMemeImg=() => {
    //     const memeArray = allMemeImg.data.memes
    //     const randomImage = Math.floor(Math.random() * memeArray.length)
    //     const url = memeArray[randomImage].url
    //     setmeme(prevMeme => ({
    //         ...prevMeme,
    //         randomImage:url
    //     }))
    // }

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

