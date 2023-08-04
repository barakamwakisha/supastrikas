'use client';

import { createContext, useContext } from "react";
import { SupabaseClient } from "@supabase/supabase-js";

import { Database } from "./db.types";

export interface ISupabaseContext {
    client: SupabaseClient<Database>;
}

export const SupabaseContext = createContext<ISupabaseContext | null>(null);

export function useSupabaseClient() {
    const context = useContext(SupabaseContext);

    if (!context) {
        throw new Error(
            "useSupabaseClient has to be used within <SupabaseContext.Provider>"
        );
    }

    return context;
}