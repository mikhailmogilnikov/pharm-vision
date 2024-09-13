export const checkPasswordStrength = (password: string) => {
  let score = 0;

  if (!password) return '';
  // Check password length
  if (password.length > 7) score += 5;
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
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return 'weak';
    case 7:
    case 8:
    case 9:
      return 'medium';
    case 10:
      return 'strong';
  }

  return '';
};
