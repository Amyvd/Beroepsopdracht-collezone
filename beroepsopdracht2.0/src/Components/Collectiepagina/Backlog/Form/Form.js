import { useState } from "react";
import { useDispatch } from "react-redux";
import {filterProductByTitle, filterProductByMaterial} from "../helpers/filterGames";
import {products} from "../data/backlogProduct";

import "./Form.css";

const Form = () =>{

    // state voor elke input

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "Name",
            filter: filterProductByTitle
        },
        {
            id: "materials",
            value: "",
            label: "Materials",
            filter: filterProductByMaterial
        },
    
    ])

    const dispatch = useDispatch();

    // set state voor input value

    const onInputChanged = (e) =>{
        let copy = [...inputs];
        copy.map(input => {
            if(input.id === e.target.id){
                input.value = e.target.value;
            }
        })
        setInputs(copy);
    }

    // on submit filter door elke input tegelijker tijd filtert op elke filter

    const submit = (event) =>{
        event.preventDefault();
        let result = products;
        inputs.forEach(input => {
            result = input.filter(input.value, result);
        })
        dispatch({type: "FILTEREDGAMES", payload: result})
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        return(
            <div key={objectFromStateArray.id} className="form__wrapper">
                <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input className="form__input" onChange={onInputChanged} type="text" id={objectFromStateArray.id} value={objectFromStateArray.value}/>
            </div>
        );
    })

    return(
        <form className="form" onSubmit={submit}>
            <div className="formInputsWrapper">
                {inputsToBeRendered}
            </div>
            <button className="form__search" onClick={submit}>SEARCH</button>
        </form>
    );
}

export default Form;