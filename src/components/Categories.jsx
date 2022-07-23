import React, {useState} from 'react'



function Categories() {

	const [indexActiveCategory, setIndexActiveCategory] = useState(0);

	const categories = [`Все`, `Мясные`, `Гриль`, `Острые`, `Без лука`]

	const onClickCategory = (index) => {
		setIndexActiveCategory(index)
	}

	return (
		<div className="categories">
			<ul>
				{
					categories.map((category, index) => (
						<li onClick={() => onClickCategory(index)}  className={indexActiveCategory === index? 'active': ''}>{category}</li>
					))
				}
				
			</ul>
		</div>
	)
}

export default Categories;