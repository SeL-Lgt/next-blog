const utils = () => ({
  changeTheme: (theme: ThemeType) => {
    localStorage.setItem("theme", theme);
  },
});

export default utils();
