// VALIDATION

// SORT
export const sortStringItems = (data, field) =>{
    const sortedData = [...data]
    sortedData.sort((a, b) =>
    a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1
  );
return sortedData;
}

export const sortNumberItems = (data, field) =>{
const sortedData = [...data]
    data.sort((a, b) => a[field] - b[field]);
    return sortedData;
}


