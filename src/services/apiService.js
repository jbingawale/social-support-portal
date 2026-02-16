export const submitApplication = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 2000);
  });
};
