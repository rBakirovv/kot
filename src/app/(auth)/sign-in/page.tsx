import { SignInForm } from '@/features/auth-sign-in';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вход',
};

export default function SignInPage() {
  return <SignInForm />;
}
