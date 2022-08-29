import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import map from "../assets/map.png"
import pin from "../assets/pin.png"

const Map = styled.img`
    width: 75rem;
    height: 43.75rem
    flex-grow: 0;
    margin-left: 18.75rem;
`;

const MapPin = styled.div`
    position: relative;
    margin-left: 5rem;
`;

const Haeundae = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 64.375rem;
    margin-top: 18.125rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 64.375rem;
        margin-top: 18.125rem;
    }
`;

const NameHaeundae = styled.div`
    position: absolute;
    width: 6rem;
    height: 3rem;
    font-size: 1.5rem;
    left: 63.5rem;
    bottom: 28.5rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
  `;

const Namgu = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 59rem;
    margin-top: 27rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 59rem;
        margin-top: 27rem;
    }
`;

const NameNamgu = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 59.3rem;
    bottom: 19rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
  `;

const Jingu = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 54.8rem;
    margin-top: 22.875rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 54.5rem;
        margin-top: 22.875rem;
    }
`;

const NameJingu = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 54.8rem;
    bottom: 23.3rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;


const Suyoung = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 61.5rem;
    margin-top: 23rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 61rem;
        margin-top: 21.5rem;
    }
`;

const NameSuyoung = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 60.2rem;
    bottom: 24.5rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;

const Gangsegu = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 44rem;
    margin-top: 25rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 43rem;
        margin-top: 25rem;
    }
`;

const NameGangsegu = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 42rem;
    top: 23rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;

const Gijanggun = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 68rem;
    margin-top: 10rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 67rem;
        margin-top: 10rem;
    }
`;

const NameGijanggun = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 66.5rem;
    top: 8rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;


const Yeongdo = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 57rem;
    margin-top: 32rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 57rem;
        margin-top: 32rem;
    }
`;
const NameYeongdo = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 57rem;
    top: 30rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;

   
const Sahagu = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left: 50rem;
    margin-top: 32rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left: 49.5rem;
        margin-top: 32rem;
  }
`;

const NameSahagu = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 49rem;
    top: 30rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;

const Junggu = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left 54.2rem;
    margin-top: 29.8rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left 53.2rem;
        margin-top: 29.5rem;
    }
`;

const NameJunggu = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 53.5rem;
    top: 27.5rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;


const Donglae = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left 58rem;
    margin-top: 16.7rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left 57.5rem;
        margin-top: 16.7em;
    }
`;

const NameDonglae = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 57rem;
    top: 14.8rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;

const Yeanjaegu = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left 58rem;
    margin-top: 20.5rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left 58rem;
        margin-top: 20.5em;
    }
`;

const NameYeanjaegu = styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 57.6rem;
    top: 18.7rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;

const Sasanggu = styled.img`
    position: absolute;
    height: 2.5rem;
    weight: 2.5rem;
    margin-left 50rem;
    margin-top: 24rem;
    cursor: pointer;
    &:hover{
        width: 3.5em;
        height: 3.5rem;
        margin-left 49.5rem;
        margin-top: 24rem;
    }
`;

const NameSasanggu= styled.div`
    position: absolute;
    width: 3em;
    height: 3rem;
    font-size: 1.5rem;
    left: 49.5rem;
    top: 22rem;
    color: black;
    font-family: Sora;
    font-weight: 1000;
`;

function HomeContent() {
    const [showValue, setShowvalue]=useState('');
    
    return(
        <MapPin>
            <Link to={"heaundae"}> 
                <Haeundae src={pin}  onMouseOver={()=>setShowvalue('heaundae-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'heaundae-pin'? <NameHaeundae>해운대구</NameHaeundae>: <></> }
            <Link to={"jingu"}>
                <Jingu src={pin} onMouseOver={()=>setShowvalue('jingu-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'jingu-pin'? <NameJingu>진구</NameJingu>: <></> }
            <Link to={"namgu"}> 
                <Namgu src={pin} onMouseOver={()=>setShowvalue('namgu-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'namgu-pin'? <NameNamgu>남구</NameNamgu>: <></> }
            <Link to={"suyoung"}>
                <Suyoung src={pin}  onMouseOver={()=>setShowvalue('suyoung-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'suyoung-pin'? <NameSuyoung>수영구</NameSuyoung>: <></>}
            
            <Link to={"gangsegu"}>
                <Gangsegu src={pin}  onMouseOver={()=>setShowvalue('gangsegu-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'gangsegu-pin'? <NameGangsegu>강서구</NameGangsegu>: <></> }
            <Link to={"gijanggun"}>
                <Gijanggun src={pin}  onMouseOver={()=>setShowvalue('gijanggun-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'gijanggun-pin'? <NameGijanggun>기장군</NameGijanggun>: <></> }
            <Link to={"yeongdo"}>
                <Yeongdo src={pin}  onMouseOver={()=>setShowvalue('yeongdo-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'yeongdo-pin'? <NameYeongdo>영도구</NameYeongdo>: <></> }
            <Link to={"sahagu"}>
                <Sahagu src={pin}  onMouseOver={()=>setShowvalue('sahagu-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'sahagu-pin'? <NameSahagu>사하구</NameSahagu>: <></> }
            <Link to={"Junggu"}>
                <Junggu src={pin}  onMouseOver={()=>setShowvalue('Junggu-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'Junggu-pin'? <NameJunggu>중구</NameJunggu>: <></> }
            <Link to={"donglae"}>
                <Donglae src={pin}  onMouseOver={()=>setShowvalue('donglae-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'donglae-pin'? <NameDonglae>동래구</NameDonglae>: <></> }
            <Link to={"yeanjaegu"}>
                <Yeanjaegu src={pin}  onMouseOver={()=>setShowvalue('yeanjaegu-pin')} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'yeanjaegu-pin'? <NameYeanjaegu>연제구</NameYeanjaegu>: <></> }
            <Link to={"sasanggu"}>
                <Sasanggu src={pin}  onMouseOver={()=>setShowvalue("sasanggu-pin")} onMouseOut={()=>setShowvalue('')}/>
            </Link>
            { showValue === 'sasanggu-pin'? <NameSasanggu>사상구</NameSasanggu>: <></> }
            <Map src={map} /> 
        </MapPin>
    );
}

export default HomeContent;