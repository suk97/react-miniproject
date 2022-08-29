
import React from 'react';
import logo from '../assets/logo.png';
import styled from "styled-components";
import {Link} from "react-router-dom"
const HeaderContainer = styled.div`
position: relative;
display:flex;
width: 105rem;
height: 4.84rem;
border-bottom: 0.6rem double #aebde2;


`;

const Logo = styled.img `


width: 10.44rem;
height: 4.81rem;

`;

const BusanTiltle = styled.div`
width: 45rem;
height: 4.812rem;
-webkit-text-stroke: 1px #000;
font-family: Sora;
font-size: 2.25rem;
text-align: center;
line-height:4.812rem;
color: #8ca8f0;
position: absoulte;
margin: auto;


`;
const Menu = styled.div`

width: 10.44rem;
height: 3.88rem;
padding: 0 52px 0 64px;
border-radius: 30px;
background-color: #aebde2;
top:0;
right:0;
font-family: Sora;
font-size: 2.5rem;
text-align: center;
color: #000;
margin-top: 0.5rem
`;


function Header() {

return(
    
    <HeaderContainer>
        <Link to={"/"}>
            <Logo src={logo} />
        </Link>
        <BusanTiltle>Busan Tasty Road</BusanTiltle>
        <Menu>Menu</Menu>
    </HeaderContainer>
    

)


}

export default Header;