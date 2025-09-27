import React, { useState, useEffect } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#1e1e1e";
      document.body.style.color = "#f8c948";
    } else {
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "#333";
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const handleLogout = () => alert("Logged out successfully!");
  const handleClearNotes = () => alert("All notes cleared!");

  return (
    <div className="container my-5 d-flex flex-column align-items-center gap-4">
      <h2 className="text-center mb-4 fw-bold font-salsa">
        ⚙️ Settings
      </h2>

      <div
        className="card shadow-sm border-0 w-50 p-4 text-center"
        style={{
          minHeight: "160px",
          borderRadius: "12px",
          backgroundColor: theme === "light" ? "#ffffff" : "#2c2c2c",
          color: theme === "light" ? "#333" : "#f8c948",
        }}
      >
        <h5 className="fw-bold mb-2 font-salsa">
          Appearance
        </h5>
        <p className="text-muted mb-3" style={{ color: theme === "light" ? "#666" : "#f8c948" }}>
          Toggle between Light and Dark mode for the application.
        </p>
        <button
          onClick={toggleTheme}
          className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center mx-auto"
          style={{
            width: "50px",
            height: "50px",
            fontSize: "24px",
            backgroundColor: theme === "light" ? "#f8c948" : "#333",
            color: theme === "light" ? "#333" : "#f8c948",
            border: "2px solid",
            borderColor: theme === "light" ? "#f8c948" : "#f8c948",
          }}
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>

      <div
        className="card shadow-sm border-0 w-50 p-4"
        style={{
          minHeight: "140px",
          borderTop: "4px solid #dc3545",
          borderRadius: "12px",
          backgroundColor: theme === "light" ? "#fff5f5" : "#2c1a1a",
          color: theme === "light" ? "#dc3545" : "#f8c948",
        }}
      >
        <h5 className="fw-bold mb-2 font-salsa d-flex align-items-center gap-2">
          ⚠️ Danger Zone
        </h5>
        <p className="text-muted mb-3" style={{ color: theme === "light" ? "#a94442" : "#f8c948" }}>
          Use with caution. Logging out or clearing notes is irreversible.
        </p>
        <div className="d-flex gap-3">
          <button className="btn btn-sm btn-warning" onClick={handleLogout}>
            Logout
          </button>
          <button className="btn btn-sm btn-danger" onClick={handleClearNotes}>
            Clear Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
