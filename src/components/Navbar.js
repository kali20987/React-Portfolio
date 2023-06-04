import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: 'purple',
  },
  heading: {
    background: 'purple',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me
      <li>I am currently taking Georgia Tech's fullstack Coding Bootcamp</li>
      <li>I've been interested in coding and software development since middle school.</li>
      </div>
    </div>
  );
}

export default Navbar;
