import React, { useState } from "react";
import styled from "styled-components";
import main from '../assets/main.png';
import map from '../assets/map2.png';
import {Link} from "react-router-dom"
import pin from '../assets/pin.png';
import Header from '../components/FoodHeader'
import Footer from "../components/Footer";

const HOME= styled.div`
    position: relative;
    width: 105rem;
    height: 60.5rem;
    flex-grow: 0;
    background-color: #fff;
    
    margin: auto;
    border 0.15rem dashed #aebde2;
`;

  const Main = styled.img `
    
    width: 105em;
    height: 20rem;
    margin-top: 3rem;
  `;

  const Map = styled.img`
    display: block;
        
    width: 43.75rem;
    height: 23.5rem;
    margin: auto;
    padding: 1rem;
    

  `
  const NameHaeundae = styled.div`
  position: absolute;
  width: 6rem;
  height: 3rem;
  font-size: 1.5rem;
  left: 56rem;
  bottom: 22.3rem;
  color: black;
  font-family: Sora;
  font-weight: 100;
  `
  const NavHaeundae = styled.img`
  position: absolute;
  display:block;
  width: 2.3rem;
  height: 2.3rem;
  left: 57rem;
  bottom: 12rem;
    &:hover{
    width: 3.5em;
    height: 3.5rem;
    left: 57rem;
    bottom: 12rem;
  `

  const NavJingu = styled.img`
  position: absolute;
  display:block;
  width: 2.3rem;
  height: 2.3rem;
  left: 51rem;
  bottom: 17.8rem;
    &:hover{
    width: 3.5em;
    height: 3.5rem;
    left: 51rem;
    bottom: 17.8rem;
  `

  const NameJingu = styled.div`
  position: absolute;
  width: 3em;
  height: 3rem;
  font-size: 1.5rem;
  left: 51.1rem;
  bottom: 20rem;
  color: black;
  font-family: Sora;
  font-weight: 100;
  `

function HomePage1() {
  // const [showValue, setShowvalue]=useState(false);
  const [showValue, setShowvalue]=useState(false);

return(
    <HOME>
        <Header/>
        <Main src={main}/>
        <Map src={map}/>
       <Link to={"heaundae"}>
         <NavHaeundae src={pin} onMouseOver={()=>setShowvalue(true)} onMouseOut={()=>setShowvalue(false)}/>
       </Link>
        { showValue && <NameHaeundae>해운대구</NameHaeundae> }
       <Link to={"jingu"}>
         <NavJingu src={pin} onMouseOver={()=>setShowvalue(true)} onMouseOut={()=>setShowvalue(false)}/>
       </Link>
        { showValue && <NameJingu>진구</NameJingu> }
      <Footer/>

    </HOME>
)


}




export default HomePage1;

