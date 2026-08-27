import Container from '@/shared/components/container';
import { ModeToggle } from '@/shared/components/mode-toggle';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <Container className="flex items-center justify-center">
        <div className="fixed top-4 right-4">
          <ModeToggle />
        </div>
        {children}
      </Container>
    </main>
  );
}
