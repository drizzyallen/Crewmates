import { createClient } from '@supabase/supabase-js'

const URL_KEY = import.meta.env.SUPABASE_URL
const API_KEY = import.meta.env.DRAGON_DATASET_KEY

export const supabase = createClient(URL_KEY, API_KEY)
