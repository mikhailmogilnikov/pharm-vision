export const checkPasswordStrength = (password: string) => {
  let score = 0;

  if (!password) return '';
  // Check password length
  if (password.length > 8) score += 1;
  // Contains lowercase
  if (/[a-z]/.test(password)) score += 1;
  // Contains uppercase
  if (/[A-Z]/.test(password)) score += 1;
  // Contains numbers
  if (/\d/.test(password)) score += 1;
  // Contains special characters
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  switch (score) {
    case 0:
    case 1:
    case 2:
      return 'weak';
    case 3:
    case 4:
      return 'medium';
    case 5:
      return 'strong';
  }

  return '';
};
