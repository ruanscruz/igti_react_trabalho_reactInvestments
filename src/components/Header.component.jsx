function Header({ children }) {
  return (
    <header>
      <div className="bg-green-300 mx-auto p-2">
        <h1 className="text-center font-semibold text-xl">{children}</h1>
      </div>
    </header>
  );
}

export { Header };
