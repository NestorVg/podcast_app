import React,{memo} from "react"
import '../css/inputFilter.css'
export const InputFilter = memo(({ children,value,onInputChange }) => {
    return (
        <div className="container_filter">
            {children}
            <input
                name="searchText"
                className="filter"
                type="text"
                autoComplete="off"
                value={value}
                placeholder="Filter podcast..."
                onChange={onInputChange}
            >
            </input>
        </div>
    );
})
