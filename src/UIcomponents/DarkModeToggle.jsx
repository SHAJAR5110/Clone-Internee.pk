
import { LuSunMoon } from "react-icons/lu";

const DarkModeToggle = () => {
   const lightMode = () => {
    document.querySelector("body").setAttribute("data-theme","light");
   }
   const darkMode = () => {
    document.querySelector("body").setAttribute("data-theme","dark");
   }
    const toggleTheme = (e) => {
        if(e.target.checked) {
            darkMode();
        }
        else {
            lightMode();
        }
    }

    return (
        <div onChange={toggleTheme}
            className="rounded-full border bg-[#f3f0f0] shadow-lg w-12 h-12 flex items-center justify-center hover:bg-[#E5E7EB] cursor-pointer">
            <LuSunMoon className="text-3xl" />
        </div>
    );
};

export default DarkModeToggle;
