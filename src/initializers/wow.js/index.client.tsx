'use client';

import { useEffect } from 'react';

const WowJs: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wow.js' as any).then((module) => {
        const WOW = module.default;
        const wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animate__animated',
          offset: 0,
          mobile: true,
        });
        wow.init();
      });
    }
  }, []);

  return null;
};

export default WowJs;
