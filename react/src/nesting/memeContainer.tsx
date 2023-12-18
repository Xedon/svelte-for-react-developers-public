import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import "./memeContainer.css";

export const MemeContainer: FunctionComponent<
  PropsWithChildren<{ header: ReactNode }>
> = ({ header, children }) => (
  <div className="meme-container">
    {header}
    <div>Your favorite Meme?</div>
    <div className="meme-content">{children}</div>
  </div>
);
