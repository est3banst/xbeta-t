import React from 'react'
import About from './About'


const Contact = () => {
    return (
        <>
        <About/>
        <div className='bg-zinc-200 p-4 flex flex-col gap-2'>
        <h2 className='text-slate-900 m-3 text-xl border-slate-950 border-b-4 w-max flex justify-center'>
            Hagamos tu idea realidad!</h2>
           <hr className=''/>
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
                    <button className='custom-btn' name="submit" type="submit">Enviar</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default Contact