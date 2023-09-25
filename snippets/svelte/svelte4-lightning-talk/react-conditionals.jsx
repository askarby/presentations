function Conditionals() {
  let count = 0;
  return (
    <div>
      <h1>{count === 1 ? `There is ${count} person` : `There are ${count} persons`}</h1>
      <button onClick={count++}>Click me</button>
    </div>
  );
}