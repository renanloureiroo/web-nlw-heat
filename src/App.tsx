import styles from "./App.module.scss"
import { LoginBox } from "./components/LoginBox"
import { MessageList } from "./components/MessageList"
import { SendMessageForm } from "./components/SendMessageForm"
import { useAuth } from "./hooks/useAuth"

export const App = () => {
  const { user } = useAuth()
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  )
}
