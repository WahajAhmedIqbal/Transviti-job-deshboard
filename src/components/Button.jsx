
const Button = ({ text, icon, buttonStyles }) => {
  return (
    <button className={` flex items-center text-center cursor-pointer justify-center text-base bg-primary text-white py-2.5 px-5 capitalize rounded-lg ${buttonStyles} `}>
        { icon && <img src={icon} alt="" /> }
        { text && <span>{text}</span> }
    </button>
  )
}

export default Button