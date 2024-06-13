import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopBrowse } from "./components/PopBrowse";
import { PopNewCard } from "./components/PopNewCard";
import { PopUser } from "./components/PopUser";
import WelcomeMessage from './components/WelcomeMessage';
import './App.css'
function App() {
  return (
    <div className="wrapper">
    <WelcomeMessage />
		<Header />
    <Main />
    <PopBrowse/>
    <PopNewCard/>
    <PopUser/>
    </div>
  )
}

export default App
