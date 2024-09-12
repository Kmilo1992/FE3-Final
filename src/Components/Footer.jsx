import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <div className={`img_container`}>
        <img src="../../public/images/DH.png" alt="DH-logo" />
        <div className={`networks_contact`}>
          <img src="../../public/images/ico-facebook.png" alt="" />
          <img src="../../public/images/ico-instagram.png" alt="" />
          <img src="../../public/images/ico-tiktok.png" alt="" />
          <img src="../../public/images/ico-whatsapp.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
