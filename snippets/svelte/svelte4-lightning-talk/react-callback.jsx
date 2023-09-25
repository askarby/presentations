function Button({ handleClick }) {
  return <button onClick={handleClick}>Click me</button>;
}

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <Button handleClick={increment}/>
      <p>Button is clicked {count} times</p>
    </div>
  )
}