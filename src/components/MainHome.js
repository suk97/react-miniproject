import React from "react";
import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter"

function MainHome() {
    return(

        <div>
            <HomeHeader/>
            <HomeContent />
            <HomeFooter />
        </div>
        
    );
}

export default MainHome;