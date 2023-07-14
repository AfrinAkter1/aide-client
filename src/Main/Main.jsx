import { Outlet } from "react-router-dom";
import Navigationbar from "../Routes/Shared/Navigationbar";
import Footer from "../Routes/Shared/Footer";


const Main = () => {
    return (
        <div>
           <Navigationbar></Navigationbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;