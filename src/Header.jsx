import logo from "./logo512.png";
const Header = () => {
  return (
    <div>
      <div className="p-3" style={{ borderBottom: "solid 1px white" }}>
        <img
          src={logo}
          alt="react"
          style={{ height: "35px", verticalAlign: "top" }}
        />
        <span className=" h2 pt-4 text-white-50">watchOPedia</span>
      </div>
    </div>
  );
};

export default Header;
