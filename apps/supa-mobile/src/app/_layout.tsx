import { Slot } from 'expo-router';

import {  SupabaseProvider } from '@supastrikas/data';

import { supabaseClient } from '../lib/supabase';

export default function RootLayout() {
    return (
        <SupabaseProvider client={supabaseClient}>
            <Slot />
        </SupabaseProvider>
    )
}