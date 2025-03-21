import Image from 'next/image';

import logo from '@/public/images/logo.png';

export default function QuestionsLayout({ children }: {
  children: React.ReactNode
}
) {
  /* <Container className='py-8'>
        <header>
          <Image
            src={logo}
            alt="Brigada Militar do Rio Grande do Sul"
            width={300}
          />
          <Title order={1} c="primary.9" py={10}>Questões</Title>
        </header>
        {children}
      </Container> */

  return (
    <div>Questions</div>
  );
}