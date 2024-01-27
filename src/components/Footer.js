import React from 'react';
import './CSS/Footer.css';
const Footer = () => {
   return ( 
<footer>
     <p>&copy; 2024 Bernard Otieno</p>
     <a class="list-group-item list-group-item-action" href="CV/Bernard Otieno CV.pdf"
   download="Mr.Bernard Otieno.pdf">
    <button type="button" >Download my CV</button>
</a>
</footer>
  );
}
export default Footer;
