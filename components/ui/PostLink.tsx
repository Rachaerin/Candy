import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function PostLink({ href, children }: Props) {
  return (
    <Link href={href} className="text-[#fe8d4c] hover:underline">
      {children}
    </Link>
  );
}
