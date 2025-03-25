import { prisma } from '@/lib/prisma';
import { Title, Table } from '@/components';


export default async function Page() {
  const questions = await prisma.question
    .findMany()
    .then(data => data.map(question => ({
      id: question.id,
      title: question.title,
      content: question.content
    })));

  return (
    <div className="overflow-x-auto">
      <Title className='mb-5'>Cadastro de Questões</Title>
      <Table headings={['Enunciado', 'Conteúdo']} data={questions} />
    </div>
  );
}