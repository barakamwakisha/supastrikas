'use client';

import { useRef } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Database } from "./db.types";
import { SupabaseContext } from "./supabase.context";

export interface SupabaseProviderProps {
    children: React.ReactNode;
    client: SupabaseClient<Database>;
}

export function SupabaseProvider(props: SupabaseProviderProps) {
    const { children, client } = props;

    const queryClientRef = useRef<QueryClient>(new QueryClient());

    return (
        <SupabaseContext.Provider value={{ client }}>
            <QueryClientProvider client={queryClientRef.current}>
                {children}
            </QueryClientProvider>
        </SupabaseContext.Provider>
    )
}