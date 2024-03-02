export async function getVans() {
  const res = await fetch("/api/vans");
  const data = await res.json();
  console.log(data.vans);
  return data.vans;
}

console.log(getVans);
