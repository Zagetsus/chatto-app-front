export const moneyToNumber = (item: string): number => {
  let money = item.replace(".", "");
  money = money.replace(",", ".");

  return parseFloat(money);
};

export const numberToMoney = (num: string | number): string => {
  if (num === "") {
    num = 0;
  }

  return parseFloat(num.toString())
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+,)/g, "$1.");
};

export const formatCurrency = (value: string): string => {
  const number = Number(value.replace(/\D/g, ""));
  let newValue = (number / 100).toFixed(2) + "";
  newValue = newValue.replace(".", ",");
  newValue = newValue.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  value = newValue.replace(/(\d)(\d{3}),/g, "$1.$2,");

  return value;
};
