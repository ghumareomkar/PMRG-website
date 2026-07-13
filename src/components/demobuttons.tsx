'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DemoButton() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    router.push('/contact');
  };

  return (
    <Button onClick={handleClick}>
      Request a Demo
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
}