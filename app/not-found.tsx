import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex w-auto h-44 shadow-lg place-self-center flex-col bg-[#98Ef00] rounded-lg  text-[#070708]'>
      <h2 className='place-self-center'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className='place-self-center' href="/">Return Home</Link>
    </div>
  )
}