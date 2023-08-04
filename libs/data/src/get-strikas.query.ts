import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "./db.types";

export async function getStrikasQuery(client: SupabaseClient<Database>) {
    const { data, error, status, statusText } = await client.from('strikas').select('*');

    if (error) {
        throw new Error(`Could not fetch strikas: ${error.message} ${status} ${statusText}`);
    }

    return data;
}