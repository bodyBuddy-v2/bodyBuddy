"use server";

import { Provider } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import { createClient } from "@/shared/lib/supabase/server";

export const signIn = async (provider: Provider, redirectUrl: string): Promise<void> => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl,
    },
  });

  redirect(data.url as string);
};

export const signInGoogle = async () => signIn("google", process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_CALLBACK as string);
