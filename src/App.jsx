import { Home } from "./pages/Home";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateTransaction } from "./components/CreateTransaction";
import { EditExpense } from "./components/EditExpense";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import { RootLayout } from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "create",
        element: (
          <ProtectedRoutes>
            <CreateTransaction />
          </ProtectedRoutes>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/edit/:id",
        element: (
          <ProtectedRoutes>
            <EditExpense />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
