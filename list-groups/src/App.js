import './App.css';
import TopMenu from "./components/TopMenu/TopMenu";
import SecondBlock from "./components/SecondBlock/SecondBlock";
import ToDoList from "./components/ToDoList/ToDoList";
import FourthBlock from "./components/FourthBlock/FourthBlock";
import FifthBlock from "./components/ FifthBlock/ FifthBlock";
function App() {
    return (
        <div className="App">
            <div className="container">
                <TopMenu/>
                <SecondBlock/>
                <ToDoList/>
                <FourthBlock />
                <FifthBlock />
            </div>
        </div>
    );
}

export default App;
