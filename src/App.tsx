import React from 'react'
import './App.scss'
import { Radio } from './components/Radio'

function App(): React.ReactElement {
  return (
    <div className="App">
      <Radio labelText="Оклад за месяц" />
      <Radio
        labelText="МРОТ"
        description="МРОТ — минимальный размер оплаты труда. Разный для разных регионов"
      />
      <Radio labelText="Оплата за день" />
      <Radio labelText="Оплата за час" />
    </div>
  )
}

export default App
