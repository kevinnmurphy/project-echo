import React, { useState } from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
  sortableHandle,
} from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <span>::</span>);
const SortableItem = SortableElement(({ value }) => (
  <li>
    <DragHandle />
    {value}
  </li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul style={{ listStyleType: 'none', display: 'contents' }}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const SortableComponent = ({ songs }) => {
  const initial = songs;
  const [items, setItems] = useState(initial);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return <SortableList items={items} onSortEnd={onSortEnd} useDragHandle />;
};

export default SortableComponent;
