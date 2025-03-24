import { Breadcrumbs } from '@/components'

export default function QuestionsLayout({ children }: {
  children: React.ReactNode
}
) {
  return (<div className='py-8'>
    <header className='mb-8'>
      <Breadcrumbs crumbs={[{ title: 'Questões', href: '/questions' }]} />
    </header>
    {children}
  </div>)
}