import React from "react";

const Form = () => {

    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", emailAddress: ""}
        )
        console.log(formData)

    const handleChange =(e) => {
      setFormData(prevFormData => {
        return{
            ...prevFormData,
            [e.target.name]: e.target.value
        }
    })
    }

    return(
        <form className="form row">
            <input 
             type="text"
             placeholder="First name"
             onChange={handleChange}
             name="firstName"
            />

            <input 
             type="text"
             placeholder="Last name"
             onChange={handleChange}
             name="lastName"
            />

            <input 
             type="email"
             placeholder="Email"
             onChange={handleChange}
             name="emailAddress"
            />

        </form>
    )
}

export default Form