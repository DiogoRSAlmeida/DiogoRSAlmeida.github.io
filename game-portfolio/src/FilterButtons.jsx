// FilterButtons.jsx
export default function FilterButtons({ filter, setFilter }) {
  const categories = ["all", "commercial", "general", "ai", "personal"];

  return (
    <div className="filter-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          className={filter === cat ? "active" : ""}
          onClick={() => setFilter(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
