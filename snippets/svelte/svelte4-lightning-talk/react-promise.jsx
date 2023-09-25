function FetchData() {
  const [state, setState] = useState(null);
  // ... state hooks for "data" and "error"

  useEffect(async () => {
    setState('loading');
    try {
      const data = await fetch.get('<data url>');
      setData(data);
      setState('success');
    } catch (cause) {
      setError(cause);
      setState('error');
    }
  }, []);

  if (state === 'error') 
    return (<h1>{error}</h1>);
  return (<pre>{state === 'loading' ? 'Loading...' : data}</pre>);
}