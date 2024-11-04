import Image from 'next/image'
import {
  Layout,
  Text,
  Page,
  Button,
  Link,
  List,
  Code,
} from '@vercel/examples-ui'
import buildScreenShot from '../public/build.png'

function Home() {
  return (
    <Page>
      <section>
      
      
   
      </section>

      <hr className="border-t border-accents-2 my-6" />

      <section className="flex flex-col gap-3">
        <Link href="/category">
          <Button>DEMO: Go to category page (PLP) </Button>
        </Link>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
