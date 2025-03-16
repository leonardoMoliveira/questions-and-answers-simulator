import Image from 'next/image';
import Link from 'next/link';
import { Container, Button, Text, Title } from '@mantine/core';

import logo from '@/public/images/logo.png';

type CardProps = {
  title: string
  description: string
  href: string
}

const Card = ({ title, description, href }: CardProps) => (
  <div className='bg-primary-lighten rounded px-5 py-3'>
    <Title order={3} size="xl" lh="xs">{title}</Title>
    <Text lh="xs">{description}</Text>
    <Button component={Link} href={href} bg='primary.9' mt={15}>Acessar</Button>
  </div>
)

export default function Page() {
  return (
    <Container className='py-8'>
      <header className='mb-10'>
        <Image
          src={logo}
          alt="Picture of the author"
        />
        <Title order={1} c="primary.9" py={10}>Sistema para criação de simulados</Title>
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
    </Container>

  );
}