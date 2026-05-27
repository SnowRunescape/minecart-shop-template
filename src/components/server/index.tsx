import { Link } from "react-router-dom";
import { ServerProps } from "./types";

const Server = (props: ServerProps) => {
  const { server } = props;

  return (
    <Link
      to={`/shop/${server.id}`}
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex h-full flex-col">
        <div className="grid aspect-[4/3] place-items-center bg-gray-50 p-8">
          <img
            src={server.archive.url}
            className="max-h-44 object-contain transition group-hover:scale-105"
          />
        </div>

        <div className="flex min-h-20 items-center justify-center px-4 text-center text-lg font-bold text-gray-950">
          {server.server_name}
        </div>
      </div>
    </Link>
  );
};

export default Server;
