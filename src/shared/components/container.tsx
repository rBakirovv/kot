import { cn } from '@/shared/lib/utils';

export default function Container({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-[1280px]', className)}
      {...props}
    />
  );
}
