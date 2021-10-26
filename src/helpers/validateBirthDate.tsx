export const validateBirthDate = (
  birthDate: string
): {valid: boolean, message: string} => {
  if(birthDate.length > 0 && birthDate.length < 10) {
    return { valid: false, message: 'Formato inválido' };
  }

  const splitUserBirthDate = birthDate.split('/');

  const year = Number(splitUserBirthDate[2]);
  const month = (Number(splitUserBirthDate[1]) - 1);
  const day =  Number(splitUserBirthDate[0]);

  if(day > 31 || month > 11) {
    return { valid: false, message: 'Data inválida' };   
  }

  const userBirthDate = new Date(year, month, day);
  
  const todayDate = new Date();
  
  if(userBirthDate > todayDate) {
    return { valid: false, message: 'Data inválida' };
  }

  return { valid: true, message: 'Data válida' };
}