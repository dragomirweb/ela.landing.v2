import React from 'react'

import styles from './Button.module.scss'

interface ElaButtonProps {
  buttonType?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  disabled?: boolean
}

const ElaButton: React.FunctionComponent<ElaButtonProps> = ({
  buttonType = 'button',
  className = '',
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      type={buttonType}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ElaButton

// import React from 'react'
// import { ButtonProps } from './Button.types'

// const Button: React.FC<ButtonProps> = ({
//   children,
//   onClick,
//   buttonStyle,
//   buttonType,
//   disabled,
//   className,
// }) => {
//   return (
//     <button
//       type={buttonType}
//       className={`button ${buttonStyle} ${className}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   )
// }
