// VALIDATION

export const isNumberValidator = value => !isNaN(parseInt(value));
export const isEmptyValidator = value => value.trim() === "";
export const isShortValidator = (value, min) => value.length < min;
export const isMaleValidator = value => (value === "male" ? true : false);

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

export const sortBooleanItems = (data, field, bool) => {
  const dataToSort = [...data];
  if (bool === true) {
    return dataToSort.sort((a, b) => a[field] - b[field]);
  }
  return dataToSort.sort((a, b) => b[field] - a[field]);
};
