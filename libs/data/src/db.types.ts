export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      strikas: {
        Row: {
          created_at: string
          id: string
          name: string
          nationality: string | null
          position: string
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string
          nationality?: string | null
          position?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          nationality?: string | null
          position?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

