import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://poxkiqghaetsdeketmcl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBveGtpcWdoYWV0c2Rla2V0bWNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNTI3NzcsImV4cCI6MjAxMzYyODc3N30.uJcE2hH3MliyEOeEw8gAgb9rTjIPfReKi2PySETvjtg'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;