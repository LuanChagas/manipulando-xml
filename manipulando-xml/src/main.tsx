import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UploadCsv from "./pages/UploadCsv.tsx";
import ServidorCsv from "./pages/ServidorCsv.tsx";
import UploadJson from "./pages/UploadJson.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/uploadcsv",
        element: <UploadCsv />,
      },
      {
        path: "/servidorcsv",
        element: <ServidorCsv />,
      },
      {
        path: "/uploadjson",
        element: <UploadJson />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
