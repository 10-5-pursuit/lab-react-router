import { v4 as uuidv4 } from 'uuid';


const generatePetObject = (formData) => {

    function generateUUID() {
        const uuid = uuidv4();
        return uuid.slice(0, 7);
    }
    return {
        "id": generateUUID(),
        "name": formData.name,
        "kind": formData.kind,
        "breed": formData.breed,
        "employeeId": "B3uGgZk"
    }
}

export default generatePetObject;