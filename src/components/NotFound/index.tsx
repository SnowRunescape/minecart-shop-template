import { NotFoundProps } from "./types";

const NotFound = (props: NotFoundProps) => {
  const { title, description } = props;

  return (
    <div className="soft-panel grid min-h-56 place-items-center p-8 text-center">
      <div className="max-w-lg">
        <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gray-100 text-xl font-bold text-gray-400">
          !
        </div>
        <h2 className="text-xl font-bold text-gray-950">{title}</h2>

        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default NotFound;
