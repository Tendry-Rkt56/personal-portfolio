import { About } from "./components/about/About";
import { Home } from "./components/home/Home";
import { NavBar } from "./components/navbar/NavBar";
import { Service } from "./components/service/Service";

function App () {

    return <>
        <NavBar/>
        <Home/>
        <About/>
        <Service/>
    </>

}

export default App