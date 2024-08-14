export default async function handler(req, res) {
    try {
        const reqType = req.method
        const reqHeaders= JSON.stringify(req.headers)
        const reqBody = JSON.stringify(req.body)
        console.log("Method: " + reqType)
        console.log("Headers: " + reqHeaders)
        console.log("Body: " + reqBody)
        res.status(200).json({ message: reqBody })
    } catch (err) {
        console.log(err.stack)
        res.status(500).send({ error: 'failed to fetch data' })
    }
}

