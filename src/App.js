import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { HashRouter, BrowserRouter } from "react-router-dom";
import RoutesApp from "./components/RoutesApp";
// "homepage": "/telegApp/",
function App() {
    return (
        <div className="App">
            <HashRouter>
                <RoutesApp />
            </HashRouter>
        </div>
    );
}

export default App;
