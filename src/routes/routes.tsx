import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./PATHS.ts";
import App from "../App.tsx";
import { personsForDialogs } from "../data/data.ts";
import { SideDialogs } from "../layouts/dialogs/sideDialogs/SideDialogs.tsx";
import { SideNews } from "../layouts/news/sideNews/SideNews.tsx";
import { Dialog } from "../layouts/dialogs/dialog/Dialog.tsx";

export const router = createBrowserRouter([
    {
        path: PATH.ROOT,
        element: <App />,
        errorElement: <div>Error, 404</div>,
        children: [
            {
                path: PATH.DIALOGS,
                element: <SideDialogs persons={personsForDialogs}/>,
                children: [
                    {
                        path: '',
                        element: <div>Диалог не выбран</div>
                    },
                    {
                        path: 'currentdialog',
                        element: <Dialog/>,
                    }
                ]
            },
            {
                path: PATH.NEWS,
                element: <SideNews/>
            },
        ],
    }
]);
