import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Mainmint from "./Components/Mainmint";

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="overlay">
    <div className='App'>
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Mainmint accounts={accounts} setAccounts={setAccounts} />
    </div>
    <div className="moving-background">

    </div>
    </div>
  );
}

export default App;
