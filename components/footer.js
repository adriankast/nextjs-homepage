import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Legal
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
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
