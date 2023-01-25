import "./Contact.css"

// email API
import emailjs from "@emailjs/browser"


// hooks
import { useState } from "react"

const Contact = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState("")

    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)
   
    const resetEmailStatus = () => {

        setTimeout(() => {
            setSucess(false)
            setError(false)
        },2000)
        
    }

    const sendEmail = async(e) => {
        e.preventDefault()

        setLoading(true)
        if(!email || !message) {
            alert("Preencha todos os campos.")
            return
        }

        const templateParams = {
            message,
            email
        }

        await emailjs.send("service_gi2a7rj", "template_feu2gie", templateParams, "KvZMU0NkL2oqy2s7_")
                        .then(response => {
                            setSucess(response)
                            resetEmailStatus()
                        },
                        err => {
                            setError(err)
                            resetEmailStatus()
                        })
        
        setLoading(false)

        setEmail("")
        setMessage("")
    }

  return (
    <div id="contact">
        <h1 className="contactTitle">Connect with me</h1>
        <form onSubmit={sendEmail}>
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />

            {loading && <button className="btn submit" disabled>Aguarde...</button>}
            {!loading && sucess ?
            (<button className="btn submit" disabled>E-mail enviado com sucesso!</button>)
            :
            (<button className="btn submit">Enviar</button>)
            }
            {error && <button className="btn submit" disabled>Ocorreu um erro.</button>}
            


            
        </form>
    </div>
  )
}

export default Contact