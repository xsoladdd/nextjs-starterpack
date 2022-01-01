import React from "react";
import { Switch as HeadlessSwitch } from "@headlessui/react";

interface SwitchProps {
  status: boolean;
  onClick: () => void;
}

const Switch: React.FC<SwitchProps> = ({ status, onClick }) => {
  // const [enabled, setEnabled] = useState(false);
  return (
    <>
      <HeadlessSwitch
        checked={status}
        onChange={onClick}
        className={`${
          status ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            status ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </HeadlessSwitch>
    </>
  );
};
export default Switch;
