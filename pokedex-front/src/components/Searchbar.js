import React, { useState } from "react";


const Searchbar = () => {

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
        console.log("ola mundo", e.target.value)
    }

    const onButtonClickHandler = (e) => {
        console.log("ola mundo2", search)
    }

    const [search, setSearch] = useState("dito")
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input onChange={onChangeHandler} placeholder="digite um pokemon" />    
            </div>

            <div className="searchResult">
                <button className="buttonSearchBar" onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar; 