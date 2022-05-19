export const validateEmail = mail => {
  let result = false;
  const arrEmail = mail.split('');

  if (/\D/.test(arrEmail[0])) {
    if (arrEmail.includes('@') && arrEmail.includes('.')) {
      result = true;
    }
  }
  return result;
};

export const validatePassword = pass => {
  let result = false;
  if (
    /[A-Z]/.test(pass) &&
    /[a-z]/.test(pass) &&
    /[0-9]/.test(pass) &&
    pass.length >= 6
  ) {
    result = true;
  }

  return result;
};

export const validatePhone = phone => {
  let result = false;
  const res = [];
  const numSplit = phone.split('');
  for (let i = 1; i < numSplit.length; i += 1) {
    if (/\d/.test(numSplit[i])) {
      res.push('number');
    } else {
      res.push('notNum');
    }
  }

  if (phone.length <= 14 && phone.length >= 10) {
    if (
      phone[0] === '0' ||
      (phone[0] === '+' && phone[1] === '6' && phone[2] === '2')
    ) {
      if (!res.includes('notNum')) {
        result = true;
      }
    }
  }

  return result;
};
