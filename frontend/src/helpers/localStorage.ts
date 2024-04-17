const addTokenToLocalStorage = (token: string): void => {
  localStorage.setItem("accessToken", JSON.stringify(token));
};

const deleteTokenFromLocalStorage = (): void => {
  localStorage.removeItem("accessToken");
};

const getTokenFromLocalStorage = (): string | null => {
  const result = localStorage.getItem("accessToken");
  const accessToken = result ? JSON.parse(result) : null;
  return accessToken;
};

export {
  addTokenToLocalStorage,
  deleteTokenFromLocalStorage,
  getTokenFromLocalStorage,
};
