import logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <img src={logo} alt="eden-logo" className="header-img" />
            <span className="header-name">Eden</span>
        </div>
    );

}

export {Header};