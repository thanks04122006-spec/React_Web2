import React from "react";

const unitNames = {
    km: "킬로미터",
    mi: "마일"
};

function DistanceInput(props){
    const handleChange = (event) => {
        props.onDistanceInputChange(event.target.value);
    };

    return(
        <label className="inputField">
                {unitNames[props.unit]} 입력:
            <input
                value={props.distance}
                onChange={handleChange}
                placeholder={`${unitNames[props.unit]}를 입력하세요`}
            />
        </label>
    );
}

export default DistanceInput;
