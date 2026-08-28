'use client';

import { Button } from '@/shared/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/shared/components/ui/drawer';
import { Menu } from 'lucide-react';
import { navItems } from '../../model/navigation-items';
import { NavigationItem } from './navigation-item';

export function Navigation() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={
          <Button variant="outline" size="icon" title="Меню">
            <Menu />
            <span className="sr-only">Открыть меню</span>
          </Button>
        }
      />
      <DrawerContent>
        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navItems.map((nav) => (
            <NavigationItem key={nav.href} item={nav} />
          ))}
        </nav>
        <DrawerFooter>
          <DrawerClose render={<Button>Закрыть</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
