import { useEffect } from 'react';
import { useStore } from '../../contexts/providers/Store';

const useDocumentTitle = (title: string) => {
  const store = useStore();

  useEffect(() => {
    document.title = `${store?.name} | ${title}`;
  }, [title]);
};

export default useDocumentTitle;