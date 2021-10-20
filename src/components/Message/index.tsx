import styles from "./styles.module.scss"

type Message = {
  text: string
  user: {
    name: string
    avatar_url: string
  }
}

export const Message = ({ text, user }: Message) => {
  const { avatar_url, name } = user
  return (
    <li className={styles.message}>
      <p className={styles.messageContent}>{text}</p>
      <div className={styles.messageUser}>
        <div className={styles.userImage}>
          <img src={avatar_url} alt="Avatar do usuário" />
        </div>
        <span>{name}</span>
      </div>
    </li>
  )
}
