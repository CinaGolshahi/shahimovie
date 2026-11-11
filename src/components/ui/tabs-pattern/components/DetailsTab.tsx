interface IDetailsTabItems {
  label: string;
  value: string | undefined | null;
}

interface IDetailsTabProps {
  items: IDetailsTabItems[];
}
const DetailsTab = (props: IDetailsTabProps) => {
  const { items } = props;
  return (
    <div className="grid grid-cols-1 gap-y-1 divide-gray-800 *:flex *:items-center *:justify-between *:gap-2 *:text-end **:first:text-gray-50 **:last:text-gray-400 md:*:px-4 lg:grid-cols-2 xl:grid-cols-3 xl:divide-x">
      {items.map((item) => (
        <p key={item.label}>
          <span>{item.label}</span>
          <span>{item.value}</span>
        </p>
      ))}
    </div>
  );
};

export default DetailsTab;
