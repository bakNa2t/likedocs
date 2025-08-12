"use client";

import { ReactNode } from "react";
import { ClerkProvider, useAuth, SignIn } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  ConvexReactClient,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";

import { FullScreenLoader } from "../fullscreen-loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>

        <Unauthenticated>
          <div className="flex min-h-screen items-center justify-center bg-[#c4c4c4]">
            <div className="flex flex-col items-center justify-center lg:w-1/2 gap-4">
              <h1 className="text-4xl font-bold text-zinc-600">
                Welcome to <span className="text-slate-800">Likedocs</span>
              </h1>

              <SignIn routing="hash" />
            </div>

            <img
              src="/_docs.png"
              alt="Frontpage image"
              className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
            />
          </div>
        </Unauthenticated>

        <AuthLoading>
          <FullScreenLoader label="Auth loading..." />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
