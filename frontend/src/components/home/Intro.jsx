import React, { useRef } from 'react';
import '../../styles/Intro.css';

function Intro() {
  const name = 'Jamie Barrett';
  const nameSpans = name.split('').map((letter, index) => {
    let classNames = 'name'
    if (letter === ' ') classNames = `${classNames} space`

    return (<><span
      className={classNames}
      style={{ 'animation-delay': `${index * 100}ms` }}
    >
      {letter}
    </span>{letter === ' ' ? <br></br> : null}</>
    )
  });

  return (
    <div className="intro" id="about">
      <h1>{nameSpans}</h1>

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
