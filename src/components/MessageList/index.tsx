import { useEffect, useState } from "react"
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

export const MessageList = () => {
  const [messages, setMessages] = useState<MessageType[]>([])

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
