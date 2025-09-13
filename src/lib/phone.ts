export const normalizePhone = (s: string) => s.replace(/[\s-]/g, "");

/* define three formats for phone entry- +989xxxxxxxxx, 009xxxxxxxxx
09xxxxxxxxx */
export const isValidIranianPhone = (s: string) => {
  const v = normalizePhone(s);
  return /^(?:09\d{9}|\+989\d{9}|00989\d{9})$/.test(v);
};
