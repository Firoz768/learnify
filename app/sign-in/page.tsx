const page = () => {
  return (
    <div>
        <h1 className='text-2xl underline'>Sign In</h1>
        <p className='text-lg'>Please enter your credentials to sign in.</p>
        <form className='flex flex-col space-y-4'>
            <input type='email' placeholder='Email' className='border p-2 rounded' required />
            <input type='password' placeholder='Password' className='border p-2 rounded' required />
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Sign In</button>
        </form>
    </div>
  )
}

export default page
