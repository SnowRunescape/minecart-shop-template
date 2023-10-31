import { ServerProps } from './types';
import { Link } from 'react-router-dom';

const Server = (props: ServerProps) => {
  const { server } = props;

  return (
    <Link to={`/shop/${server.id}`} className="relative bg-gray-100 rounded">
      <div>
        <div className="text-center mx-auto mt-5 width-[60%]" style={{
          maxWidth: '60%',
          height: 300,
          maxHeight: '189.75px',
        }}>
          <img
            src={server.archive_url}
            className="relative max-h-full inline top-2/4 translate-y-[-50%]"
          />
        </div>

        <div className="flex items-center justify-center text-xl text-black" style={{
          height: 64
        }}>
          {server.server_name}
        </div>
      </div>
    </Link>
  );
}

export default Server;