import "./styles.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { List } from "./pages/List";
import { Contact } from "./pages/Contact";
import { ItemDetails } from "./pages/ItemDetails";
import { NotFound } from "./pages/NotFound";
import { useState } from "react";
import ProtectedRoute from "./components/protectedRoute";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // create high-level protected route below

  // protect the routes for the contact, list and item details pages
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home loggedIn={isLoggedIn} setLoggedin={setIsLoggedIn} />
        },
        {
          path: "/contact",
          element: (<ProtectedRoute isLoggedIn={isLoggedIn}><Contact /></ProtectedRoute>)
        },
        {
          path: "/list",
          children: [
            {
              index: true,
              element: <ProtectedRoute isLoggedIn={isLoggedIn} > <List /></ProtectedRoute>
            },
            {
              path: ":itemId",
              element: <ProtectedRoute isLoggedIn={isLoggedIn}><ItemDetails /></ProtectedRoute>
            }
          ]
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
