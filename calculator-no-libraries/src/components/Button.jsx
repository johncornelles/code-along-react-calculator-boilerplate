

const Button = ({value, handleInput}) => {
  return (
    <button value={value} onClick={() => handleInput(value)}>{value}</button>
  )
}

export default Button