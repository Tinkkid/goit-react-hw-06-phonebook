import React from 'react';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.array);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    contacts.length > 0 && (
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={changeFilter} />
      </FilterLabel>
    )
  );
};

export default Filter;
