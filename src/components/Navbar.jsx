import React, { useContext } from "react"
import { LoadingContext } from "../contexts/LoadingContext"
import '../css/navbar.css'

export const Navbar = ({ onClickChange }) => {
    const { isLoading } = useContext(LoadingContext)
    return (
        <>
            <div className="navbar">
                <div>
                    <h1 onClick={onClickChange}>Podcaster</h1>
                    {isLoading && (<div className="pulse"></div>)}
                </div>
                <hr />
            </div>
        </>
    );
}
