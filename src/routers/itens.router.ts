import express from 'express' // importa o express para utilizar o roteador
import Item from '../models/item' // importa o modelo padrão estabelecido em item.ts

const itensRouter = express.Router() // ...

// cada uma das requisições

itensRouter.post('/itens', (req, res) => {
    const item: Item = req.body
    const id = 123
    res.status(201).location(`/itens/${id}`).send()
}) // http://localhost:4000/api/itens
itensRouter.get('/itens', (req, res) => {
    const itens: Item[] = [
        {
            id: 1,
            nome: 'Produto 1',
            descricao: 'Descrição do produto 1'
        },
        {
            id: 2,
            nome: 'Produto 2',
            descricao: 'Descrição do produto 2'
        }
    ]
    res.json(itens)
}) // http://localhost:4000/api/itens
itensRouter.get('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    const item: Item = {
        id: id,
        nome: `Produto ${id}`,
        descricao: `Descrição do produto ${id}`
    }
    res.json(item)
}) // http://localhost:4000/api/itens/123
itensRouter.put('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
}) // http://localhost:4000/api/itens/123
itensRouter.delete('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    res.status(204).send()
}) // http://localhost:4000/api/itens/123

export default itensRouter // exporta o roteador com cada uma das requisições que foram definidas acima