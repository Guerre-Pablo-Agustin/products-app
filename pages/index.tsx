import Image from "next/image";
import {
  Layout,
  Text,
  Page,
  Button,
  Link,
  List,
  Code,
} from "@vercel/examples-ui";
import buildScreenShot from "../public/build.png";

function Home() {
  return (
    <div className="mt-28 md:mt-2">
      <section className="relative flex justify-center items-center py-4 px-2 w-[100%]">
        <div className="relative">
          <Image
            src="/Banner.png"
            alt="Una imagen de la fachada de una tienda con las palabras Seashores en ella"
            width={1000}
            height={800}
            className="rounded-md  object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center  text-black md:text-white bg-black bg-opacity-50 p-4 rounded-md">
            <h1 className="text-4xl px-8 py-2 font-bold mb-2">
              Seashores es un sitio web de productos para la moda y la belleza
            </h1>
            <p className="text-lg mb-4 md:w-[60%]">
              Con Seashores, encontrarás una amplia variedad de productos para
              diseñar y personalizar tus vestidos y ropas. Descubre nuevos
              estilos y combinaciones, y disfruta de la moda y la belleza sin
              límites.
            </p>
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              <Link href="/beauty">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Ir a la página de beauty
                </Button>
              </Link>
              <Link href="/groceries">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Ir a la página de groceries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Home.Layout = Layout;

export default Home;
