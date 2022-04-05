import React, { useEffect, useState, createContext } from 'react';
import io from 'Socket.IO-client';

const WebSocketContext = createContext(null);

export { WebSocketContext };

function WebSocketProvider({ children }) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        console.log("initializing client socket");
        const clientSocket = io();
        setSocket(clientSocket);
    }, []);

    return (
        <WebSocketContext.Provider value={socket}>
            {children}
        </WebSocketContext.Provider>
    );
}

export default WebSocketProvider;