import React, {useState} from 'react';

const Categories = ({items, onClickItem}) => {
  const [activeItem, setActiveItem] = useState(null)
  const onSelectItem = (index) => {
    setActiveItem(index)
  }
  return (
    <div>
      <div className="categories">
        <ul>
          <li
            onClick={() =>  onSelectItem(null)}
            className={activeItem === null ? 'active' : ''}>Все
          </li>
          {items && items.map((name, index) => {
            return <li onClick={() => onSelectItem(index)}
                       className={activeItem === index ? 'active' : ''}
                       key={`${name}_${index}}`}>{name}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;