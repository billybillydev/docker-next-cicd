import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-y-8">
      <h1>Data List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {data.map((item: any) => {
          return (
            <li key={item.id} className="p-2 border rounded-md">
              <h2>{item.title}</h2>
              <p>User ID: {item.userId}</p>
              <p>ID: {item.id}</p>
              <p>Description: {item.body}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
