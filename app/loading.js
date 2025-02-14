// 'use ';

import Image from 'next/image';
import loading from '../public/loading.gif';

export default function Loading() {
  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm bg-clip-padding backdrop-filter">
      <div className="flex flex-col items-center">
        <Image src={loading} alt="Loading..." width={150} height={150} />
      </div>
    </div>
  );
}
