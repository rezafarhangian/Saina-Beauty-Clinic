import React, { useEffect, useState } from "react";
import allArticles from "../Data/ArticlesData";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

export default function ArticleBody() {
  let { articleId } = useParams();
  const [selectedArticle, setSelectedArticle] = useState([]);

  useEffect(() => {
    const filteredArticle = allArticles.filter((arr) => arr.id == articleId);
    setSelectedArticle(filteredArticle);
  }, [useParams]);

  return (
    <div className="container mt-10">
      {selectedArticle.map((art) => (
        <div key={art.id} className="mb-16 "  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(art.main) }}></div>
      ))}
    </div>
  );
}
