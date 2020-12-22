import React from 'react'

const Categories = ({ filterItems, categories }) => {
  console.log(categories, '打印测试数组的显示')

  return (
    <div className='btn-container'>
      {categories.map((item, index) => {
        return (
          <button className='filter-btn' key={index} onClick={() => filterItems(item)}>
            {item}
          </button>
        )
      })}
    </div>
  )
}


export default Categories