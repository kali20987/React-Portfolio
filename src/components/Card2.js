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
          <a href="https://workout-like-a-boss.herokuapp.com/" />
          This is a workout recommendation app that I add four other devlopers worked on for our Second Project in our Coding Bootcamp.
          <img width="1200" alt="Screenshot 2023-06-04 at 7 37 24 AM" 
          src="https://github.com/kali20987/Text-Editor/assets/128011155/982fa59f-9f83-49a8-aaa7-af320ff8f463"></img>
        </div>
      </div>
    )
  }
  
  
  export default Card2;