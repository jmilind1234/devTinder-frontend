import type { LucideProps } from "lucide-react";

function InputIcon({
  icon,
  size,
}: {
  icon: React.ComponentType<LucideProps>;
  size: number;
}) {
  const Icon = icon;
  return <Icon size={size} />;
}

export default InputIcon;
