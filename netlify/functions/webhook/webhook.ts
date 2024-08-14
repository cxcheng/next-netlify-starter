import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  console.log("Params: " + JSON.stringify(event.queryStringParameters))
  console.log("Headers: " + JSON.stringify(event.headers))
  console.log("RawQuery: " + event.rawQuery)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, world`,
    }),
  }
}
