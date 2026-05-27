import Img from "@Minecart/components/Img";
import RichText from "@Minecart/components/RichText";
import { getHelmByUsername } from "@Minecart/helpers/minecraft";
import { t } from "i18next";
import { NewsProps } from "./types";

const News = (props: NewsProps) => {
  const { user, title, news, archive } = props.news;

  return (
    <article className="soft-panel w-full overflow-hidden">
      <div className="flex items-center gap-3 p-5">
        <Img className="h-11 w-11 rounded-lg" src={getHelmByUsername(user.username)} />

        <div className="min-w-0">
          <div className="text-sm text-gray-500">
            {t("phrases.postedBy")}{" "}
            <b className="text-gray-950">{user.username}</b>
          </div>
          <small className="font-semibold text-gray-400">12-08-2023 20:56:55</small>
        </div>
      </div>

      <div
        className="flex min-h-48 items-end bg-cover bg-center p-6 text-2xl font-bold text-white sm:text-3xl"
        style={{
          backgroundColor: "var(--color1)",
          backgroundImage: `linear-gradient(180deg, rgba(17, 24, 39, 0.1), rgba(17, 24, 39, 0.82)), url('${archive?.url}')`,
          textShadow: "0 2px 12px rgba(0,0,0,.35)",
        }}
      >
        {title}
      </div>

      <RichText className="p-5 text-gray-700" html={news} />
    </article>
  );
};

export default News;
