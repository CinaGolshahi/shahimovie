import type { IButtonProps } from "./button.type";

const Button = (props: IButtonProps) => {
  const {
    title,
    children,
    className,
    size = "btn-md",
    variant = "btn-primary",
  } = props;

  return (
    <button
      {...props}
      className={`${className} ${size} ${variant} flex cursor-pointer items-center gap-2 rounded-full outline-2 outline-offset-2 outline-transparent transition-all delay-75 duration-300 select-none justify-center`}
    >
      {title ?? children}
    </button>
  );
};

export default Button;
