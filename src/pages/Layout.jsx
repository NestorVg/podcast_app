import React from "react"
import { Navbar } from "../components/Navbar"
import { Outlet, useNavigate } from "react-router-dom";
import { LoadingProvider } from "../contexts/LoadingProvider";

export const Layout = () => {
    const navigate = useNavigate()
    return (
        <>
            <LoadingProvider>
                <Navbar onClickChange={() => { navigate("/") }} ></Navbar>
                <main style={{padding: '0px 60px',overflow:'auto'}}>
                    <Outlet></Outlet>
                </main>
            </LoadingProvider>
        </>
    );
}
