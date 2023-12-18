import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Templating } from "./templating.tsx";
import "./main.css";
import { Css } from "./css/Css.tsx";
import { Nesting } from "./nesting/nesting.tsx";
import { Props } from "./props/props.tsx";
import { Reactivity } from "./reactivity/reactivity.tsx";
import { CounterStateProvider } from "./globalState/state.tsx";
import { GlobalStateViewer } from "./globalState/globalStateViewer.tsx";
import { GlobalState } from "./globalState/globalState.tsx";
import { DataFetching } from "./dataFetching/dataFetching.tsx";
import { Dom } from "./dom.tsx";
import { Debugging } from "./debugging.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/templating",
    element: <Templating />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/debugging",
    element: <Debugging />,
  },
  {
    path: "/props",
    element: <Props />,
  },
  {
    path: "/nesting",
    element: <Nesting />,
  },
  {
    path: "/reactivity",
    element: <Reactivity />,
  },
  {
    path: "/globalState",

    children: [
      {
        index: true,
        element: <GlobalState />,
      },
      {
        path: "viewer",
        element: <GlobalStateViewer />,
      },
    ],
  },
  {
    path: "/dataFetching/:id",
    element: <DataFetching />,
  },
  {
    path: "/dom",
    element: <Dom />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CounterStateProvider>
      <RouterProvider router={router} />
    </CounterStateProvider>
  </React.StrictMode>
);
