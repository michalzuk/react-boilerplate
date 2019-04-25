export const success = (type, payload) => {
  return { type: type, payload: payload };
};

export const failure = (type, error) => {
  return { type: type, error: error };
};
