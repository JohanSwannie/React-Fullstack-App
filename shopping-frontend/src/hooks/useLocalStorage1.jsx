import { useState } from "react";

export function useLocalStorage1(currentUser) {
  const [user, setUser] = useState(() => {
    const jsonValue = JSON.parse(localStorage.getItem(currentUser));

    if (jsonValue != null) return jsonValue;
  });

  return [user, setUser];
}
