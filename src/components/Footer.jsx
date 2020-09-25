import React from 'react';

function Footer() {
    const year =  new Date().getFullYear();

    return (<div class="footer"><p>Copyright © {year} Jamie Barrett</p></div>)
};

export default Footer;