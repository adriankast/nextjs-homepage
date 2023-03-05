import Container from './container'
import Link from "next/link"
import SocialConnect from './social-connect'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 w-screen md:w-full">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center mr-4 ml-4 lg:mx-auto lg:my-auto lg:w-1/2">
        <div className="text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
          <SocialConnect />
        </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4">
            <span
              className="mx-3 font-bold hover:underline"
            ><Link href="/imprint">Imprint</Link>
            </span>
            <span className='mx-3 font-bold text-xl'>x</span>
            <span className="mx-3 font-bold hover:underline"><Link href="/privacy">Privacy</Link></span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
