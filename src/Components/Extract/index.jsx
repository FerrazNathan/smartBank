import React from "react";
import { Box, Button } from "../UI";
import { extratoLista } from '../../info';

const Extract = () => {
  return (
    <Box>
      {
        extratoLista.updates.map(({id, type, from, value, date}) => {
          return(
            <div key={id}>
              <div>{type}</div>
              <div>{from}</div>
            </div>
          )
        })
      }
      <Button>Ver Mais</Button>
    </Box>
  )
}

export default Extract