import React from "react";

const Categories = ({
  categories,
  filterItems,
}: {
  categories: any;
  filterItems: any;
}) => {
  return (
    <div className="btn-container">
      {categories.map(
        (
          category:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined,
          index: React.Key | null | undefined
        ) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
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
