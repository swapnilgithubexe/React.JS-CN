import './App.css';
import Items from './components/Items';
import Navbar from './components/Navbar';
import CustomItemContext from './itemContext';
// import { totalContext } from './totalContext';


function App() {

  return (
    // <itemContext.Provider value={{ total, setTotal, item, setItem }}>
    //   {/* <totalContext.Provider value={ }}> */}

    //   {/* </totalContext.Provider> */}

    // </itemContext.Provider>
    <CustomItemContext>
      <div className='App'>
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </CustomItemContext>
  );
}
export default App;
