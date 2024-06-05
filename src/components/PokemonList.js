import React, {useState} from 'react';
import { Pagination } from 'antd';

export const Pokemons = () => {
  
  const [page, setPage] = useState(1);

  return (
    <div>
    <h1>{page}</h1>
    <Pagination defaultCurrent={1} total={500} onChange={(page) => setPage(page)} />
    </div>
  )
}