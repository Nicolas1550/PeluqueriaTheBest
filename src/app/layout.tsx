import { Providers } from "@/redux/provider";
import "./globals.css";
import SocketHandler from "./socketHandler";  // Asegúrate de que el nombre coincida con el archivo

export const metadata = {
  title: "Peluqueria The Best",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <SocketHandler />   {/* Mantén la funcionalidad de sockets */}
        </Providers>
      </body>
    </html>
  );
}
