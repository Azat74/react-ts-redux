import React from 'react'
import './App.scss'
import { InfoBoard, Item as InfoBoardItem } from './components/InfoBoard'
import { Radio } from './components/Radio'

const items: InfoBoardItem[] = [
  {
    value: '40 000 ₽',
    description: 'сотрудник будет получать на руки',
  },
  {
    value: '5 977 ₽',
    description: 'НДФЛ, 13% от оклада',
  },
  {
    value: '45 977 ₽',
    description: 'за сотрудника в месяц',
  },
]

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
      <InfoBoard items={items} />
    </div>
  )
}

export default App
