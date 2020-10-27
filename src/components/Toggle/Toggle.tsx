import React from 'react'
import classnames from 'classnames/bind'
import css from './Toggle.module.scss'

const cx = classnames.bind(css)

type Props = {
  labelDisable: string
  labelEnable: string
  onClick?: () => void
  isEnabled?: boolean
}

export const Toggle: React.FC<Props> = (props: Props) => {
  const { labelDisable, labelEnable, onClick, isEnabled } = props

  return (
    <label className={cx('toggle')} onClick={onClick}>
      <span
        className={cx('label', {
          ['label_active']: !isEnabled,
        })}
      >
        {labelDisable}
      </span>
      <div
        className={cx('toggler', {
          ['toggler_active']: isEnabled,
        })}
      />
      <span
        className={cx('label', {
          ['label_active']: isEnabled,
        })}
      >
        {labelEnable}
      </span>
    </label>
  )
}
