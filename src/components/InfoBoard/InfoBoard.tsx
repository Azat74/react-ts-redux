import React from 'react'
import classnames from 'classnames/bind'
import css from './InfoBoard.module.scss'

const cx = classnames.bind(css)

export interface Item {
  value: string
  description: string
}

type Props = {
  items: Item[]
}

export const InfoBoard: React.FC<Props> = (props: Props) => {
  const { items } = props

  return (
    <div className={cx('infoBoard')}>
      {items.map((item) => (
        <div key={item.value} className={cx('item')}>
          <div className={cx('value')}>{item.value}</div>{' '}
          <div className={cx('desc')}>{item.description}</div>
        </div>
      ))}
    </div>
  )
}
