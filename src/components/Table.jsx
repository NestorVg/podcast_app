import React from "react"
import '../css/table.css'
export const Table = ({ BODY = [], HEADER = {} }) => {

    return (
        <table className="table">
            <thead>
                {HEADER !== null && (HEADER)}
            </thead>
            <tbody>
                {BODY !== null && (BODY)}
            </tbody>
        </table>
    );
}
