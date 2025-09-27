import React from "react";

const categories = [
  { name: "Work", count: 8 },
  { name: "Personal", count: 5 },
  { name: "Ideas", count: 12 },
  { name: "Important", count: 3 },
  { name: "Others", count: 7 },
];

const Categories = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-4xl font-salsa">📂 Categories</h2>
      <h3  className="text-center mb-4 text-4xl font-salsa">Browse your notes categories here </h3>
      <div className="row justify-content-center g-3">
        {categories.map((cat, index) => (
          <div key={index} className="col-md-4 col-sm-6">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
