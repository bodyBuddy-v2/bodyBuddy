export const checkAllErrors = (errors: Record<string, unknown>, keys: string[]) => keys.some(key => errors[key]);

export const checkAllDirty = (dirtyFields: Record<string, unknown>, keys: string[]) =>
  keys.every(key => !!dirtyFields[key]);
