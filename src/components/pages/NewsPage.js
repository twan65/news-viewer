import React from 'react';
import Categories from '../Categories';
import NewsList from '../NewsList';

const NewsPage = ({ match }) => {
  // カテゴリを選択していない場合は、デフォルトをセット
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
