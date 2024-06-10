import './App.css';
import { Header } from "./layouts/header/Header.tsx";
import { SideDialogs } from "./layouts/dialogs/sideDialogs/SideDialogs.tsx";
import { personsForDialogs } from "./data/data.ts";
import { Dialog } from "./layouts/dialogs/dialog/Dialog.tsx";
import { StyleLayout } from "./layouts/layoutStyles.ts";

function App() {
    return (
        <div className={'container'}>
            <Header/>
            <StyleLayout.Main>
                <SideDialogs persons={personsForDialogs}/>
                <Dialog/>
            </StyleLayout.Main>
        </div>
    )
}

export default App
