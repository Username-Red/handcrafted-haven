type UserPageProps = {
  params: { name: string };
};

export default async function Page({ params }: UserPageProps) {
  const { name } = params;
  return <div>Hello, {name}</div>;
}
