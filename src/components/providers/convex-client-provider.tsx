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
import Image from "next/image";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>

        <Unauthenticated>
          <div className="flex min-h-screen items-center justify-center bg-[#c1d3db]">
            <div className="flex flex-col items-center justify-center lg:w-1/2 gap-4">
              <h1 className="flex gap-2 text-4xl font-bold text-slate-800">
                <Image src="/logo.svg" alt="logo" width={44} height={44} />
                Likedocs
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
