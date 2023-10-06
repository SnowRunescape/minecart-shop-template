import React from 'react'
import { NewsProps } from './types';
import Card from './../Card'
import { getHelmByUsername } from '../../helpers/minecraft';
import Img from '../Img';

const News = (props: NewsProps) => {
  const { posted_by, title, news, archive_url } = props.news;

  return (
    <Card>
      <div className="flex gap-2 items-center pb-3">
        <Img className="rounded" src={getHelmByUsername(posted_by)} />

        <div>
          <div>Postado por <b>{posted_by}</b></div>
          <small><b>12-08-2023 20:56:55</b></small>
        </div>
      </div>

      <div className="p-5 bg-cover bg-center" style={{
        backgroundColor: 'red',
        minHeight: 140,
        backgroundImage: `url('${archive_url}')`,
      }}>
        {title}
      </div>

      <div dangerouslySetInnerHTML={{__html: news}} />
    </Card>
  );
}

export default News;