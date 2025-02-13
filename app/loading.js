// 'use ';

import Image from 'next/image';
import loading from '../public/loading.gif';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100">
      <Image src={loading} alt="Loading..." width={100} height={100} />
    </div>
  );
}
