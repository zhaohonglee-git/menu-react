import React, { useState } from 'react'
import items from './data'
import Categories from './components/Categories.jsx'
import Menu from './components/Menu'

const allCategories = [...new Set(items.map(item => item.category)), 'all']
console.log(allCategories, '所有JSON对象中的categories,需要用new Set方法进行去重,还需要把all包含进去')

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  // 过滤菜单
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>美食美刻--菜单</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} ></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
