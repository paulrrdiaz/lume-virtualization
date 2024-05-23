import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import ChakraProvider from "@/lib/chakra/Provider";

export const metadata: Metadata = {
  title: "Lume Virtualization",
  description: "Lume Front-End Engineer: Take Home Task",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <main>{children}</main>
        </ChakraProvider>
      </body>
    </html>
  );
}
