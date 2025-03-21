import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/logo.png';

type CardProps = {
  title: string
  description: string
  href: string
}

const Card = ({ title, description, href }: CardProps) => (
  <div className="bg-primary-lighten rounded px-5 py-3">
    <h3>{title}</h3>
    <p>{description}</p>
    <button>Acessar</button>
  </div>
)

export default function Page() {
  return (
    <div className='py-8'>
      <header className='mb-10'>
        <Image
          src={logo}
          alt="Brigada Militar do Rio Grande do Sul"
        />
        <h1>Sistema para criação de simulados</h1>
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