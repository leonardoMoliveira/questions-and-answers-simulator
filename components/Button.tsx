import { Url } from 'url';

type ButtonProps = {
  as?: React.ElementType;
  href?: string | Url
  className?: string;
  children: string;
  onClick?: () => void
  color?: 'primary' | 'secondary' | 'error'
}

export function Button({ as, children, className = '', color = 'primary', ...props }: ButtonProps) {
  const Pressable = as ?? 'button';

  return (
    <Pressable
      className={`bg-${color} py-2.5 p-3 text-white font-bold leading-5 rounded cursor-pointer hover:scale-95 ${className}`}
      {...props}
    >
      {children}
    </Pressable>
  )
}