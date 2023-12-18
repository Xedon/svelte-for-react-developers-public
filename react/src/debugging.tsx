import { FunctionComponent } from "react";

export const Debugging: FunctionComponent = () => {
  const pets = ["Fluffy", "Buddy", "Luna"];

  return (
    <>
      <div>{pets.length - 1} Pets</div>
      {pets.map((pet) => {
        console.log(pet);
        debugger;
        return !pet.startsWith("B") && <div>{pet}</div>;
      })}
    </>
  );
};
