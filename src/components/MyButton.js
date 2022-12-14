const MyButton = ({type, text, onClick}) => {
  const btnType = ['positive', 'nagative'].includes(type)? type: "default"

  return (
    <button className={["MyButton", `MyButton-${btnType}`].join(" ")} onClick={onClick}>
      {text}
    </button>)
}

MyButton.defaultProps = {
  type: "default"
}

export default MyButton