import { useEffect, useState } from "react"
import io from "socket.io-client"
import { api } from "../../service/api"

import styles from "./styles.module.scss"

import logo from "../../assets/logo.svg"

import { Message } from "../Message"

type MessageType = {
  id: string
  text: string
  user: {
    name: string
    avatar_url: string
  }
}
const messageQueue: MessageType[] = []

const socket = io("http://localhost:4000")

socket.on("new_message", (newMessage) => {
  messageQueue.push(newMessage)
})

export const MessageList = () => {
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messageQueue.length > 0) {
        setMessages((prevState) =>
          [messageQueue[0], prevState[0], prevState[1]].filter(Boolean)
        )
        messageQueue.shift()
      }
    }, 3000)
  }, [])

  useEffect(() => {
    api.get<MessageType[]>("last3").then((response) => {
      setMessages(response.data)
    })
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map((msg) => {
          return <Message {...msg} key={msg.id} />
        })}
      </ul>
    </div>
  )
}
