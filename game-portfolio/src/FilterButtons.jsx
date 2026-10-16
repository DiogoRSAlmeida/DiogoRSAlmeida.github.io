// FilterButtons.jsx
import { useLang } from "./LanguageContext";
import { translations } from "./translations";

export default function FilterButtons({ filter, setFilter, available }) {
  const { lang } = useLang();
  const labels = translations[lang].filters;
  const categories = ["all", "commercial", "general", "ai", "personal"].filter(
    (cat) => cat === "all" || available.includes(cat)
  );

  return (
    <div className="filter-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          className={filter === cat ? "active" : ""}
          onClick={() => setFilter(cat)}
        >
          {labels[cat]}
        </button>
      ))}
    </div>
  );
}
