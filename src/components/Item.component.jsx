function Item({ valueRendiment, percentRendiment }) {
  const gainOrLoss =
    percentRendiment === 0
      ? ''
      : percentRendiment < 0
      ? 'text-red-500'
      : 'text-green-500';
  return (
    <>
      <span className={gainOrLoss}>{valueRendiment}</span>
      <span className={gainOrLoss}>{percentRendiment}</span>
    </>
  );
}

export { Item };
