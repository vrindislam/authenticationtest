export const onlyLetters = () => {
  return (e: any) => /^[A-Za-zА-Яа-яёЁЇїІіЄєҐґ ]+$/.test(e.target.value + e.key) || e.preventDefault();
};
export const onlyNumbers = () => {
  return (e: any) => /^\+\d*$/.test(e.target.value + e.key) || e.preventDefault();
};
export const zip = () => {
  return (e: any) => /^\d*$/.test(e.target.value + e.key) || e.preventDefault();
};

export const collectionItemsForm = [
  {
    name: 'firstName',
    label: 'First Name',
    rules: [
      { required: true, message: 'Please enter your First Name!' },
      {
        min: 2,
        message: 'Must be min 2 characters',
      },
      { max: 24, message: 'Max 25 characters' },
    ],
    maxLength: 25,
    onKeyPress: onlyLetters(),
  },
  {
    name: 'lastName',
    label: 'Last Name',
    rules: [
      { required: true, message: 'Please enter your Last Name!' },
      {
        min: 2,
        message: 'Must be min 2 characters',
      },
      { max: 24, message: 'Max 25 characters' },
    ],
    maxLength: 25,
    onKeyPress: onlyLetters(),
  },
  {
    name: 'login',
    label: 'Login',
    rules: [
      { required: true, message: 'Please enter your Login' },
      {
        min: 3,
        message: 'Must be min 2 characters',
      },
      { max: 10, message: 'Max 10 characters' },
    ],
    maxLength: 10,
  },
  {
    name: 'email',
    label: 'E-mail',
    rules: [
      { required: true, message: 'Please enter your E-mail!' },
      {
        type: 'email',
        messageType: 'The entered e-mail is not valid!',
      },
    ],
    maxLength: 35,
  },
  {
    name: 'password',
    label: 'Password',
    rules: [
      { required: true, message: 'Please enter your password!' },
      {
        min: 7,
        message: 'Must be min 7 characters',
      },
      { max: 24, message: 'Max 25 characters' },
    ],
    maxLength: 25,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    rules: [
      { required: true, message: 'Please enter your phone number "+38"!' },
      {
        min: 13,
        max: 13,
        message: 'The phone number must contain 13 characters',
      },
    ],
    maxLength: 13,
    onKeyPress: onlyNumbers(),
  },
];
