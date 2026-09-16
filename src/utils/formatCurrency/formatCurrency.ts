const formatCurrency = (amount: number | undefined | null): string => {
  if (!amount) return "Unknown";

  return `$${amount.toLocaleString("en-US")}`;
};
export default formatCurrency;
