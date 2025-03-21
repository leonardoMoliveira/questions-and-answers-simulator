import { use } from "react"

type ExamPageProps = {
  params: Promise<{ examId: number }>
}

export default function ExamPage({ params }: ExamPageProps) {
  const { examId } = use(params);

  return <h1>Exam id: {examId}</h1>
}