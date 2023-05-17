//import "./Navbar.css";
import shipping from "../../images/shipping.png";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="NavIconContainer">
        <a href="/">
          <img className="navIcon" src={shipping} alt="memories" height={60} />
        </a>
      </div>

      <div className="navFeatures">
        <div className="NavElement">
          <a href="/about">Pricing </a>
        </div>
        <div className="NavElement">
          <a href="/form">Form </a>
        </div>
        <div className="NavElement">
          <a href="/posts">posts </a>
        </div>
        <div className="NavElement">
          {" "}
          <a href="/register">Register </a>{" "}
        </div>
        {/* <div className="NavElement"> <a href="/Register">Register </a></div> */}
        <div className="NavElement">
          {" "}
          <a href="/login">Login </a>{" "}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
