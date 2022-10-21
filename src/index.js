import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderContext } from "./provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ProviderContext>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ProviderContext>
);
