import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=jp&apiKey=5890b3ef92f143e9aee1fb5093f99689',
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>呼び出し</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
