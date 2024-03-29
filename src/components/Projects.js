import film from '../images/film.png';
import weight from '../images/weight.jpg';
import job from '../images/job.jpg';

function Projects() {
  return (
    <div>
      <h1 id="projectsHeader">Projects</h1>
      <div class="card col-10 mx-auto">
        <div class="row justify-content-md-center">

          <div id="filmimage" class="column aboutBody">
            <a href="https://github.com/kali20987/FilmFetch">
              <img src={film} class="img-fluid rounded-start" alt="film icon" />
            </a>
          </div>

          <div class="column">
            <div id="filmBody">
              <h3>FilmFetch</h3>
              <p> A movie search website that I and three other developers created. It allows users to search movies by genre.
                It uses HTML, CSS, JavaScript, themoviedb API, and the movieglu API.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div class="card col-10 mx-auto">
        <div class="row justify-content-md-center">

          <div class="column">
            <div id="workoutbox">
              <h3>Workout-Like-A-Boss</h3>
              <p> A workout suggestion website I and four other developers created which allows users to receive a workout based on what muscle group they would like to work on.
                It uses Handlebars.js, Bootstrap, JavaScript, Node.js, and SQL.
              </p>
            </div>
          </div>

          <div id="workoutimage" class="aboutBody column" text-align= "center">
            <a href="https://github.com/kali20987/Workout-Like-A-Boss" text-align= "center">
              <img src={weight} class="img-fluid rounded-start" alt="weight icon" height= "55%" width="65%" text-align= "center"/>
            </a>
          </div>
        </div>
      </div>

      <div class="card col-10 mx-auto">
        <div class="row justify-content-md-center">

          <div id="jobimage" class="column aboutBody">
            <a href="https://github.com/kali20987/JobCanvas">
              <img src={job} class="img-fluid rounded-start" alt="job icon" height= "55%" width="55%" text-align= "center" />
            </a>
            </div>

            <div class="column">
            <div id="jobBox">
              <h3>JobCanvas</h3>
              <p> A job-searching website I and four other developers created which allows users to search and post jobs.
                It uses HTML, CSS, Bootstrap, JavaScript, MERN, and the Adzuna API.
              </p>
            </div>
            </div>
          
        </div>
      </div>

    </div>
  )
}

export default Projects;