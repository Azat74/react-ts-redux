import React from 'react'
import classnames from 'classnames/bind'
import css from './Radio.module.scss'
import { Tooltip } from '../Tooltip'

const cx = classnames.bind(css)

type Props = {
  checked?: boolean
  disabled?: boolean
  name?: string
  value?: string | number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
  labelText: string
  description?: string
}

export const Radio: React.FC<Props> = (props: Props) => {
  const {
    labelText,
    disabled = false,
    value,
    checked,
    description,
    ...rest
  } = props

  return (
    <label
      className={cx('radio', {
        ['radiobutton_disabled']: disabled,
        ['radiobutton_checked']: checked,
      })}
    >
      <input
        {...rest}
        className={cx('input')}
        value={value}
        disabled={disabled}
        checked={checked}
        type="radio"
      />
      <div className={cx('label')}>{labelText}</div>
      {description && <Tooltip text={description} />}
    </label>
  )
}
