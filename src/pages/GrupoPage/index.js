import { Link, Outlet } from "react-router-dom";

function GrupoPage(){

    return (
        <div>
            <h1>Grupos de Acesso</h1>
            <nav>
                <ul>
                    <li><Link to="/grupo/new">New</Link></li>
                    <li><Link to="/grupo/list">List</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default GrupoPage;