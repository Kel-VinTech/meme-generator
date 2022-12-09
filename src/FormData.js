import React from "react";
import Form from "./Form";



const FormData = () => {

    const [FormDatas, setFormDatas] = React.useState(
        {name:"", email:"", password:"" })

    const handleChange = (e) => {
        setFormDatas(prevFormDatas => {
            return{
                ...prevFormDatas,
                [e.target.name]: e.target.value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
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

            <button>Sign up</button>
            
        </form>

    )
}

export default FormData