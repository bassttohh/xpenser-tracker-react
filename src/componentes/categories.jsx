import './categories.css'
import { Coffee, Home, Car, ShoppingBag, Film, HeartPulse, MoreHorizontal } from "lucide-react";

const categories = [
  { id: "food", label: "Comida", icon: Coffee, color: "#8A6D3B" },
  { id: "housing", label: "Vivienda", icon: Home, color: "#3B5A6B" },
  { id: "transport", label: "Transporte", icon: Car, color: "#5A6B3B" },
  { id: "shopping", label: "Compras", icon: ShoppingBag, color: "#7A3B5A" },
  { id: "fun", label: "Ocio", icon: Film, color: "#6B4B3B" },
  { id: "health", label: "Salud", icon: HeartPulse, color: "#3B6B5C" },
  { id: "other", label: "Otro", icon: MoreHorizontal, color: "#5B5B5B" },
];

 const CategoryItem = ({category}) => {

  return (
    <div className="category-item">

      <div className="category-info">
        <category.icon />
        <span>{category.label}</span>
      </div>

      <div className="category-bar ">
        <div className="category-process">  </div>
      </div>

      <span className="category-amount">
        s/312
      </span>

    </div>
  )
}

export const Categories = () => {
  return (
    <section className="categories">
      <h2> Por Categoria</h2>

      <div className="categories-list">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  )
 }
