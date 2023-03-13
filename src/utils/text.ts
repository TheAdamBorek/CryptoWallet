export const isEmptyText = <T extends string>(
  text: T | undefined
): text is T => {
  return text == undefined || text.trim() === "";
};
