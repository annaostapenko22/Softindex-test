// VALIDATION

export const isNumberValidator = value => !isNaN(parseInt(value));
export const isEmptyValidator = value => value.trim() === "";
export const isEmailValidator = value => {
  const emailRegex = /.+@.+\..+/;
  return emailRegex.test(value);
};
export const isShortValidator = (value, min) => value.length < min;

// SORT

export const sortItemsAscending = (data, field, isNumber) => {
  const dataToSort = [...data];
  if (isNumber) {
    dataToSort.sort((a, b) => a[field] - b[field]);
  } else {
    dataToSort.sort((a, b) =>
      a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1
    );
  }
  return dataToSort;
};

export const sortItemsDescending = (data, field, isNumber) => {
  const dataToSort = [...data];
  if (isNumber) {
    dataToSort.sort((a, b) => b[field] - a[field]);
  } else {
    dataToSort.sort((a, b) =>
      a[field].toLowerCase() > b[field].toLowerCase() ? -1 : 1
    );
  }
  return dataToSort;
};
