import React, { useState, useEffect, useRef, useCallback } from 'react'
import classnames from 'classnames/bind'
import css from './Tooltip.module.scss'
import { Icon } from './components/Icon'

const cx = classnames.bind(css)

type Props = {
  text: string
}

export const Tooltip: React.FC<Props> = (props: Props) => {
  const { text } = props
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((state) => !state)
  const ref = useRef<HTMLDivElement>(null)
  const handleClick = useCallback((event: any) => {
    if (!ref.current) {
      return
    }
    if (!ref.current.contains(event.target)) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <div ref={ref} className={cx('tooltip')}>
      <button onClick={handleToggle}>
        <Icon icon={isOpen ? 'close' : 'info'} />
      </button>
      {isOpen && <div className={cx('text')}>{text}</div>}
    </div>
  )
}
