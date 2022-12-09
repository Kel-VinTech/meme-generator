import React from "react";
import Form from "./Form";



const FormData = () => {

    const [FormDatas, setFormDatas] = React.useState(
        {name:"", email:"", password:"",confirm:"" , isFriendly:true})

    const handleChange = (e) => {
        const {name,value,type,checked} = e.target
        setFormDatas(prevFormDatas => {
            return{
                ...prevFormDatas,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    const formSubmit = (e) => {
        e.preventDefault()
        if(FormDatas.password === FormDatas.confirm) {
            console.log("Successfully signed up")
        } else {
            console.log("password do not match")
        }

        if(FormDatas.isFriendly === true) {
            console.log("Thanks for signing up")
        } else{
            console.log("Kindly accept newsletter")
        }
    }

    return(
        <form onSubmit={formSubmit}
        className="form">
            <input 
                type="text"
                name="names"
                placeholder="Enter Names"
                onChange={handleChange}
                value={FormDatas.names}
            />

            <input 
                type="email"
                name="email"
                placeholder="Enter EmailAddress"
                onChange={handleChange}
                value={FormDatas.email}
            />

            <input 
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                value={FormDatas.password}
            />
            <input 
                type="password"
                name="confirm"
                placeholder="Confirm password"
                onChange={handleChange}
                value={FormDatas.confirm}

                
            /> 

            <input 
                type="checkbox"
                id="isFriendly"
                name="isFriendly"
                onChange={handleChange}
                checked={FormDatas.isFriendly}
            />    
            <label htmlFor="isFriendly">Are you friendly</label>   

            <button>Sign up</button>
            
        </form>

    )
}

export default FormData