import { useRef } from 'react'
import '../Styles/Form.css'

export default function Form(){  
    const nameRef = useRef(null)
    const rateRef = useRef(null)
    const textRef = useRef(null)
  
    const handleSubmit = (e) =>{
      e.preventDefault();
      const nameValue = nameRef.current.value
      const rateValue = rateRef.current.value
      const textValue = textRef.current.value
      console.log(`Name: ${nameValue}\nRate: ${rateValue}\nComment: ${textValue}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' ref={nameRef}></input>
                <label htmlFor='rate'>Rate your experience: </label>
                <input id='rate' type='range' min='0' max='10' ref={rateRef}></input>
                <label htmlFor='text'>Add a comment (optional): </label>
                <textarea id='text' ref={textRef}></textarea>
            </fieldset>
            <button type='submit'>Submit</button>
        </form>
    )
}