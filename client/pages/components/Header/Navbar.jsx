import "./Navbar.css";
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
        <div className="NavElement"> Discover </div>
        <div className="NavElement"> Other</div>
        <div className="NavElement"> Login </div>
      </div>
    </div>
  );
};
export default Navbar;
