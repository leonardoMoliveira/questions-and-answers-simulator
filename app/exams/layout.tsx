import { Breadcrumbs } from '@/components'

export default function ExamsLayout({ children }: {
  children: React.ReactNode
}
) {
  return (<div className='py-8'>
    <header className='mb-8'>
      <Breadcrumbs crumbs={[{ title: 'Simulados', href: '/exams' }]} />
    </header>
    {children}
  </div>)
}