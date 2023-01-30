import { Link } from "react-router-dom";

function GrupoListPage(){

    return (
        <div>
            <p>List</p>
            <nav>
                <ul>
                    <li><Link to="/grupo/edit/1">Edit 1</Link></li>
                    <li><Link to="/grupo/detail/1">Detail 1</Link></li>
                    <li><Link to="/grupo/edit/2">Edit 2</Link></li>
                    <li><Link to="/grupo/detail/2">Detail 2</Link></li>
                    <li><Link to="/grupo/edit/3">Edit 3</Link></li>
                    <li><Link to="/grupo/detail/3">Detail 3</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default GrupoListPage;