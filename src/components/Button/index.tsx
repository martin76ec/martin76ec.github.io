function Button({ children, ...props }) {
  return ( 
    <div className={`${props.className || ''} flex w-40 bg-[#2E519E] p-0 h-16 drop-shadow-lg`}>
      <a className='flex w-full h-full select-none justify-center items-center'>
        { children }
      </a>
    </div>
  )
}

function Icon({ children }) {
  return <>{ children }</>
}

Button.Icon = Icon

export { Button };