import { FunctionComponent } from "react";

export const Templating: FunctionComponent = () => {
  const pets = ["Fluffy", "Buddy", "Luna"];

  return (
    <>
      <div>{pets.length - 1} Pets</div>
      {pets.map((pet) => !pet.startsWith("B") && <div>{pet}</div>)}
    </>
  );
};
