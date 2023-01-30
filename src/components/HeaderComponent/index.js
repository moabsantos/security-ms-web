import { Link } from "react-router-dom";

function HeaderComponent(){

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/grupo">Grupos</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderComponent;