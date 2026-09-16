const getYearFromDate = (date: string | null | undefined) => {
  const year = date?.slice(0, 4);
  return year;
};

export default getYearFromDate;
