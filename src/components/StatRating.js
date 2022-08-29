import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({selected = false, OnSelect = f => f}) => (
    <FaStar className="Star" cursor="pointer" size={25} color={selected ? "#B2C8DF" : "gray"} onClick={OnSelect} />
);

const createArray = length => [...Array(length)];

export default function StarRating({totalStars = 5}) {
    const [selectedStars, setselectedStars] = useState(0);
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star 
                    key={i} 
                    selected={selectedStars > i}
                    OnSelect={() => setselectedStars(i+1)} />
            ))}
        </>
    )
}