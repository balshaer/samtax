import { HiOutlineSun } from "react-icons/hi";
import { LuMoon } from "react-icons/lu";
import { useTheme } from "@/context/ThemeContext";


export default function Mode() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const IconComponent = theme === "light" ? LuMoon : HiOutlineSun;

  return (
    <div
      onClick={toggleMode}
      className="flex cursor-pointer items-center justify-center gap-1 rounded-full bg-[var(--button)] p-2 text-sm font-bold text-[var(--button-text)] max-md:border-none max-md:bg-transparent max-md:p-0 max-md:text-[var(--headline)]"
    >
      <IconComponent className="h-6 w-6 cursor-pointer" size={25} />
    </div>
  );
}
