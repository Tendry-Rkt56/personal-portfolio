import { Layout } from "./components/Layout/Layout";
import { About } from "./components/about/About";
import { Home } from "./components/home/Home";
import { NavBar } from "./components/navbar/NavBar";
import { Service } from "./components/service/Service";
import { ThemeProvider } from "./context/ThemeContext";

function App () {

    return (
        <ThemeProvider>
            <Layout>
                <NavBar/>
                <Home/>
                <About/>
                <Service/>
            </Layout>
        </ThemeProvider>
    )

}

export default App