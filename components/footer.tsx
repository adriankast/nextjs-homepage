import Container from './container'
import Link from "next/link"
import SocialConnect from './social-connect'
import NewsletterForm from './newsletter-form'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 w-screen md:w-full">
      <Container>
        <div className="py-28 flex flex-col items-center mr-4 ml-4 lg:mx-auto lg:my-auto lg:w-2/3">
          {/* Newsletter Section */}
          <div className="w-full mb-10 text-center">
            <h3 className="text-xl font-bold mb-2">Subscribe to Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Get updates on programming, indie-hacking, and sports
            </p>
            <NewsletterForm className="max-w-md mx-auto" />
          </div>

          {/* Social and Links Section */}
          <div className="flex flex-col lg:flex-row items-center w-full border-t border-accent-2 pt-10">
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
        </div>
      </Container>
    </footer>
  )
}
