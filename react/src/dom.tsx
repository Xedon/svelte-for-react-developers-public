import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

const useDisableContextMenu = () => {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => {
      alert("No Context Menu allowed!");
      e.preventDefault();
    };

    window.addEventListener("contextmenu", disableContextMenu);

    return () => {
      window.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);
};

const useMetaDescription = () => {
  useEffect(() => {
    const element = document.head.appendChild(
      window.document.createElement("meta")
    );
    element.setAttribute("description", "description");
    element.setAttribute("content", "DOM");

    return () => {
      document.head.removeChild(element);
    };
  });
};

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export const Dom = () => {
  const online = useOnlineStatus();
  useDisableContextMenu();
  useDocumentTitle("DOM");

  useMetaDescription();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div>
        <label htmlFor="online">Online:</label>
        <input id="online" type="checkbox" checked={online} readOnly />
      </div>
      <Link to="/">Back to Index</Link>
    </div>
  );
};
