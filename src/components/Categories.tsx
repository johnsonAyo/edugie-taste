import React from "react";

const Categories = ({
  categories,
  onFilter,
}: {
  categories: any;
  onFilter: (category: string) => void;
}) => {
  return (
    <div className="btn-container">
      {categories.map(
        (category: string, index: React.Key | null | undefined) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => onFilter(category)}
            >
              {category}
            </button>
          );
        }
      )}
    </div>
  );
};

export default Categories;
