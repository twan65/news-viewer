import React from 'react';
import styled from 'styled-components';

const categories = [
  {
    name: 'all',
  },
  {
    name: 'business',
  },
  {
    name: 'entertainment',
  },
  {
    name: 'health',
  },
  {
    name: 'science',
  },
  {
    name: 'sports',
  },
  {
    name: 'technology',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name}>{c.name}</Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
