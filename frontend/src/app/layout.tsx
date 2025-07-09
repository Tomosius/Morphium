import type {Metadata} from "next";

import "@/app/globals.css";
import TopNav from "@/components/navigation/TopNav";


// Optional: Set default metadata (title, description, etc.)
export const metadata: Metadata = {
    title: "Morphium",
    description: "Next Generation ML modeling app",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <TopNav></TopNav>
        <main> {children}</main>
        </body>
        </html>
    );
}
