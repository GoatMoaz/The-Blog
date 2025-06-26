import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Blog - Posts",
  description: "Explore a collection of modern blog posts.",
};
export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <> {children} </>;
}
