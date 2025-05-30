import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../context/TransactionProvider";

export const Logout = ({ closeMenu }) => {
  const { setIsLoggedIn } = useContext(TransactionContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/logout", {
        method: "POST",
        credentials: "include",
      });

      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);

      if (!response.ok) {
        const data = await response.json();
        alert(data.message || "Logout failed");
        return;
      }

      alert("Logged out successfully!");
      closeMenu?.();
      navigate("/");
    } catch (err) {
      console.error("Logout error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white hover:text-red-200 transition-colors cursor-pointer duration-200 text-left"
    >
      Logout
    </button>
  );
};
