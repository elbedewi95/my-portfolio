import React from "react";

function Footer() {
    const icons = [
        {
            name: "fa-brands fa-github",
            link: "https://github.com/elbedewi95"
        },
        {
            name: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/victoria-el-bedewi/"
        }
    ]

    return (
        <footer>
            <div>
                {icons.map(icon => {
                    return <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer" style={{color: "#d9d9d9"}}><i className={icon.name}></i></a> 
                })}
            </div>
        </footer>
    )
}

export default Footer;