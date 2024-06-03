import './App.css';
import { Header } from "./layouts/header/Header.tsx";
import { SideDialogs } from "./layouts/dialogs/sideDialogs/SideDialogs.tsx";
import { personsForDialogs } from "./data/data.ts";

function App() {
    return (
        <div className={'container'}>
            <Header/>
            <main>
                <SideDialogs persons={personsForDialogs}/>
            </main>
        </div>
    )
}

export default App
