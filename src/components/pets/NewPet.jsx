import React, {useState} from 'react'
import generatePetObject from '../Utils/generatePetObject';
import Select from "react-select"
import SelectPet from '../Utils/SelectPet';
import "./NewPet.css"

const NewPet = ({pets, setPets}) => {

    const [formData, setFormData] = useState({
        "name": "",
        "breed": "",
        "kind": ""
      });
    

    const handleSubmit = (e) => {
        setPets([
            ...pets,
            generatePetObject(formData)
        ])
        e.preventDefault();
        setFormData({
            "name": "",
            "breed": "",
            "kind": ""
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

  return (
    <form onSubmit={handleSubmit} name='newpet'>
        <label>Pet name: </label>
        <input type="text" placeholder='Pet Name' onChange={handleChange} name='name' value={formData.name}/>
        <label>Pet breed: </label>
        <input type="text" placeholder='Pet Breed' onChange={handleChange} name='breed' value={formData.breed}/>
        <div>Pet kind:</div>
        <SelectPet />
        
        {/* <input type="text" placeholder='Pet Kind' onChange={handleChange} name='kind' value={formData.kind}/> */}
        <button>Submit</button>
    </form>
  )
}

export default NewPet
