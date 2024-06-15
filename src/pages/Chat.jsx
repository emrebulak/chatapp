import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase/config";
import { addDoc, collection, onSnapshot, query, where, orderBy, serverTimestamp } from "firebase/firestore";


const Chat = ({ room, setRoom }) => {

    const [messages, setMessages] = useState([]);
    const messageCol = collection(db, 'messages');

    useEffect(() => {

        const q = query(messageCol, where('room', '==', room), orderBy('createdAt', 'asc'));

        onSnapshot(q, (snapshot) => {
            const tempMsg = [];

            snapshot.docs.forEach(doc => {
                tempMsg.push(doc.data());
            });

            setMessages(tempMsg);
        });

    }, []);

    const inpRef = useRef();

    const handleSendMessage = async () => {
        if (inpRef.current.value != '') {

            await addDoc(messageCol, {
                text: inpRef.current.value,
                room,
                sender: {
                    id: auth.currentUser.uid,
                    name: auth.currentUser.displayName,
                    photo: auth.currentUser.photoURL,
                },
                createdAt: serverTimestamp(),
            });
            inpRef.current.value = '';
        }
    }

    const handleChangeRoom = () => {
        localStorage.removeItem('room');
        setRoom(null);
    }

    return (
        <div className="chat-container">
            <header>
                <p>{auth?.currentUser?.displayName}</p>
                <p>{room}</p>
                <button onClick={handleChangeRoom}>Farklı Oda</button>
            </header>
            <main>

                {
                    messages.map((message, index) => {

                        if (message.sender.id == auth.currentUser.uid) {
                            return (
                                <div key={index} className="self-message">
                                    <p>{message.text}</p>
                                </div>
                            )

                        } else {
                            return (
                                <div key={index} className="other-message">
                                    <img src={message.sender.photo} alt="Photo" />
                                    <p className="user">{message.sender.name}</p>
                                    <p>{message.text}</p>
                                </div>
                            )
                        }
                    })
                }

            </main>
            <footer>
                <input ref={inpRef} type="text" placeholder="Mesaj yazınız" />
                <button onClick={handleSendMessage}>Gönder</button>
            </footer>
        </div>
    )
}

export default Chat