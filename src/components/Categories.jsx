import React, { useState } from 'react'

function Categories() {
  const [indexActiveCategory, setIndexActiveCategory] = useState(0)

  const categories = [`Все`, `Мясные`, `Гриль`, `Острые`, `Без лука`]

  const onClickCategory = (index) => {
    setIndexActiveCategory(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={indexActiveCategory === i ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
