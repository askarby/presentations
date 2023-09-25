function Beatles() {
  const members = [
    'John', 
    'Paul', 
    'George', 
    'Ringo'
  ];
  return (
    <ul>
      {members.map(each => <li>{each}</li>)}
    </ul>
  );
}