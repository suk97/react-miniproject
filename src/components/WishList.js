import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components";
import logo from '../assets/logo.png';
import StarRating from './StatRating';

const Container= styled.div`
    position: relative;
    width: 105rem;
    background-color: #fff;
    border 0.2rem solid #aebde2;
    border-radius: 15px;
    margin: auto;
`;

const HeaderContainer = styled.div`
    display:flex;
    width: 105rem;
    height: 10rem;
    margin-bottom: 3.125rem;
    border-bottom: 0.1875rem solid #aebde2;
`;

const Logo = styled.div`
    display: inline-block;
    width: 12.5rem;
    text-align: center;
    margin-left: 1.25rem;
    margin-top: 1.25rem;
    border-radius: 0.9375rem;
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
    font-family: 'Nanum Brush Script', cursive;
    font-size: 2.25rem;
    margin-top: 3.4375rem;
    margin-left: 35rem;
    color: #8ca8f0;
`;

const WishBox = styled.div`
    width: 100rem;
    height: 20rem;
    font-family: 'Dalseo';
    font-size: 1.5rem;
    background-color: #B2C8DF;
    margin-left: 2.5rem;
    margin-bottom: 2rem;
    border-radius: 15px;
    display: flex;
`;

const WishThum = styled.img`
    width: 20rem;
    height: 17rem;
    margin-top: 1.4rem;
    margin-left: 2.6rem;
    border-radius: 50%;
    border: 2px solid black;
`;

const WishText = styled.div`
    width: 72rem;
    height: 17rem;
    margin-left: 3.5rem;
    margin-top: 1.4rem;
    background-color: white;
    border-radius: 15px;
`;

const WishTitle = styled.div`
    display: inline-block;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 10px;
    
`;

const WishMenu = styled.div`
    display: inline-block;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 10px;
`;

const WishAddr = styled.div`
    display: inline-block;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 10px;
`;

const WishNumber = styled.div`
    display: inline-block;
    padding: 0.4rem;
    border-radius: 10px;
`;

const WishTime = styled.div`
    display: inline-block;
    padding: 0.5rem;
    margin-right: 1rem;
`;

const WishStar = styled.div`
    display: inline-block;
`;

const WishComment = styled.input`
    width: 69.5rem;
    height:5rem;
    margin-left: 1rem;
    margin-top: 2rem;
    border-radius: 10px;
    background-color: lightgray;
`;



function WishList({wishItem}) {
   
    return(
        <Container>
            <HeaderContainer>
                <Link to={"/"}>
                <Logo><Dynamic>Dynamic</Dynamic><Boat src={logo}/><Busan>Busan</Busan></Logo>
                </Link>
                <BusanTiltle>My WishList</BusanTiltle>
            </HeaderContainer>

            {wishItem.map((food, idx) => (
            <WishBox key={idx}>
                    <WishThum src ={food.이미지}/>
                <WishText>
                    <WishTitle>상호명 : {food.상호명}</WishTitle>
                    <WishMenu>대표메뉴 : {food.대표메뉴}</WishMenu>
                    <WishAddr>주소 : {food.주소}</WishAddr>
                    <WishNumber>연락처 : {food.연락처}</WishNumber>
                    <WishTime>운영시간 : {food.운영시간}</WishTime><br />
                    &nbsp;별점 : <WishStar><StarRating /></WishStar>
                    <WishComment type="text"></WishComment>
                </WishText>
            </WishBox>
            ))}

        </Container>

    );

}
export default WishList;