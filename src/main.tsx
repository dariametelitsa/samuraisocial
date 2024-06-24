import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GlobalStyles } from "./components/styles/GlobalStyles.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles/>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
