export default function Footer() {
  return (
    <footer className="mt-12 bg-zinc-950 text-zinc-300 rounded-2xl" >
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Sobre */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">
            Portal NASA
          </h2>
          <p className="text-sm leading-relaxed">
            Projeto desenvolvido para explorar e consumir APIs públicas da NASA,
            trazendo dados reais sobre o universo de forma simples e acessível.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">
            Navegação
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition">
              Página Inicial
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Eventos Espaciais
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition">
              Sobre o Projeto
            </li>
          </ul>
        </div>

        {/* Contato / GitHub */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4">
            Desenvolvedores
          </h2>
          <p className="text-sm">
            Desenvolvido por Jullyo César, Miguel, Marcos e Guilherme
          </p>
          <p className="text-sm mt-2 text-blue-400 hover:underline cursor-pointer">
            GitHub
          </p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-zinc-800 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Portal NASA • Dados fornecidos por APIs públicas
      </div>
    </footer>
  );
}
