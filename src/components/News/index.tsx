import Img from '@Minecart/components/Img';
import RichText from '@Minecart/components/RichText';
import { getHelmByUsername } from '@Minecart/helpers/minecraft';
import { t } from 'i18next';
import { NewsProps } from './types';

const News = (props: NewsProps) => {
  const { user, title, news, archive } = props.news;

  return (
    <div className="w-full bg-white border rounded">
      <div className="flex gap-2 items-center p-3">
        <Img className="rounded" src={getHelmByUsername(user.username)} />

        <div>
          <div>{t("phrases.postedBy")} <b>{user.username}</b></div>
          <small><b>12-08-2023 20:56:55</b></small>
        </div>
      </div>

      <div className="p-5 bg-cover text-white text-2xl bg-center" style={{
        backgroundColor: 'var(--color1)',
        minHeight: 140,
        backgroundImage: `url('${archive?.url}')`,
        textShadow: '2px 2px 3px #000',
      }}>
        {title}
      </div>

      <RichText className="p-3" html={news} />
    </div>
  );
}

export default News;