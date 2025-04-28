import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Transaction } from "./components/Transaction";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
    }
  ]);

  return (
    // <RouterProvider router={router}>
    <div className="flex flex-col">
      <div className="flex  justify-center items-center  bg-teal-500 rounded-2xl m-2 mb-10">
        <div className="flex  w-full ">
          <Header />
        </div>
      </div>
      <div className="flex flex-1/2">
        <div className="flex flex- items-center align-middle w-1/6 mt-30 rounded-2xl m-2 p-7 h-auto my-auto  bg-teal-500 ">
          <Sidebar />
        </div>
        <div className="flex justify-center items-center w-full ">
          <Transaction />
        </div>
      </div>
    </div>
    // </RouterProvider>
  );
}

export default App;
