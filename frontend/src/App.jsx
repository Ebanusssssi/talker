// import Cursor from './components/Cursor';
import Authorization from './pages/Authorization';
import Home from './pages/Home';
import ModeSwitcher from "../src/components/ModeSwitcher";
import { useState } from 'react';


const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode && 'dark'} relative bg-light-bg dark:bg-dark-bg overflow-hidden`}>
      <ModeSwitcher darkMode={setDarkMode} />
      {/* <Cursor /> */}
      {/* <Authorization /> */}
      <Home />
    </div>
    )
  }

export default App;
