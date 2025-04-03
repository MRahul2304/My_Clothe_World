import React from 'react'

const NewsLetters = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'> Subscribe Now & Get 20% Off</p>     
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea est facere suscipit accusamus accusantium ipsam alias doloremque molestiae aliquid? Sed hic nostrum aperiam reprehenderit libero? Minima excepturi harum cupiditate laboriosam.
        </p>   
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap -3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'> SUBSCRIBE </button>
        </form>
    </div>
  )
}

export default NewsLetters  
