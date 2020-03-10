// VALIDATION

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
