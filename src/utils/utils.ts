type UtilsType = {
  changeTheme: (theme: ThemeType) => void;
};

const utils: UtilsType = {
  changeTheme: (theme: ThemeType) => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.add(theme);
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark"
    );
  },
};

export default utils;
