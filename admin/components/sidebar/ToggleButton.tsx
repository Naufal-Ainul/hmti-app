type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default function ToggleButton({
  isOpen,
  setIsOpen,
}: Props) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="
      bg-gray-700
      hover:bg-gray-600
      px-2
      py-1
      rounded
      transition
      "
    >
      {isOpen ? "←" : "→"}
    </button>
  );
}