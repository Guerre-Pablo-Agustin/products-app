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
   
      <section className="flex md:flex-row flex-col gap-3">
        <Link href="/beauty">
          <Button>Ir a la pagina de beauty</Button>
        </Link>
        <Link href="/groceries">
          <Button>Ir a la pagina de groceries</Button>
        </Link>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
