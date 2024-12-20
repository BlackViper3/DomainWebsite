const setThemeOnPageLoad = () =>{
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");
};