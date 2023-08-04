'use client';

import { useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { Database, SupabaseProvider } from '@supastrikas/data';

export default function AppProviders({ children }: { children: React.ReactNode}) {
    const supabaseClientRef = useRef(createClientComponentClient<Database>());

    return (
        <SupabaseProvider client={supabaseClientRef.current}>
            {children}
        </SupabaseProvider>
    );
}