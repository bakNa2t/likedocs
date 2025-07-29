import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { ConvexClientProvider } from "@/components/providers/convex-client-provider";

import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Likedocs | Manage your space",
  description: "All what you need you find here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
