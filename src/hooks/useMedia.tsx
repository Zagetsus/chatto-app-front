import React from 'react';
import { useState } from 'react';

const useMedia = (media: string): boolean | null => {
  const [match, setMatch] = useState<boolean | null>(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }

    changeMatch();

    window.addEventListener('resize', changeMatch);
    return ()=> {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
