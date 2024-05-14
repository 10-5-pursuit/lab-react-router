import React from 'react'
import Select from "react-select"

const SelectPet = () => {

    const options = [
        { value: 'Dog', label: 'Dog' },
        { value: 'Cat', label: 'Cat' },
      ]

    const customStyles = {
        control: (provided) => ({
            ...provided,
            display: 'flex',
            flexWrap: 'nowrap',
            borderColor: '#DCDCDC',
            width: "400px",
            borderRadius: "20px",
            cursor: "pointer"
        }),
        menu: (provided) => ({
            ...provided,
            marginTop: 0,
            lineHeight: "30px"
        }),
        indicatorSeparator: () => ({
            // display: 'none'
        }),
        dropdownIndicator: () => ({
            // display: "none" 
        }),
        option : () => ({
            cursor: "pointer",
        })
    };

  return (
    <Select 
    options={options}
    styles={customStyles}
    />
  )
}

export default SelectPet
