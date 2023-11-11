// components/List.tsx
import React from 'react';

interface ListItem {
  key: string;
  value: string;
}

interface ListProps {
  title: string;
  items: ListItem[];
}

const List: React.FC<ListProps> = ({ title, items }) => {
  return (
    <div className="w-full mx-auto my-4 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={`mb-2 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}>
            <strong>{item.key}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
