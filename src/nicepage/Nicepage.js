import Footer from "../footer/footer";
import Image from "../image/microsoft-365-7mBictB_urk-unsplash.jpg";
import "./Nicepage.css";

function Nicepage() {
  return (
    <div className="nicePage">
      <div className="design">
        <div>
          <div className="round"></div>
          <h1>Committed to your full design journey</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <li>
            <span>image from</span>
            <a href="https://www.freepik.com/">Freepik</a>
          </li>
          <button>LEARN MORE</button>
        </div>
        <img src={Image} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Nicepage;
