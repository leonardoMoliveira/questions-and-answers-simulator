import { prisma } from '@/lib/prisma';
import { Title, Table } from '@/components';

export default async function Page() {
  const exams = await prisma.exam
    .findMany()
    .then(data => data.map(exam => ({
      id: exam.id,
      title: exam.title,
      content: exam.difficultyLevel
    })));

  return (
    <div className="overflow-x-auto">
      <Title className='mb-5'>Cadastro de Simulados</Title>
      <Table headings={['Nome', 'Dificuldade']} data={exams} />
    </div>
  );
}