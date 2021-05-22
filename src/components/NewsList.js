import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // コンポーネントが画面に表示される時点にAPIを呼び出すために使用
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const query = category === 'all' ? '' : 'category=' + category + '&';
        console.debug(query);
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=jp&' +
            query +
            'apiKey=5890b3ef92f143e9aee1fb5093f99689',
        );

        // articlesをセット
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }

      setLoading(false);
    };

    fetchData();
  }, [category]); // 初期1回だけ

  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }

  // まだarticlesがセットされたのかを確認
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
