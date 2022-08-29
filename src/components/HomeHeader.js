import React, { useState } from "react";
import styled from "styled-components";
import {MdSearch} from 'react-icons/md'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Logo = styled.div`
    display: inline-block;
    width: 12.5rem;
    text-align: center;
    margin-left: 54rem;
    margin-top: 100px;
    border-radius: 15px;
`;

const Dynamic = styled.p`
    font-weight: bold;
    font-size: 50px;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #1C3879;
    margin: 0;
    padding: 0;
`;

const Boat = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 20px;
`;

const Busan = styled.span`
    font-weight: bold;
    font-size: 30px;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #8ca8f0;
    margin-left: 30px;
`;

const SearchBox = styled.div`
    display: inline-block;;
    padding: 0.8rem;
    border: 2px solid #A4B5E1;
    border-radius: 15px;
    box-shadow: 3px 3px 3px 3px gray;
    margin-left: 38rem;
    margin-bottom: 150px;
    margin-top: 100px;
`;

const Input = styled.input`
    outline: none;
    font-size:15px;
    height: 18px;
    width:700px;
    font-family: 'Dalseo';
    font-size: 20px;
    BORDER-BOTTOM: 2px solid #A4B5E1;
    BORDER-LEFT: medium none;
    BORDER-RIGHT: medium none;
    BORDER-TOP: medium none;
    text-align: center;
`;

function HomeHeader() {

    const [foodSearch, setFoodSearch] = useState('');

    return(
        <div>
        <Link to={"/"}>
            <Logo><Dynamic>Dynamic</Dynamic><Boat src={logo}/><Busan>Busan</Busan></Logo>
        </Link>
          
        <SearchBox>
            <Input placeholder="검색" onChange={(e) => setFoodSearch(e.target.value)} />
            <Link to={"/search"} state={foodSearch}>
                <MdSearch size={30} className='search' />
            </Link>
        </SearchBox>
       
        </div>
    );
    
}

export default HomeHeader;