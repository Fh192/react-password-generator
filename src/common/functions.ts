export const generatePassword = (params: {
  length: number;
  hasLowercase: boolean;
  hasUppercase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
}) => {
  const { length, hasLowercase, hasNumbers, hasSymbols, hasUppercase } = params;

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  const all = [
    hasUppercase && uppercase,
    hasLowercase && lowercase,
    hasNumbers && numbers,
    hasSymbols && symbols,
  ]
    .filter(el => typeof el !== 'boolean')
    .join('');

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.round(Math.random() * (all.length - 0) + 0);
    password += all.charAt(randomNumber);
  }

  return password;
};

export const getPasswordStrength = (password: string) => {
  //N: number of possible symbols
  //L: number of symbols in the password
  //H: measured in bits
  //H = Math.log2(N**L)

  let N = 0;
  const L = password.length;

  const variations: { [k: string]: number } = {
    digits: /[0-9]/.test(password) ? 10 : 0,
    lower: /[a-z]/.test(password) ? 26 : 0,
    upper: /[A-Z]/.test(password) ? 26 : 0,
    nonWords: /\W/.test(password) ? 33 : 0,
  };

  for (const check in variations) {
    N += variations[check];
  }

  const H = Math.log2(N ** L);

  return H >= 80 ? 100 : H >= 60 ? 75 : H >= 40 ? 50 : H >= 25 ? 25 : 0;
};

export const copyPassword = (password: string) => {
  navigator.clipboard.writeText(password);
};
