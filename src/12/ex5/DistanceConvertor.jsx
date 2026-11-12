import React, {useState} from "react";
import DistanceInput from "./DistanceInput";
import "./DistanceConvertor.css";

function DistanceConvertor() {
    const [distance, setDistance] = useState('');
    const [unit, setUnit] = useState("km");

    const handleKmChange = (distance) => {
        setDistance(distance);
        setUnit("km");
    }

    const handleMileChange = (distance) => {
        setDistance(distance);
        setUnit("mi");
    }

    const kilometer = unit === "mi" ? tryConvert(distance, toKilometer) : distance;
    const mile = unit === "km" ? tryConvert(distance, toMile) : distance;

    return(
        <div className="distanceConvertor">
            <h1>거리 변환기</h1>
            <DistanceInput
                unit="km"
                distance={kilometer}
                onDistanceInputChange={handleKmChange}
            />
            <DistanceInput
                unit="mi"
                distance={mile}
                onDistanceInputChange={handleMileChange}
            />
        </div>
    );
}

function toKilometer(mile){
    return mile * 1.609344;
}

function toMile(kilometer) {
    return kilometer / 1.609344;
}

function tryConvert(distance, convert){
    const input = parseFloat(distance);
    if(Number.isNaN(input)){
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return  rounded.toString();
}

export default DistanceConvertor;
