import { FunctionComponent, PropsWithChildren } from "react";
import "./memeContainer.css";

export const MemeContainer: FunctionComponent<
  PropsWithChildren<{ header: string }>
> = ({ header, children }) => (
  <div className="meme-container">
    <h2 className="meme-header">{header}</h2>
    <div>Your favorite Meme?</div>
    <div className="meme-content">{children}</div>
  </div>
);
