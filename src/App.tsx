import './App.css';
import { Header } from "./layouts/header/Header.tsx";
import { StyleLayout } from "./layouts/layoutStyles.ts";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className={'container'}>
            <Header/>
            <StyleLayout.Main>
                <Outlet/>
                {/*<SideDialogs persons={personsForDialogs}/>*/}
                {/*<Dialog/>*/}
                {/*<SideNews/>*/}
                {/*<Newsline/>*/}
            </StyleLayout.Main>
        </div>
    )
}

export default App
