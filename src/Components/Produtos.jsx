import React from 'react';
import Card from './Card';
import './Produtos.css';
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setDados(json), setLoading(false));
  }, []);
  function handleClick(event) {
    console.log(event.target);
  }
  return (
    <>
      {loading && <h1>Carregando...</h1>}
      <nav></nav>
      <div className='containerApp'>
        {!loading &&
          dados &&
          dados.map((item) => (
            <Card key={item.id} dados={item} foto={item.fotos[0]} />
          ))}
      </div>
    </>
  );
};

export default Produtos;
