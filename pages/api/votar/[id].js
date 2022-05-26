import executeQuery from "../../../lib/dbconn"

export default async function handler(req,res){
    const {method} = req
    const {id} = req.query
    if (method === 'POST') {
        const result_get = await executeQuery({
            query: `SELECT votos FROM candidatosA00368822 WHERE id='${id}'`
        })
        const newvoto = result_get[0].votos + 1
        await executeQuery({
            query: `UPDATE candidatosA00368822 SET votos='${newvoto}' WHERE id='${id}'`
        })
        res.status(200).json({status:'Exitoso'})
    }
}