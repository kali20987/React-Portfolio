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


function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>FilmFetch</div>
      <div style={styles.content}>
        This is a movie recommendation website that I and three other developers made for our Project One in our Bootcamp.
        <img width="1300" height="700" alt="Screenshot 2023-06-04 at 7 17 35 AM" 
        src="https://github.com/kali20987/React-Portfolio/assets/128011155/3c3caabf-c54e-470a-aee9-5a4239f7f34a"></img>
      </div>
    </div>
  );
}


export default Card;

