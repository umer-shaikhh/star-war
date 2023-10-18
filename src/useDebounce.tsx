import { useState } from "react"

export const useDebounce = () => {
  const [timeout, setTimeout] = useState();

  function debounce (func) {
    clearTimeout(timeout);
    setTimeout(() => func(), 100)
  }

  return debounce;
}
