import { Server } from 'Socket.IO'
import { gqlFetch } from '../../../lib/gql'
import { DELETE_ITEM, UPDATE_ITEMS } from './TextBlock.graphql'


const SocketHandler = (req, res) => {
  
  let latest = {id: '', input: ''}

  const setLatest = ({ id, input }) => {
    latest = { id, input }
  }
  async function updateItemHandler() {
      console.log("trying to update document item with id", latest.id, "in db")
      if (latest.id && latest.input) {
        try {
          const result = await gqlFetch(UPDATE_ITEMS,
            {
              id: latest.id,
              text: latest.input,
              flags: {}
            })
            console.log(JSON.stringify(result))
          } catch (error) {

          console.log(error)
        }
      }

    }

  async function deleteItem(id: string) {
    console.log("deleting item with id ", id)
    try {
      const result = await gqlFetch(DELETE_ITEM,
        {
          id: id
        })
        console.log(JSON.stringify(result))
      } catch (error) {

      console.log(error)
    }
  }
  
  // setInterval(() => {
  //   updateItemHandler()
  // }, 10000);

  if (res.socket.server.io) {
    console.log('Socket is already running')
  }
  else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', (socket) => {
      socket.on('title-change', msg => {
        // socket.broadcast.emit('update-title', msg)
        socket.broadcast.emit(msg.documentId, { type: "title", input: msg.title })
      });
      socket.on('input-change', msg => {
        console.log("sending", {type: "body", input: msg.input}, " on ", msg.documentId)
        socket.broadcast.emit(msg.documentId, {type: "body", input: msg.input})
      });
      // socket.on('delete-item', itemId => {
      //   console.log(itemId)
      //   deleteItem(itemId)
      //   socket.broadcast.emit('item-deleted', itemId)
      // });
    })
  }
  res.end()
}

export default SocketHandler