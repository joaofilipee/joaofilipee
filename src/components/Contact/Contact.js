import "./Contact.css"

// email API
import emailjs from "@emailjs/browser"


// hooks
import { useState } from "react"

const Contact = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e) => {
        e.preventDefault()

        if(!email || !message) {
            alert("Preencha todos os campos.")
            return
        }

        const templateParams = {
            message,
            email
        }

        emailjs.send("service_gi2a7rj", "template_feu2gie", templateParams, "KvZMU0NkL2oqy2s7_")
                        .then(response => {
                            console.log("E-MAIL ENVIADO!", response.status, response.text)
                        }, err => {
                            console.log("Erro: ", err)
                        })
        
        setEmail("")
        setMessage("")
    }

  return (
    <div id="contact">
        <h1 className="contactTitle">Connect with me</h1>
        <form onSubmit={sendEmail}>
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />

            <button className="btn submit">Enviar</button>
        </form>
    </div>
  )
}

export default Contact