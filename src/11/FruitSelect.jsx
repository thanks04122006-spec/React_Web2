import React, {useState} from "react";
import "./FruitSelect.css";

function FruitSelect(){
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름:' + value);
        event.preventDefault();
    }

    return(
        <form className="fruit-select" onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요
                <select value={value} onChange={handleChange}>
                    <option value={"strawberry"}>딸기</option>
                    <option value={"mango"}>망고</option>
                    <option value={"grape"}>포도</option>
                    <option value={"peach"}>복숭아</option>
                </select>
            </label>
            <br/>
            <br/>
            <button type="submit">제출</button>
        </form>
    )
}

export default FruitSelect;
