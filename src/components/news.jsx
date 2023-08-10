import React from 'react';
import style from '../style/News.module.scss';
import Btn from './btn';

const newsData = [
  {
    title: 'Lorem ipsum',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nesciunt rem commodi neque! Ullam, odit autem eaque ab pariatur est, saepe quaerat ea officiis vitae natus inventore magnam quisquam earum a iusto ipsum provident repellat quis ut! Similique ut et tempore nesciunt accusantium omnis, optio temporibus, nemo magni, officiis possimus? Laborum esse asperiores omnis quam fuga atque modi blanditiis, sapiente dolorem, in exercitationem, cum velit facilis? Sed voluptas et dolorem corpori',
  },
  {
    title: 'Lorem ipsum',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nesciunt rem commodi neque! Ullam, odit autem eaque ab pariatur est, saepe quaerat ea officiis vitae natus inventore magnam quisquam earum a iusto ipsum provident repellat quis ut! Similique ut et tempore nesciunt accusantium omnis, optio temporibus, nemo magni, officiis possimus? Laborum esse asperiores omnis quam fuga atque modi blanditiis, sapiente dolorem, in exercitationem, cum velit facilis? Sed voluptas et dolorem corpori',
  },
  {
    title: 'Lorem ipsum',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nesciunt rem commodi neque! Ullam, odit autem eaque ab pariatur est, saepe quaerat ea officiis vitae natus inventore magnam quisquam earum a iusto ipsum provident repellat quis ut! Similique ut et tempore nesciunt accusantium omnis, optio temporibus, nemo magni, officiis possimus? Laborum esse asperiores omnis quam fuga atque modi blanditiis, sapiente dolorem, in exercitationem, cum velit facilis? Sed voluptas et dolorem corpori',
  },
];

const News = () => {
  return (
    <section className={style.news}>
      {newsData.map((news, index) => (
        <div key={index} className={style.newsCard}>
          <h2>{news.title}</h2>
          <p>{news.content}</p>
          <div className={style.btncontainer}>
            <Btn name={'Læs mere'} className={style.btn} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default News;
