import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import routes from "./routes";

const router = createBrowserRouter(routes);

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<RouterProvider router={router} />);
