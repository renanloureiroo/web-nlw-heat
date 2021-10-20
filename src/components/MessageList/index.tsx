import { useEffect } from "react"
import { api } from "../../service/api"

import styles from "./styles.module.scss"

import logo from "../../assets/logo.svg"

import { Message } from "../Message"

export const MessageList = () => {
  useEffect(() => {
    api.get("last3").then((response) => {
      console.log(response.data)
    })
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <Message />
        <Message />
        <Message />
      </ul>
    </div>
  )
}
