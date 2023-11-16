import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;