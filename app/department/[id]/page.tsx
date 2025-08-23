import Department from "@/components/department";


// Ընտրված մասնագիտության էջ
type Params = {
  params: Promise<{ id: number }>;
};

export default async function MasnPage({ params }: Params) {

  const { id } = await params;

  return (
    <Department id={id}/>
  );
}
