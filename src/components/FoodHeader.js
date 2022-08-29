
import React from 'react';
import logo from '../assets/logo.png';
import styled from "styled-components";
import {Link} from "react-router-dom"
import Redheart from '../assets/Redheart.png'

const HeaderContainer = styled.div`
    display:flex;
    width:  80rem;
    height: 10rem;
    margin-bottom: 0;
    border-bottom: 0.1875rem solid #aebde2;;
    margin-right:auto;
    margin-left:auto;
    padding-bottom: 0.5rem;
`;

const Logo = styled.div`
    display: inline-block;
    width: 12.5rem;
    text-align: center;
    margin-left: 1.25rem;
    margin-top: 1.25rem;
    border-radius: 0.9375rem;
    cursor: pointer;
`;

const Dynamic = styled.p`
    font-weight: bold;
    font-size: 3.125rem;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #1C3879;
    margin: 0;
    padding: 0;
`;

const Boat = styled.img`
    width: 3.125rem;
    height: 3.125rem;
    margin-left: 1.25rem;
`;

const Busan = styled.span`
    font-weight: bold;
    font-size: 1.875rem;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #8ca8f0;
    margin-left: 1.875rem;
`;

const BusanTiltle = styled.div`
    width: 45rem;
    height: 4.812rem;
    -webkit-text-stroke: 0.0625rem #000;
    font-size: 2rem;
    font-family: 'Nanum Brush Script', cursive;
    margin-top: 4rem;
    margin-left: 17.5rem;
    color: #8ca8f0;
`;

const Wishbox =styled.div`
    width:12rem;
    height:4rem;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #8ca8f0;
    margin-top:3rem;
    margin-left:0;
    cursor: pointer;
`;

const RedHeart = styled.img`
    width:2rem;
    height:2rem;
    margin:auto;
`;

function FoodHeader() {
    
    return(
        
        <HeaderContainer>
            <Link to={"/"}>
            <Logo><Dynamic>Dynamic</Dynamic><Boat src={logo}/><Busan>Busan</Busan></Logo>
            </Link>
            <BusanTiltle>Busan Tasty Road</BusanTiltle>

            <Link to={"../wishList"} style={{ textDecoration: 'none' }}>
            <Wishbox><RedHeart src={Redheart}/> My Wish</Wishbox>
            </Link>
        </HeaderContainer>
        
    );

}

export default FoodHeader;