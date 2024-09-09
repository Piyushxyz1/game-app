import React from "react";
import { Link } from "react-scroll";
import {data} from    '../restApi.json'

const Footer = () => {
  return (
    <>
 <div  className='footer' id = "footer"> 

<div className='footer-content'>
    <div className="footer-content-left">
        <img src = {''}  style={{height:"200x", width:"120px"}} alt = ""/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, tempora. Aperiam ipsa a voluptatem dolorem temporibus, eum facilis itaque iusto quos tempore, atque rem nam numquam adipisci exercitationem possimus expedita?</p>
        <div className="footer-social-icons">
            <img src="twitter_icon.png" alt="" />
            <img src="facebook_icon.png" alt="" />
            <img src="linkedin_icon.png" alt="" />
        </div>
    </div>
    <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>

        </ul>
    </div>
    <div className="footer-content-right">

        <h2>Get in touch</h2>
        <ul>
            <li>1292392002</li>
            <li>Piyush@example.com</li>
        </ul>


    </div>
  


</div>

<hr/>

<div className="copyright">

<p>Copyright 2024 © Pro-games.com - All Rights Reserved</p>

</div>

    </div>
    </>
  );
};

export default Footer;