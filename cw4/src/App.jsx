import { useActionState, useCallback, useRef, useState } from 'react'

export default function NameForm(){
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const lastNameRef = useRef(null)

  const showData = useCallback(() => {
    alert(`first name: ${firstName}, last name: ${lastName}`)
  }, [firstName, lastName])

  const focusName = () => {
    if (lastNameRef.current){
      lastNameRef.current.focus()
    }
  }
  return (
    <div>
      <div style={{margin: "40px"}}>
        <input type="text" value={firstName} placeholder='введите имя' onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" value={lastName} ref={lastNameRef} placeholder='введите фамилию' onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div style={{margin:"30px"}}>
        <button onClick={focusName}>Фокус на фамилию</button>
        <button onClick={() => showData()}>Показать данные</button>
      </div>
    </div>
  )
}
