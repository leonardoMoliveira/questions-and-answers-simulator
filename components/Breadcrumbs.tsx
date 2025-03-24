import Link from 'next/link';

type Crumb = {
  title: string;
  href: string
}

type BreadcrumbsProps = {
  crumbs: Crumb[]
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav>
      {crumbs?.length && (
        <ul className='flex gap-2.5'>
          {[{ title: 'Página Inicial', href: '/' }, ...crumbs].map((crumb, index) => (
            <li key={index}>
              <Link className='hover:font-bold' href={crumb.href}>{crumb.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}