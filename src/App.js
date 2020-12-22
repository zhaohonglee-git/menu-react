import React, { useState } from 'react'
import items from './data'
import Categories from './components/Categories.jsx'
import Menu from './components/Menu'

function App() {
  const [menuItems, setMenuItems] = useState(items)

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>美食美刻菜单</h2>
          <div className='underline'></div>
        </div>
        <Categories></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>

  );
}

export default App;
