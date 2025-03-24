import Image from 'next/image';
import Link from 'next/link';
import { Container } from "@chakra-ui/react"
import { Button, HStack } from "@chakra-ui/react"


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
  const foo = "bar";

  return (
    < Container py={30}>
      <header className='mb-10'>
        <Image
          src={logo}
          alt="Brigada Militar do Rio Grande do Sul"
        />
        <h1>Sistema para criação de simulados</h1>
      </header>


      <HStack>
        <Button colorPalette="primary">Click me</Button>
        <Button colorPalette="secondary">Click me</Button>
      </HStack>

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
    </Container>
  );
}