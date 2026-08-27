import Link from 'next/link';
import Container from '@/shared/components/container';
import { Cat } from 'lucide-react';
import { Card } from '@/shared/components/ui/card';
import { ModeToggle } from '@/shared/components/mode-toggle';

export function Header() {
  return (
    <header className="bg-background/80 sticky top-2 z-40 rounded-4xl backdrop-blur">
      <Container>
        <Card className="flex flex-row items-center gap-6 p-4">
          <Link
            href="/"
            className="text-foreground flex items-center gap-2 text-lg font-medium"
          >
            <Cat className="size-6" strokeWidth={2} />
            Kot
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <ModeToggle />
          </div>
        </Card>
      </Container>
    </header>
  );
}
