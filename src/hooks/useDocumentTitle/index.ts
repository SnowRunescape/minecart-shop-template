import { useStore } from '@Minecart/contexts/providers/Store';
import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  const store = useStore();

  useEffect(() => {
    document.title = `${store?.name} | ${title}`;
  }, [title]);
};

export default useDocumentTitle;