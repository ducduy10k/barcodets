import './App.css';
import barcode from 'jsbarcode';
import { useLayoutEffect } from 'react';

function App() {
  useLayoutEffect(() => {
    barcode('#barcode', '123', {
      lineColor: '#000',
      width: 4,
      height: 40,
      displayValue: true,
      format: 'CODE128',
    });
  });

  return (
    <div className='App'>
      <svg id='barcode'></svg>
    </div>
  );
}

export default App;
