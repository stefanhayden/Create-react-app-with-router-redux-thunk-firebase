import React from 'react'
import FilterLink from '../containers/FilterLink';
import {
  SHOW_ALL_TODOS,
  SHOW_ACTIVE_TODOS,
  SHOW_COMPLETED_TODOS,
} from 'actionTypes';

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={SHOW_ALL_TODOS}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_ACTIVE_TODOS}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_COMPLETED_TODOS}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
