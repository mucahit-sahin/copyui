import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  const { type, text } = props
  const getType = () => {
    switch (type) {
      case 'default':
        return styles.default
      case 'primary':
        return styles.primary
      case 'dashed':
        return styles.dashed
      case 'text':
        return styles.textBt
      case 'link':
        return styles.linkBt

      default:
        return styles.default
    }
  }
  return (
    <button className={[styles.button, getType()].join(' ')} {...props}>
      {text}
    </button>
  )
}
