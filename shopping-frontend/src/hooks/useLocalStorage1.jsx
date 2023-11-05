import { useState } from "react";

export function useLocalStorage1(key) {
  const [user, setUser] = useState(() => {
    const jsonValue = JSON.parse(localStorage.getItem(key));

    if (jsonValue != null) return jsonValue;
  });

  return [user, setUser];
}
