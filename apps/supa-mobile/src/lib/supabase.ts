import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js';
import { SupabaseAuthClientOptions } from '@supabase/supabase-js/src/lib/types';

import { Database } from '@supastrikas/data';

// To store the supabase session in the Expo app, we use Expo's SecureStore.
const ExpoSecureStoreAdapter = {
    getItem: (key: string) => {
        return SecureStore.getItemAsync(key)
    },
    setItem: (key: string, value: string) => {
        SecureStore.setItemAsync(key, value)
    },
    removeItem: (key: string) => {
        SecureStore.deleteItemAsync(key)
    },
}

export const supabaseClient = createClient<Database>(
    process.env.EXPO_PUBLIC_SUPABASE_URL as string,
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string,
    {
        auth: {
            storage: ExpoSecureStoreAdapter as SupabaseAuthClientOptions['storage'],
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: false,
        },
    }
);
