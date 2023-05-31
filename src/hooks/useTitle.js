import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | ShoppingCart`;
  }, [title]);
  return null;
};
