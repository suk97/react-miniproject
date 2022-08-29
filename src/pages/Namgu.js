import React, {useState} from "react";
import dataFoods from "../dataBase/FoodLists.json";
import styled from "styled-components";
import namgu from "../assets/namgu.PNG"
import Footer from "../components/Footer";
import PopImfo from "./PopInfo";
import FoodHeader from '../components/FoodHeader';

const Container= styled.div`
    position: relative;
    width: 80rem; 
    background-color: #fff;
    border 0.2rem solid #aebde2;
    margin: auto;
`;
  
const NamguLogo = styled.img`
    display:block;
    width: 42rem;
    height: 29.25rem;
    margin: auto;
`;

const ImgContainer = styled.div`
    display: inline-block;
    width: 80rem;
    height: 15rem;
    text-align: center;
    margin-top: 1rem;
    margin-left: 1rem;  
`;

const FoodImg = styled.img`
    width: 10rem;
    height: 10rem;
    cursor: pointer;
    border-radius: 50%;
    border  solid black;
    margin-right: 2rem;
    &:hover{
        border dashed #8ca8f0;
    }
`;

const MoreButton = styled.span`
    display: block;
    width: 140px;
    height: 54px;
    font-family: 'Dalseo';
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height:54px;
    vertical-align: middle;
    color: #000;
    border: 0.3rem solid #8ca8f0;
    border-radius: 25%;
    margin: auto;
    cursor: pointer;
    margin-bottom: 1rem;
`;


function Namgu({setWishid, onAdd, wishItem, onDelete}) {

    const [foodsLists, setFoodLists] = useState(dataFoods);

    const location = '남구';

    const food = foodsLists.filter((foodlist) => (foodlist.구군 == location));

    const foodImg = food.map((data)=>(data.썸네일이미지URL));
    const foodId = food.map((data)=>(data.콘텐츠ID));
    
    const [PopShow, setPopshow ]=useState(false);

    const [sendId, setSendId] = useState(foodId);

    // 더 보기 음식 리스트
    const [ foodShow, setFoodShow ] = useState(false);

    // 더 보기 버튼 이름 변경
    const [ button, setButton ] = useState('MORE');

        return(

            <div>

                <Container>
                    
                        <FoodHeader/>
                        <NamguLogo src={namgu}/>

                        {/* 음식 1~3 */}
                        <ImgContainer>
                        {foodImg.map((food, idx) => {
                                if (idx < 3) {
                                    return <FoodImg src={foodImg[idx]} 
                                                    onClick= {() => {setPopshow(true)
                                                                    setSendId(foodId[idx])}}/>
                                }
                            })}
                        </ImgContainer>

                        {/* 음식 4~6 */}
                        <ImgContainer>
                        {foodImg.map((food, idx) => {
                                if (idx > 2 && idx < 6) {
                                    return <FoodImg src={foodImg[idx]} 
                                                    onClick= {() => {setPopshow(true)
                                                                    setSendId(foodId[idx])}}/>
                                }
                            })}
                        </ImgContainer>

                        {/* 더 보기 */}
                        {foodShow && <ImgContainer>
                        {foodImg.map((food, idx) => {
                            if (idx > 5 && idx < 9) {
                                return <FoodImg src={foodImg[idx]} 
                                                onClick= {() => {setPopshow(true)
                                                                setSendId(foodId[idx])}}/>
                                }
                            })}
                        </ImgContainer>}
                            <MoreButton onClick={() => {
                                setFoodShow((prev) => !prev)
                                button == 'CLOSE' ? setButton('MORE') : setButton('CLOSE')
                                }}>{button}</MoreButton>

                        <Footer/>

                </Container>

                {PopShow && <PopImfo sendId={sendId} setPopshow={setPopshow} setWishid={setWishid} onAdd={onAdd} onDelete={onDelete} wishItem={wishItem} />}
            
            </div>
        
        );
}

export default Namgu;