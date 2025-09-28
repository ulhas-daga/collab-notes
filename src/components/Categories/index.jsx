import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const userId = localStorage.getItem("userId");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let allNotes = localStorage.getItem("NotesData");
    if (allNotes) {
      allNotes = JSON.parse(allNotes);
      const userNotes = allNotes.filter((n) => n.userId == userId);
      const categoryMap = {};
      userNotes.forEach((note) => {
        categoryMap[note.category] = (categoryMap[note.category] || 0) + 1;
      });
      const formattedCategories = Object.keys(categoryMap).map((cat) => ({
        name: cat,
        count: categoryMap[cat],
      }));
      setCategories(formattedCategories);
    }
  }, [userId]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-4xl font-salsa">📂 Categories</h2>
      <h3 className="text-center mb-4 text-4xl font-salsa">
        Browse your notes categories here
      </h3>
      <div className="row justify-content-center g-3">
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <Link
                to={`/categories/${cat.name}`}
                className="text-decoration-none text-dark"
              >
                <div
                  className="card shadow-sm border-0"
                  style={{ minHeight: "120px", cursor: "pointer" }}
                >
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-4">📁</span>
                      <h5 className="mb-0 fw-bold">{cat.name}</h5>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill">
                        {cat.count}
                      </span>
                      <span className="fs-4">&gt;</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center">No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
