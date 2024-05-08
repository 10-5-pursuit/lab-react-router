// Tools
import { Outlet } from "react-router-dom";

// Components
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";


function DefaultLayout() {

    return (
        <>
            <Nav/>
            <Outlet/>
            <Footer/>
        </>
    )
}


export default DefaultLayout;