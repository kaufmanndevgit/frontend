import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/components/Cabecalho/@types/professor'
import Lista from '../src/components/Cabecalho/Lista/Lista'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "#",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "#",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "#",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "#",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    }
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home
