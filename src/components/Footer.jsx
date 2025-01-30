import React from 'react'

const Footer = () => {
    return (
        <div className='h-auto p-4 bg-zinc-400'>
        <footer></footer>
        <small
        className='flex gap-2 items-center justify-center flex-col'
        >Las fotos presentadas en esta web son propiedad de sus respectivos dueños
        <a 
        className=''
        href="https://www.pexels.com">Fuente <b className='underline'>
            Pexels
            </b>
            </a>

        </small>
        </div>
    )
}

export default Footer