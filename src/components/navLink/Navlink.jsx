
import { NavLink } from "react-router-dom";
const Navlink = ({links,location}) => {
    const {path,name} =links
    
    
    return (
        <div>
            <li style={{color:path===location.pathname?'#FF444A':'black',textDecoration:path===location.pathname?'underline':'none'}}><NavLink to={path}>{name}</NavLink></li>
        </div>
    );
};

export default Navlink;