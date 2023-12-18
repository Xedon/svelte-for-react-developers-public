import { FunctionComponent } from "react";
import "./css.css";

export const Css: FunctionComponent = () => {
  const pets = ["Fluffy", "Buddy", "Luna"];

  return (
    <>
      <div className="content">
        <div>{pets.length - 1} Pets</div>
        <div className="pet-content">
          {pets.map(
            (pet) =>
              !pet.startsWith("B") && (
                <div
                  key={pet}
                  style={{
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    ["--pet-color" as any]: `#${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}`,
                  }}
                >
                  {pet}
                </div>
              )
          )}
        </div>
      </div>
      <div className="disclaimer">
        No sane person would do this in react nowadays, use tailwind or cssInJs
      </div>
    </>
  );
};
