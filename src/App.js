import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      console.log("fetching data");
      const response = await fetch(`/api/getmessage?name=cameron`);
      console.log(response);
      const message = await response.json();
      console.log(message);
      setData(message);
    })();
  });

  return <div><h1>test:</h1>{data}</div>;
}

export default App;
