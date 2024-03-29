import { useEffect, useState } from "react"
import "../FilterButtons";

const FilterBar = ({ onFilter }) => {

  const [labels, setLabels] = useState([])

  useEffect(() => {
    let toBeRenderedLabels = [
      {
        name: "schoenen",
        checked: false
      },
      {
        name: "accesiores",
        checked: false
      },
      {
        name: "Kleding",
        checked: false
      },
    ]
    setLabels(toBeRenderedLabels)
  }, [])

  const toBeRenderedLabels = labels.map(label => {
    let input = <input onChange={() => filterItem(label.name)} type="checkbox" name={label.name} id={label.name} className="filterBar__checkbox" />
    if (label.checked) {
      input = <input checked onChange={() => filterItem(label.name)} type="checkbox" name={label.name} id={label.name} className="filterBar__checkbox" />
    }
    return (<>
      <section key={label.name} className="filterBarInputWrapper">
        {input}
        <label htmlFor={label.name}>{label.name}</label>
      </section>
    </>)
  })

  const filterItem = (filter) => {
    const newState = labels.map(label => {
      if (label.name !== filter) {
        label.checked = false
      } if (label.name === filter) {
        label.checked = true
      }
      return label
    })
    setLabels(newState)
    onFilter(filter)
  }

  return <>
    <section className="filterBar">
      <div className="filterBar__Wrapper">
        {toBeRenderedLabels}
      </div>



    </section>
  </>
}

export default FilterBar