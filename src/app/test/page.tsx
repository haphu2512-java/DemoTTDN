async function getData() {
  const res = await fetch("http://localhost:3000/api/test");

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <p>Count: {data.count}</p>
      <p>Time: {data.time}</p>
      <p>Random: {data.random}</p>
    </div>
  );
}
