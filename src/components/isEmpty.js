export const isEmpty = (object) => {
  return (
    !object ||
    object === undefined ||
    object === null ||
    (typeof object === "string" && object.trim().length === 0) ||
    (object?.length !== undefined && object.length === 0) ||
    (typeof object === "object" && Object.keys(object).length === 0)
  );
};
