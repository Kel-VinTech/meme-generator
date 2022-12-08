import React from "react";

const Form = () => {

    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", emailAddress: "",comment: ""}
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

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
    }
    

    return(

        <form onSubmit={handleSubmit}
         className="form row">
            <input 
             type="text"
             placeholder="First name"
             onChange={handleChange}
             name="firstName"
             value={formData.firstName}
            />

            <input 
             type="text"
             placeholder="Last name"
             onChange={handleChange}
             name="lastName"
             value={formData.lastName}
            />

            <input 
             type="email"
             placeholder="Email"
             onChange={handleChange}
             name="emailAddress"
             value={formData.emailAddress}
            />
            <textarea 
            name="comment"
            placeholder="type in your comments here"
            onChange={handleChange}
            value={formData.comment}
            />
            <button >Submit</button>
        </form>
    )
}

export default Form