import Navbar from "./components/Navbar";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Items from "./pages/Items";
import ItemDetails from "./pages/itemDetails";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  // const [page, setPage] = useState("home")
  const router = createBrowserRouter([
    {
      path: "/", element: <Navbar />, errorElement: <ErrorPage />,
      // we can also give index: true to remove the path from the home component
      children: [{ path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "items", children: [
          { index: true, element: <Items /> },
          {

            path: ":id", element: <ItemDetails />
          }]
      }]
    }
  ])
  return <>
    {/* <Navbar setPage={setPage} />
    {page === "home" && <Home />}
    {page === "about" && <About />}
    {page === "items" && <Items />} */}
    <RouterProvider router={router} />

  </>;
}

export default App;
