import React from "react";

const Footer = () => {
    
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer">
      <h3 className="heading">Social Media</h3>
      <ul className="list">
        <li className="list-item">
          <a
            href="http://www.facebook.com"
            rel="noopener norefferer"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="list-item">
          <a
            href="http://www.twitter.com"
            rel="noopener norefferer"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="list-item">
          <a
            href="http://www.instagram.com"
            rel="noopener norefferer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <div className="contact">
        <p className="contact-question">Masz pytania?</p>
        <div className="phone">
          <i className="fas fa-phone-volume fa-2x"></i> +11 111 111 111
        </div>
        <div className="email">
          <i className="fas fa-envelope fa-2x"></i> phonekingshop@kingisone.com
        </div>
      </div>
      <div className="rights">All rights reserverd &copy; {currentYear}</div>
    </footer>
  );
};

export default Footer;
