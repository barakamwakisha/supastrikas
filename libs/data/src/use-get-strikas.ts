'use client';

import { useQuery } from '@tanstack/react-query';

import { getStrikasQuery } from './get-strikas.query';
import { useSupabaseClient } from './supabase.context';

export function useGetStrikas() {
    const { client } = useSupabaseClient();

    return useQuery(['strikas'], () => getStrikasQuery(client));
}