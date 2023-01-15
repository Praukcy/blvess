import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook, } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social' style={{marginBottom:'20px'}}>
                <a href=''><FaInstagram className="social-icons"></FaInstagram></a>
                <a href=''><FaFacebook className="social-icons"></FaFacebook></a>
                <a href=''><FaLinkedin className="social-icons"></FaLinkedin></a>
            </div>
            <div className='links'>
                <a className='link'>Home</a>
                <a className='link'>Partners</a>
                <a className='link'>Field Visit</a>
                <a className='link'>Events</a>
            </div>
            <div style={{width:'45%',background:'rgb(181, 176, 176)',height:'2px',margin:'7px auto'}}></div>
            <p style={{width:'45%',margin:'auto',textAlign:'center'}}>To build a prosperous and sustainable agriculture sector, through the participation and capacity building of farmers, thereby enabling them to enhance productivity and cost-effectiveness and utilize sustainable resources by increasing the quality and quantity of crop production   <br/>@2023BLVESS</p>
        </footer>
    )
}

export default Footer