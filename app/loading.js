// 'use ';

import Image from 'next/image';
import loading from '../public/loading.gif';

export default function Loading() {
  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-smbg-clip-padding backdrop-filter backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <Image src={loading} alt="Loading..." width={100} height={100} />
      </div>
    </div>
  );
}
