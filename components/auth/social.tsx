'use client';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

interface SocialProps {}

const Social: FC<SocialProps> = ({}) => {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button size='lg' className='w-full' variant='outline' onClick={() => {}}>
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button size='lg' className='w-full' variant='outline' onClick={() => {}}>
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};

export default Social;
