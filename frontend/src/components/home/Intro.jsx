import React, { useRef } from 'react';
import '../../styles/Intro.css';

function Intro() {
  const firstName = 'Jamie';
  const lastName = 'Barrett';
  
  const firstNameSpans = firstName.split('').map((letter, index) => {
    return (<><span
      className="first-name"
      style={{ 'animation-delay': `${index * 150}ms` }}
    >
      {letter}
    </span>{letter === ' ' ? <br></br> : null}</>
    )
  });

  const fullName = <>{firstNameSpans}<br/><span className="last-name">{lastName}</span></>

  return (
    <div className="intro" id="about">
      <h1>{fullName}</h1>

      <p>
        Hello, I am a full stack developer with six years' experience in Cyber
        Security. I enjoy developing all kinds of websites ranging from business
        landing pages, through to data rich functional web applications. I have
        development experience using HTML, CSS, JavaScript, MongoDB, Express,
        React, Node.js, SQL, Python, Google Cloud Platform and Heroku.
      </p>
    </div>
  );
}

export default Intro;
