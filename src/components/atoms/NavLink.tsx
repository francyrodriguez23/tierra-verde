"use client";

import { usePathname, useRouter } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: string;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const isAnchor = href.startsWith("#");

  const handleClick = (e: React.MouseEvent) => {
    if (isAnchor) {
      e.preventDefault();
      const id = href.replace("#", "");

      if (pathname === "/") {
        // On landing page → smooth scroll
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // On another page → navigate to landing then scroll
        router.push(`/#${id}`);
      }
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-[15px] font-medium text-text-dark-secondary hover:text-primary-dark transition-colors py-2"
    >
      {children}
    </a>
  );
}

