import { useContext, useEffect } from 'react';
import { StoreContext } from '../../contexts/providers/Store';

const useDocumentTitle = (title: string) => {
  const store = useContext(StoreContext);

  useEffect(() => {
    document.title = `${store?.name} | ${title}`;
  }, [title]);
};

export default useDocumentTitle;