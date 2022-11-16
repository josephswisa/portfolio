import './App.css';
import  {Route, BrowserRouter, Routes} from 'react-router-dom';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Home from "./Home";
import Navbar from "./Navbar";


function App() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}> </Route>
                        <Route path={"/page1"} element={<Page1/>}> </Route>
                        <Route path={"/page2"} element={<Page2/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );

}

export default App;
