import express from 'express' // para implementar o servidor
import cors from 'cors' // para permitir a interação entre diferentes portas ou domínios
import itensRouter from './routers/itens.router'

// Porta do servidor
const PORT = process.env.PORT || 4000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express()

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!')
})

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Rotas
app.use('/api', itensRouter)

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso no endereço ${HOSTNAME}:${PORT}`)
})