import Container from '@/shared/components/container';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <Container className="flex items-center justify-center">
        {children}
      </Container>
    </main>
  );
}
