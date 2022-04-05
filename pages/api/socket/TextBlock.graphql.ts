export const UPDATE_ITEMS = `mutation UpdateItems($id: uuid!, $flags: jsonb!, $text: String!){
  updateDocumentItem(pk_columns: {id: $id}, _set: {flags: $flags, text: $text}) {
    id
  }
}`

export const DELETE_ITEM = `mutation DeleteItem($id: uuid!){
  deleteDocumentItem(id: $id) {
    id
  }
}`