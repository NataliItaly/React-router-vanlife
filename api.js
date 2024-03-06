export async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

/*
This code is written in JavaScript. It is a function called getVans that does some things with data.
First, it fetches data from a specific location ("/api/vans"). It waits for the data to be fetched before doing anything else. If there is an error while fetching the data, it throws an error and stops.
If the data is successfully fetched, it converts the data into a format that can be used by the code. In this case, the data is expected to have a property called "vans". The code logs this to the console, but it is currently commented out with // so it doesn't actually show anything.
Finally, it returns the vans data so that other parts of the code can use it.
*/

console.log(getVans());
