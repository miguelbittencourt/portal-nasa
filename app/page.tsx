import imgNasa from "@/assets/images/img-nasa.jpg";

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-2xl">Página Inicial</h1>

      <div className="w-2/3 mt-10 relative">
        <img
          src={imgNasa.src}
          alt=""
          className="absolute inset-0 w-full h-96 object-cover rounded-2xl brightness-25"
        />
        <div className="relative h-96 flex flex-col justify-start pt-20 px-10 text-white">
          <h1 className="font-bold font-sans text-4xl md:text-5xl">
            Explorando o Espaço
          </h1>
          <h1 className="font-sans text-xl md:text-3xl mt-4">
            Vamos explorar os fatos que a NASA disponibiliza ao mundo.
          </h1>
        </div>

      </div>
    </main>
  );
}
