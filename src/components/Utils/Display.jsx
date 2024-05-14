import Pet from "../pets/Pet"

const handleDisplay = ({animals, cats, dogs, pets}) => {
    if(animals === "cats") {
        return cats.map((cat) => (
          <Pet key={cat.id} kind="Cat" pet={cat} />
        ))
      }else if(animals === "dogs"){
        return dogs.map((dog) => (
          <Pet key={dog.id} kind="Dog" pet={dog} />
        ))
      }else {
        return pets.map((pet) => (
          <Pet key={pet.id} kind={pet.kind} pet={pet} />
        ))
      }
}

export default handleDisplay;