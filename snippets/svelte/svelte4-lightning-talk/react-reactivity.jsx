function Counter() {
  const [count, setCount] = useState(0);
  const doubled = useMemo(() => count * 2, [count]);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <button onClick={increment}>Click me</button>
      <p>Button is clicked {count} times (doubled, it's {doubled}</p>
    </div>
  )
}