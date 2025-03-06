import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  const [storedValue, setStoredValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [key, storedValue])

  return [storedValue, setStoredValue]
};

export default useLocalStorage;
