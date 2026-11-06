interface IDetailsTabItems {
  label: string;
  value: string | undefined | null;
}

interface IDetailsTabProps {
  items: IDetailsTabItems[];
}
const DetailsTabs = (props: IDetailsTabProps) => {
  const { items } = props;
  return (
    <div className="grid grid-cols-1 gap-y-2 divide-gray-800 *:flex *:items-center *:justify-between *:gap-2 *:text-end **:first:text-gray-50 **:last:text-gray-400 md:grid-cols-2 md:*:px-4 xl:grid-cols-4 xl:divide-x [&>*:nth-child(4n)]:border-0">
      {items.map((item) => (
        <p className="">
          <span>{item.label}</span>
          <span>{item.value}</span>
        </p>
      ))}
    </div>
  );
};

export default DetailsTabs;
