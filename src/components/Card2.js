import React from 'react';


const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: 'indigo',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};


function Card2() {
    return (
      <div style={styles.card}>
        <div style={styles.heading}>Workout Like a Boss</div>
        <div style={styles.content}>
          This is a workout recommendation app that I add four other devlopers worked on for our Second Project in our Coding Bootcamp.
          
        </div>
      </div>
    )
  }
  
  
  export default Card2;