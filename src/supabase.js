import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://udssbrwbkirbveurtdzq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkc3Nicndia2lyYnZldXJ0ZHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MDU1NzEsImV4cCI6MjAxNzE4MTU3MX0.ihRnnPiBVT1H3ueB2a0epIvh4Jsrfpo2gPiwUdT3Dps";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
