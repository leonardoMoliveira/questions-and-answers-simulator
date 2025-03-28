import Image from 'next/image';
import Link from 'next/link';

import { Title, Button } from '@/components';


import logo from '@/public/images/logo.png';
import { Url } from 'url';

type CardProps = {
  title: string
  description: string
  href: string | Url
}

const Card = ({ title, description, href }: CardProps) => (
  <div className="flex flex-col items-start bg-primary-lighten rounded px-5 py-3">
    <h3 className='text-xl font-bold'>{title}</h3>
    <p>{description}</p>
    <Button as={Link} href={href} className="mt-5">
      Acessar
    </Button>
  </div>
)

export default function Page() {
  return (
    <div>
      <header className='mb-10'>
        <Image
          src={logo}
          alt="Brigada Militar do Rio Grande do Sul"
        />
        <Title>Sistema para criação de simulados</Title>
      </header>

      <nav>
        <ul className='grid grid-cols-2 gap-4'>
          <li>
            <Card
              title='Simulados'
              description='Crie, edite ou responda à simulados.'
              href='/exams'
            />
          </li>
          <li>
            <Card
              title='Questões'
              description='Cadastre ou edite questões para os simulados.'
              href='/questions'
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}