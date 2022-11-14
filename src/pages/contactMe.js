import React, { useState } from "react";

function ContactMePage (){
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;
   
    const validateEmail = (email) => {
        // eslint-disable-next-line
        const re = /.+\@.+\..+/;
        return re.test(String(email).toLowerCase())
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            alert("Thank you for contacting me! I'll get back to your message as soon as I can!");
            console.log("submit form", formState);
        }
    }

    return (
        <section className="paragraph">
            <h1 className="H1">Contact Me!</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label><br/>
                    <input className="textbox" type="text" name="Name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label><br/>
                    <input className="textbox" type="email" name="Email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message: </label><br/>
                    <textarea className="textbox" name="Message" rows="4" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
};

export default ContactMePage;