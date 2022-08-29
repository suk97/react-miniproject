import React, {useState} from "react";
import styled from "styled-components";
import dataFoods from '../dataBase/FoodLists.json';
import Redheart from '../assets/Redheart.png'
import Blackheart from '../assets/blackHeart.png'

const PopBox = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background-color: rgba(0,0,0,0.548);
`;

const Container= styled.div`
    position: relative;
    width: 25rem;
    height: 40rem;
    background-color: #fff;
    border 0.2rem solid #aebde2;
    margin: auto;
    margin-top: 3rem;
    border-radius: 20%;
`;

const PopTitile = styled.div`
    width: 20rem;
    height: 3rem;
    -webkit-text-stroke: 0.0625rem #000;
    font-family: 'Nanum Brush Script', cursive;
    font-size: 2rem;
    margin: auto;
    margin-top:2rem;
    color: #8ca8f0;
    border-bottom: 0.1rem solid #aebde2;
`;

const Popimg = styled.img`
    display: block;
    width: 24rem;
    height: 12rem;
    margin: auto;
    margin-top: 2rem;
    border-radius: 5%;
`;

const Close= styled.button`
    width: 15rem;
    height: 2rem;
    margin-left: 5rem;
    margin-top:  0.3rem;
    border-top: 0.2em solid #aebde2;
    border-bottom: 0.1em solid #aebde2;
    font-family: 'Dalseo';
    font-size: 1rem;
    background-color: #B2C8DF;
    border: 0;
    border-radius: 20%;
    cursor: pointer;
`;

const AddWishbox =styled.div`
    position: absolute;
    width: 10rem;
    height:2rem;
    font-size: 0.5rem;
    font-family: 'Nanum Brush Script', cursive;
    font-style: italic;
    color: #8ca8f0;
    cursor: pointer;
    text-align:center;
    bottom: 2rem;
    left: 15rem;
`;

const RedHeart = styled.img`
    width:1rem;
    height:1rem;
`;

const List = styled.li`
    list-style: none;
`;

const Text = styled.p`
    font-family: 'Dalseo';
    margin-left: 0.5rem;
`;



function PopImfo({setPopshow, sendId, setWishid, onAdd, onDelete, wishItem }) {

    const [foodsLists, setFoodLists] = useState(dataFoods);

    const  checkId = sendId;
    
    const food = foodsLists.filter(
        (foodlist) => (foodlist.콘텐츠ID == checkId)
    );

    const foodFullList = food.map(
        (foodlist)  =>(  
          <List> 
                <Popimg  src={foodlist.이미지URL} />
                <Text>제목 : {foodlist.콘텐츠명} </Text> 
                <Text>대표메뉴 : {foodlist.대표메뉴}</Text> 
                <Text>주소 : {foodlist.주소}</Text> 
                <Text>운영 및 시간 :{foodlist['운영 및 시간']}</Text> 
                <Text>연락처 : {foodlist.연락처} </Text>
          </List>)
    );
                
    const foodImg = food.map((data)=>(data.썸네일이미지URL));
    const foodTitle= food.map((data)=>(data.콘텐츠명));
    const foodMenu= food.map((data)=>(data.대표메뉴));
    const foodAddr= food.map((data)=>(data.주소));
    const foodNumber= food.map((data)=>(data.연락처));
    const foodTime= food.map((data)=>(data['운영 및 시간']));
    const heartcolor = food.map((data) =>(data.위시리스트))
    const heartId = food.map((data) => (data.콘텐츠ID))

    const myWish = 
        {   이미지: foodImg[0],
            상호명:foodTitle[0],
            대표메뉴:foodMenu[0],
            주소 : foodAddr[0],
            연락처: foodNumber[0],
            운영시간: foodTime[0],
            위시리스트: heartcolor[0],
            Id: heartId[0]
        };     
            
    const [heartChange, setHeartChange]=useState(false);

    return (
        <PopBox>
            <Container>
                <PopTitile>Busan Tasty Road</PopTitile>
                {foodFullList}

                <Close onClick={() => { setPopshow(false) }}>Back</Close>
                    {(wishItem?.filter(item => item.Id === checkId))?.length > 0? 
                    (<AddWishbox><RedHeart src={Redheart} onClick={() => { setHeartChange(!heartChange); setWishid(checkId); onDelete(myWish); }} /> Add Wish</AddWishbox>):
                    (<AddWishbox><RedHeart src={Blackheart} onClick={() => { setHeartChange(!heartChange); setWishid(checkId); onAdd(myWish); }} /> Add Wish</AddWishbox>)}
            </Container>
        </PopBox>
    )

}

export default PopImfo;