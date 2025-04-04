const a = require('express')
const b = require('cors')

const copyExpress = a()
copyExpress.use(b())

copyExpress.get('/meuendpoint', (req, res)=>{
    res.send([
        {nome: "Teste1", rgm: "123456", curso: "ADS"},
        {nome: "Teste2", rgm: "1234567", curso: "ADM"},

    ])
})

copyExpress.listen(3099, () => {
    console.log('porta aberta, server ligado')
})