const axios = require('axios')
function dataAtualFormatada() {
    const data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}
function turnoDoDia() {
    const data = new Date()
    const hora = data.getHours()
    let turno
    if (hora >= 6 && hora < 12) {
        turno = 'manha'
    } else if (hora >= 12 && hora < 18) {
        turno = 'tarde'
    } else {
        turno = 'noite'
    }
    return turno
}

module.exports = {
    async busca(req, res) {
        try {
            const { zipcode } = req.query;

            const { data } = await axios(`https://viacep.com.br/ws/${zipcode}/json/`)
            const geocode = data.ibge;

            const inmet = await axios(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`)
            const climaTempo = inmet.data

            const dataAtual = dataAtualFormatada()
            const turno = turnoDoDia()

            const clima_tempo = climaTempo[geocode][dataAtual][turno]

            return res.status(200).json({ clima_tempo })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: error })
        }

    },
}