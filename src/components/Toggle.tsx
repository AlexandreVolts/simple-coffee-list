interface ToggleProps {
  value: boolean;
  onToggle: (value: boolean) => void;
}
export default function Toggle(props: ToggleProps) {
  const toggledStyle = "bg-gray";

  return (
    <ul className="flex text-white space-x-4">
      <li>
        <button
          className={`px-3.5 py-1.5 rounded-lg hover:bg-gray hover:bg-opacity-80 transition-all  ${!props.value ? toggledStyle : ""}`}
          onClick={() => props.onToggle(false)}
        >
          All products
        </button>
      </li>
      <li>
        <button
          className={`px-3.5 py-1.5 rounded-lg hover:bg-gray hover:bg-opacity-80 transition-all  ${props.value ? toggledStyle : ""}`}
          onClick={() => props.onToggle(true)}
        >
          Available Now
        </button>
      </li>
    </ul>
  );
}
