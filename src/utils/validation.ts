export const validateLink = (title: string, url: string): { isValid: boolean; error?: string } => {
  if (!title.trim()) {
    return { isValid: false, error: 'Title is required' };
  }

  if (!url.trim()) {
    return { isValid: false, error: 'URL is required' };
  }

  try {
    new URL(url);
  } catch {
    return { isValid: false, error: 'Please enter a valid URL' };
  }

  return { isValid: true };
};
