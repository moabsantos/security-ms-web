import { useParams } from "react-router-dom";

function GrupoEditPage(){

    let { idGrupo } = useParams();


    return (
        <div>
            <p>Edit { idGrupo }</p>
        </div>
    )
}

export default GrupoEditPage;