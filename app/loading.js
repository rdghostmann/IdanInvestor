// 'use ';

import Image from 'next/image';
import loading from '../public/loading.gif';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm bg-clip-padding backdrop-filter">
      <div className="flex flex-col items-center">
        <Loader2 className='size-40 animate-spin text-gray-700' />
        {/* <Image src={loading} alt="Loading..." width={150} height={150} priority quality={100}/> */}
      </div>
    </div>
  );
}
