import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='flex items-center justify-center bg-zinc-200'>
                <form 
                className='form-web flex gap-2 flex-col'
                action="">
                    <label htmlFor="name">Nombre</label>
                    <input placeholder='John Doe' name="nombre" id='name' type="text" />
                    <label htmlFor="phone">Telefono</label>
                    <input placeholder='0972371..' name="phone" id='phone' type="text" />
                    <label htmlFor="email">Email</label>
                    <input placeholder='alguien@example.com' name="email" id='email' type="text" />
                    <label htmlFor="mssg">Tu mensaje</label>
                    <textarea name="message" id="mssg"></textarea>
                    <button name="submit" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Contact