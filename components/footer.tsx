import Link from "next/link"

const Footer = () => {
    return (
      <footer className='bg-[#141419] rounded-l shadow mt-8'>
        <div className='mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
            © 2024{' '}
            <a href='#' className='hover:underline'>
              DanDev™
            </a>
            . All Rights Reserved.
          </span>
          <ul className='mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
            {/* <li>
              <a href='#' className='me-4 hover:underline md:me-6'>
                About me
              </a>
            </li> */}
            <li>
              <Link href='/privacy' className='me-4 hover:underline md:me-6'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href='/terms' className='me-4 hover:underline md:me-6'>
                Licensing
              </Link>
            </li>
            <li>
              <Link href='/donation' className='hover:underline'>
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
  
  export default Footer