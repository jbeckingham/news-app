import React from 'react';
import { format, parse } from 'date-fns'

const prettifyDate = (date) => format(parse(date), "Do MMM YYYY HH:mm");

const News = ({news}) =>
    <div>
        {news.map(item => (
            <div>
                <h1>{item.title}</h1>
                <p>{prettifyDate(item.publishedAt)}</p>
                <p>{item.description}</p>
                <a href={item.url}>Full Article</a>
            </div>
        ))}
    </div>

export default News;
