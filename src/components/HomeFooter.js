import React from "react";
import styled from "styled-components";
import boat from "../assets/boat.png"

const Boat = styled.img`
    width: 2.5rem;
    height: 2.8125rem;
    margin: 0 0 0.688 4rem;
    display: flex;
`;

const TeamName = styled.span`
    text-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    display: flex;
    width: 18.75rem;
    height: 0.6875rem;
    margin: 0 0.4375rem 0.9375rem 4rem;
    font-family: Inter;
    font-size: 1.125rem;
    font-weight: 100;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
`;

const Name = styled.span`
    text-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    width: 2.1875rem;
    height: 0.6875rem;
    margin: 0.9375rem 0.5rem 0 4rem;
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

function HomeFooter() {
    return(
        <div>

            <Boat src={boat} />
            <TeamName>DouZone&nbsp;&nbsp;Team2&nbsp;&nbsp;Mini Project</TeamName>
            <Name>황동하&nbsp;&nbsp;김재선&nbsp;&nbsp;배병서&nbsp;&nbsp;이광석</Name>

        </div>
    );
}

export default HomeFooter;