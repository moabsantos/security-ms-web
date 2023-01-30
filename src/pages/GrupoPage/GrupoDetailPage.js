import { useParams } from "react-router-dom";

function GrupoDetailPage(){

    let { idGrupo } = useParams();

    return (
        <div>
            <p>Detail { idGrupo }</p>
        </div>
    )
}

export default GrupoDetailPage;