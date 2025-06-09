import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TransactionProvider } from "./context/TransactionProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";

createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </TransactionProvider>
);
