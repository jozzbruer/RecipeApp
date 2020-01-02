import React from 'react'
import '../App.css'

const Footer = () => {
    return (
        <div id="footer">
            <p className="text-center">
                    &copy; Copyright {new Date().getFullYear()}. All right reserved <br/>
                    <a href="https://www.linkedin.com/in/quince-joz-bruer-4a0488161/" target="_blank">Quince Joz-Bruer</a>
            </p>
            
        </div>
    )
}

export default Footer;
