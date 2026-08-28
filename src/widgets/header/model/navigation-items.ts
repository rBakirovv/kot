import { MessageCircle, type LucideIcon } from 'lucide-react';

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { href: '/messages', label: 'Сообщения', icon: MessageCircle },
];
