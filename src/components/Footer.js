import React from 'react';

import '../styles/Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <h3 id="contact">Contact</h3>
        {/* <ul id="list"> */}
      </footer>
      <div class="footerrow">
        {/* <li id="github" class="footercolumn"><a href="https://github.com/kali20987">GitHub</a></li>
        <li id="linkedin" class="footercolumn"><a href="https://www.linkedin.com/in/khadijah-ali-42ba3b274/">LinkedIn</a></li>
        <li id="resume" class="footercolumn"><a href="">Resume</a></li> */}
        <div id="github" class="footercolumn"><a href="https://github.com/kali20987">GitHub</a></div>
        <div id="linkedin" class="footercolumn"><a href="https://www.linkedin.com/in/khadijah-ali-42ba3b274/">LinkedIn</a></div>
        <div id="resume" class="footercolumn"><a href="/images/KhadijahResume.pdf" download>Resume</a></div>
        {/* </ul> */}
      </div>
    </div>
  );
}

export default Footer;