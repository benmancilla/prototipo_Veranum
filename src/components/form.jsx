//Formulario

import React, {useState} from 'react';

const mail = "ben.mancilla@duocuc.cl";


const CreateForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (name.trim() === '') {
            setNameError("Por favor ingresa tu nombre");
            isValid = false;
        } else {
            setNameError("");
        }

        if (email.trim() === '') {
            setEmailError("Por favor ingresa tu correo electrónico");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (message.trim() === '') {
            setMessageError("Por favor ingresa tu mensaje");
            isValid = false;
        } else {
            setMessageError("");
        }

        if (isValid) {
            e.target.submit();
        }
    };

    return (
    <div className="modal-body">
        <form onSubmit={handleSubmit} action={`https://formsubmit.co/${mail}`} method="POST">
            <div className="mb-3">
                <label htmlFor="InputName2" className="form-label">Nombre</label>
                <input type="name" className="form-control" aria-describedby="nameHelp" placeholder='nombre completo'  value={name} onChange={(e) => setName(e.target.value)} />
                {<span className="text-danger">{nameError}</span>}
            </div>
                <div className="mb-3">
                <label htmlFor="InputEmail2" className="form-label">Email</label>
                <input type="email" className="form-control" id="InputEmail2" placeholder='correo@ejemplo.com'  value={email} onChange={(e) => setEmail(e.target.value)} />
                {<span className="text-danger">{emailError}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="InputMessage" className="form-label">Mensaje</label>
                <textarea className="form-control"  style={{maxHeight: '20vh'}}  id="InputMessage" rows="4"  value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                {<span className="text-danger">{messageError}</span>}
            </div>
            <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    </div>
    )
}        

export default CreateForm;