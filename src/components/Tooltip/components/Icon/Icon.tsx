import React from 'react'
import classnames from 'classnames/bind'
import css from './Icon.module.scss'

const cx = classnames.bind(css)

type Props = {
  icon: 'info' | 'close'
}

export const Icon: React.FC<Props> = (props: Props) => {
  const { icon } = props

  if (icon === 'info') {
    return <div>info</div>
  }
  if (icon === 'close') {
    return <div>close</div>
  }
  return null
}
