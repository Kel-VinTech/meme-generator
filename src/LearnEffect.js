import React,{ useEffect, useState }  from "react";

const Effect =() => {
    const [starWar, setStarWar] = useState({})
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWar(data))

    },[count])


    return(
        <div>
            <pre>{JSON.stringify(starWar, null,2)}</pre>
 
            <h2>this count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount+ 1)}>ADD</button>

            <h1>count</h1>
        </div>
    )
}

export default Effect