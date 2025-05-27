import { Home } from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/RootLayout.jsx";
import { CreateTransaction } from "./components/CreateTransaction.jsx";
import { Login } from "./components/Login.jsx";
import { Signup } from "./components/Signup.jsx";
import { EditExpense } from "./components/EditExpense.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <CreateTransaction /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/edit/:id", element: <EditExpense /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
