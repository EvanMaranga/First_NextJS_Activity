export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div className="text-4xl font-bold">Student ID: {id}</div>;
}
