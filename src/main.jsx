import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TransactionProvider } from "./context/TransactionProvider.jsx";
import { CategoriesProvider } from "./context/CategoriesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <TransactionProvider>
    <CategoriesProvider>
      <App />
    </CategoriesProvider>
  </TransactionProvider>
);
