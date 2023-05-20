import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductByColor, filterProductByMaterial } from "../helpers/filterGames";
import { products } from "../data/backlogProduct";
import { useSelector } from "react-redux";
import "./Form.css";

const Form = () => {
  const [inputs, setInputs] = useState([
    {
      id: "color",
      value: "",
      label: "categorie",
      filter: filterProductByColor,
      type: "select",
      options: ["blauw", "geel", "rood", "wit"], // Add your select options here
    },
    {
      id: "materials",
      value: "",
      label: "Materialen",
      filter: filterProductByMaterial,
      type: "select",
      options: ["Cotton", "woll", "Polyester", "Nylon", "Rubber", "Leer"], // Add your select options here
    },
  ]);

  const dispatch = useDispatch();

  const onInputChanged = (e) => {
    console.log("input is veranderd");
    let copy = [...inputs];
    copy = copy.map((input) => {
      if (input.id === e.target.id) {
        input.value = e.target.value;
      }
      return input;
    });

    setInputs(copy);
  };

  const inputsToBeRendered = inputs.map((objectFromStateArray) => {
    console.log("input to be rendered werkt");
    if (objectFromStateArray.type === "select") {
      return (
        <div key={objectFromStateArray.id} className="form__wrapper">
          <label className="form__label" htmlFor={objectFromStateArray.id}>
            {objectFromStateArray.label}
          </label>
          <select
            className="form__select"
            onChange={onInputChanged}
            id={objectFromStateArray.id}
            value={objectFromStateArray.value}
          >
            {objectFromStateArray.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div key={objectFromStateArray.id} className="form__wrapper">
          <label className="form__label" htmlFor={objectFromStateArray.id}>
            {objectFromStateArray.label}
          </label>
          <input
            className="form__input"
            onChange={onInputChanged}
            type={objectFromStateArray.type}
            id={objectFromStateArray.id}
            value={objectFromStateArray.value}
          />
        </div>
      );
    }
  });

  const submit = (event) => {
    console.log("ik ben geklikt");
    event.preventDefault();

    let result = products;
    inputs.forEach((input) => {
      result = input.filter(input.value, result);
    });
    dispatch({ type: "FILTEREDGAMES", payload: result });
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="formInputsWrapper">{inputsToBeRendered}</div>
      <button className="form__search" onClick={submit}>
        SEARCH
      </button>
    </form>
  );
};

export default Form;
