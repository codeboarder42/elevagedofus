import { TitleProps } from "../../lib/atoms";

export default function Title({ children, className }: TitleProps) {
  const fullClassName = `${className} font-bold`;
  return <h2 className={fullClassName}>{children}</h2>;
}
