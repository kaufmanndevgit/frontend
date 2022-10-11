import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/components/Cabecalho/@types/professor'
import Lista from '../src/components/Cabecalho/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const {listaProfessores} = useIndex();
  
  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={listaProfessores}></Lista>
    </Box>
  )
}

export default Home
