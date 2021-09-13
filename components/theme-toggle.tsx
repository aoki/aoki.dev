import dynamic from "next/dynamic";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "use-dark-mode";

const ThemeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <DarkModeSwitch
        checked={darkMode.value}
        onChange={darkMode.value ? darkMode.disable : darkMode.enable}
        moonColor="var(--white-color)"
        sunColor="var(--black-color)"
      />
      <style jsx>{`
        div {
          padding: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
        }
      `}</style>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ThemeToggle), { ssr: false });
