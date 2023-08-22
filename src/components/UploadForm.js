import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post('http://localhost:3001/insert', { value1, value2 });
    console.log(result.data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="Value 1" />
      <input type="text" value={value2} onChange={(e) => setValue2(e.target.value)} placeholder="Value 2" />
      <button type="submit">Insert Record</button>
    </form>
  );
}

export default UploadForm;
