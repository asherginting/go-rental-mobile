const PriceFormat = price => {
  return (
    'Rp.' +
    parseFloat(price)
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  );
};

export default PriceFormat;
