import React from "react";
import styled from "styled-components";
import boat from "../assets/boat.png"


const FooterContainer = styled.div`
    width: 80rem;
    height: 6rem;
    border-top: 0.6rem double #aebde2;
`;

const Boat = styled.img`
    width: 2.5rem;
    height: 2rem;
    margin: 0px 0 0.69rem 0px;
    display: flex;
`;

const TeamName = styled.span`
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 18.75rem;
    height: 0.53rem;
    margin: 0 0.43rem 0.94rem 0px;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
`;

const Name = styled.span`
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    width: 2.187rem;
    height: 0.53rem;
    margin: 0.8rem 0.5rem 0 0p;
    font-family: Inter;
    font-size: 0.75rem;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
`;

function Footer() {
    return(
        <FooterContainer>

            <Boat src={boat} />
            <TeamName>DouZone&nbsp;&nbsp;Team2&nbsp;&nbsp;Mini Project</TeamName>
            <Name>황동하&nbsp;&nbsp;김재선&nbsp;&nbsp;배병서&nbsp;&nbsp;이광석</Name>

        </FooterContainer>
    );
}

export default Footer;