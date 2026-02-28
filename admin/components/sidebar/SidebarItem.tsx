import Link from "next/link";

type Props = {
  href: string;
  label: string;
  icon: string;
  isOpen: boolean;
};

export default function SidebarItem({
  href,
  label,
  icon,
  isOpen,
}: Props) {
  return (
    <Link
      href={href}
      className="
      flex items-center
      gap-3
      px-4
      py-3
      hover:bg-gray-700
      transition
      "
    >
      <span className="text-xl">
        {icon}
      </span>

      {isOpen && (
        <span className="text-sm">
          {label}
        </span>
      )}
    </Link>
  );
}