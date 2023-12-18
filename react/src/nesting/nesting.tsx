import { MemeContainer } from "./memeContainer";
import { Image } from "./image";

export const Nesting = () => {
  return (
    <MemeContainer header={<h2>Hang in there</h2>}>
      <Image />
    </MemeContainer>
  );
};
