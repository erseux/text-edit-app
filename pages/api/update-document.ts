// import { getSession, Session } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { gqlFetch } from '../../lib/gql'

export default async function session(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = `
        mutation UpdateDocument($id: uuid!) {
            updateDocument(pk_columns: {id: $id}, _set: {updatedAt: now()}) {
            }
        }`
    /*
        "data": {
          "old": {
              "flags": null,
              "document_id": "1b26c06d-90ef-4bdc-842a-d8a8021cbebc",
              "text": "",
              "id": "7f5e279f-cb47-4900-823e-28ce90e30efc",
              "index": 3
          },
          "new": {
              "flags": null,
              "document_id": "1b26c06d-90ef-4bdc-842a-d8a8021cbebc",
              "text": "jj",
              "id": "7f5e279f-cb47-4900-823e-28ce90e30efc",
              "index": 3
          }
    */

    const result = await gqlFetch(query, {id:req.body.data.new.document_id})
    return res.status(200).json(result);

  } catch (error) {
    console.error(error)
    res.status(error.status || 500).json({
      error: true,
      message: 'Internal server error',
      code: 500,
    })
  }
}