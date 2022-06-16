export default function Main({ titulo, subtitulo }) {
  return (
    <main>
      <div className="flex-col text-center font-semibold m-3">
        <h2>{titulo}</h2>
        <h3 className="text-xs">{subtitulo}</h3>
      </div>
    </main>
  );
}
