import Chair from "@/components/chair";
import Department from "@/components/department";


// Ընտրված մասնագիտության էջ
type Params = {
  params: Promise<{ id: number }>;
};

export default async function ChairPage({ params }: Params) {

  const { id } = await params;

  return (
    <Chair id={id}/>
  );
}
