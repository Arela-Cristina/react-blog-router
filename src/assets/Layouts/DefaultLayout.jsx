import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


export default function DefaultLayout() {
    return (
        <>
            <div className='layout'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}