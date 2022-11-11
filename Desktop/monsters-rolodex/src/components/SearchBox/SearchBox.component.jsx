import React from "react";
import './Searchbox.styles.css';



export const SearchBox= ({placeholder, handleChange})=>(    
    
    // <input
    //     className="searchbox"
    //     type="search"
    //     placeholder={placeholder} 
    //     onChange={handleChange}/>

    <div className="main">
    <input className="txt" type="search"  placeholder={placeholder} onChange={handleChange}/>
        <div class="btn">
             <a href="https://robohash.org/">
            Search
             </a>
        </div>
</div>

)