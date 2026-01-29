import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function TailwindLink({ href, children }: Props) {
  return (
    <Link href={href} className="text-[#1447e6] underline">
      {children}
    </Link>
  );
}
