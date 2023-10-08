import { NotFoundProps } from './types';

const NotFound = (props: NotFoundProps) => {
  const { title, description } = props;

  return (
    <div className="relative bg-gray-100">
      <h2>{title}</h2>

      <span>{description}</span>
    </div>
  );
}

export default NotFound;