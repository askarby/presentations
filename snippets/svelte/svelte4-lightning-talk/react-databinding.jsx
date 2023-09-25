function DataBinding() {
  const [value, setValue] = useState('Sherlock Holmes');
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <p>The name is {value}</p>
    </div>
  );
}