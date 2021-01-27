import React, { useContext } from 'react';
import '../../styles/Intro.css';
import { ViewContext } from '../../context/ViewContext';

function Intro() {
  const size = useContext(ViewContext);

  return (
    <div className={
      size.width > 440
        ? 'intro'
        : 'intro intro-mobile'
    } id="about">
      <h1>Jamie Barrett</h1>

      <p>
        I am a Controls Specialist and Automation Developer with 6 years’ experience in technology assurance and data analytics roles. I also have full stack development experience and enjoy developing websites ranging from business landing pages, through to data rich functional web applications. I have development experience using HTML, CSS, JavaScript, MongoDB, Express, React, Node.js, SQL, Python, Google Cloud Platform and Heroku.
      </p>
    </div>
  );
}

export default Intro;
