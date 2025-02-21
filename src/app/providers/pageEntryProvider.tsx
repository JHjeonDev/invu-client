'use client';

import { type ReactNode, createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';

import { type PageEntryStore, createPageEntryStore } from '@/app/stores/pageEntry';

export type PageEntryStoreApi = ReturnType<typeof createPageEntryStore>;

export const PageStoreContext = createContext<PageEntryStoreApi | undefined>(undefined);

export interface PageEntryProviderProps {
  children: ReactNode;
}

export const PageEntryStoreProvider = ({ children }: PageEntryProviderProps) => {
  const storeRef = useRef<PageEntryStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createPageEntryStore();
  }

  return (
    <PageStoreContext.Provider value={ storeRef.current }>
      { children }
    </PageStoreContext.Provider>
  );
};

export const usePageEntryStore = <T,>(
  selector: (store: PageEntryStore) => T
): T => {
  const pageEntryStoreContext = useContext(PageStoreContext);

  if (!pageEntryStoreContext) {
    throw new Error('usePageEntryStore must be used within a PageEntryProvider');
  }

  return useStore(pageEntryStoreContext, selector);
};
