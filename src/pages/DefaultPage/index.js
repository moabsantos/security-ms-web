import { Outlet } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent";

function DefaultPage(){

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    )
}

export default DefaultPage;