import React from 'react'
import { NewsProps } from './types';
import Card from './../Card'
import { getHelmByUsername } from '../../helpers/minecraft';

const News = (props: NewsProps) => {
  const { posted_by, title, description } = props.news;

  return (
    <Card>
      <div className="flex gap-2 items-center pb-3">
        <img src={getHelmByUsername(posted_by)} alt="" />

        <div>
          <div>Postado por <b>{posted_by}</b></div>
          <small><b>12-08-2023 20:56:55</b></small>
        </div>
      </div>

      <div className="p-5" style={{
        backgroundColor: 'red',
        minHeight: 140,
      }}>
        {title}
      </div>

      <div>
        {description}
      </div>
    </Card>
  );
}

export default News;