import './categories.css'
import { categories } from './categoryData';

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
