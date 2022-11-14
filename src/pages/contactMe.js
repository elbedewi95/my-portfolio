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

    return (
        <section className="paragraph">
            <h1 className="H1">Contact Me!</h1>
            <form id="contact-form">
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