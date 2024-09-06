import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

import { Flex } from '@/src/shared/ui/primitives/flex';
import { Text } from '@/src/shared/ui/primitives/text';
import { MotionLayout } from '@/src/shared/ui/primitives/motion-layout';

type Props = {
  title: string;
  description: string;
};

export const SuccessBlock = ({ title, description }: Props) => {
  return (
    <Flex center col className='h-[calc(100dvh-96px-32px)] justify-center relative'>
      <MotionLayout
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        className='mt-48'
        initial={{ y: 60, opacity: 0, filter: 'blur(24px)' }}
        layout={false}
        transition={{ delay: 0.4, type: 'spring', stiffness: 400, damping: 54 }}
      >
        <CheckCircle className='text-success' size={96} />
      </MotionLayout>

      <MotionLayout
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        initial={{ y: 60, opacity: 0, filter: 'blur(24px)' }}
        layout={false}
        transition={{ delay: 0.5, type: 'spring', stiffness: 400, damping: 54 }}
      >
        <Text className='text-success' size={20} tag='h2' weight={600}>
          {title}
        </Text>
      </MotionLayout>

      <MotionLayout
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        className='mb-32'
        initial={{ y: 60, opacity: 0, filter: 'blur(24px)' }}
        layout={false}
        transition={{ delay: 0.6, type: 'spring', stiffness: 400, damping: 54 }}
      >
        <Text className='w-80 text-center' opacity={0.5} size={16} tag='h2' weight={600}>
          {description}
        </Text>
      </MotionLayout>

      <MotionLayout
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        className='flex flex-col gap-4 items-center'
        initial={{ y: 60, opacity: 0, filter: 'blur(24px)' }}
        layout={false}
        transition={{ delay: 0.7, type: 'spring', stiffness: 400, damping: 54 }}
      >
        <Button as={Link} className='font-medium shadow-base bg-opacity-50' href='/' size='lg'>
          Вернуться на главную
        </Button>
      </MotionLayout>

      <MotionLayout
        animate={{ opacity: 0.5 }}
        className='w-72 h-72 bg-[radial-gradient(circle,rgba(0,255,23,0.2)_0%,rgba(49,131,148,0)_70%)] absolute rounded-full -z-10'
        initial={{ opacity: 0 }}
        layout={false}
        transition={{ delay: 0.7, type: 'spring', stiffness: 400, damping: 54 }}
      />
    </Flex>
  );
};
