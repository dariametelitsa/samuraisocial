import './App.css';
import { Header } from "./layouts/header/Header.tsx";
import { SideDialogs } from "./layouts/dialogs/sideDialogs/SideDialogs.tsx";
import { personsForDialogs } from "./data/data.ts";
import { Dialog } from "./layouts/dialogs/dialog/Dialog.tsx";
import { StyleLayout } from "./layouts/layoutStyles.ts";
// import { SideNews } from "./layouts/news/sideNews/SideNews.tsx";
// import { Newsline } from "./layouts/news/newsline/Newsline.tsx";

function App() {
    return (
        <div className={'container'}>
            <Header/>
            <StyleLayout.Main>
                <SideDialogs persons={personsForDialogs}/>
                <Dialog/>
                {/*<SideNews/>*/}
                {/*<Newsline/>*/}
            </StyleLayout.Main>
        </div>
    )
}

export default App
