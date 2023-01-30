const useDarkMode = () => {
  const isDarkMode = useState("darkMode", () => false);

  const toggleMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleMode,
  };
};

export default useDarkMode;
