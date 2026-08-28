'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

import { authClient } from '@/shared/lib/auth-client';
import { Button } from '@/shared/components/ui/button';

export function SignOutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSignOut() {
    setPending(true);
    await authClient.signOut();
    router.push('/sign-in');
    router.refresh();
  }

  return (
    <Button
      variant="outline"
      size="icon"
      title="Выйти"
      onClick={handleSignOut}
      disabled={pending}
    >
      <LogOut className="text-destructive" />
      <span className="sr-only">Выйти</span>
    </Button>
  );
}
