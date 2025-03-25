type TitleProps = React.HTMLProps<HTMLHeadingElement> & {
  children: string;
}

export function Title({ children, className }: TitleProps) {
  return <h2 className={`text-3xl font-bold text-primary mt-3 ${className}`}>{children}</h2>
}
