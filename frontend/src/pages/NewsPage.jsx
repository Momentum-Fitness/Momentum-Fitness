
// homelessness: https://www.coalitionforthehomeless.org/the-latest/news/
// environmental conservation: https://dec.ny.gov/


import React from 'react';
import myimage from "../assets/back.jpeg"
import image from "../assets/arms.jpeg"


export default function NewsPage() {
  const articles = [
    {
      title: 'Back Day ',
      description: 'For Back I did Horizontial and Vertical workouts. For Horizontial: Chest supported rows: 50 reps, 2 sets of 25. Seated cable rows: 50 reps 2 sets of 25. For Vertical: Pull down machine 50 reps 2 sets of 25 and Weighted pull up variations: 100 reps 4 sets of 20',
      imageUrl: myimage
    },
    {
      title: ' Arms ',
      description: ' For arms i started off with Biceps(Curls):Dumbbell curl 50 reps, 2 sets of 25 & Hammer curl 50 reps 2 sets of 25. Then I moved onto Triceps(Lateral): Diamond pushups 50 reps 2 sets of 25 & dips 50 reps 2 sets of 25. Long head: Over head plate extension 50 reps 2 sets of 25. Forearm: Rice Bucket training for 10 min  ',
      url: '',
      imageUrl: image

    },
    // {
    //   title: '',
    //   description: ''
    //   // imageUrl: 'https://',
    // },

  ];

  return (
    <div className="page-container">
      <h1 className="heading">Post Workout</h1>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="article-link"

              >              </a>
            </div>
            <img src={article.imageUrl} alt={article.title} className="article-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
