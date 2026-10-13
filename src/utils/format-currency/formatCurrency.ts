const formatCurrency = (amount: number | undefined | null): string => {
  if (!amount) return "N/A";

  return `$${amount.toLocaleString("en-US")}`;
};
export default formatCurrency;
