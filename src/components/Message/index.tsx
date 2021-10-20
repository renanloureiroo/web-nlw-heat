import styles from "./styles.module.scss"

export const Message = () => {
  return (
    <li className={styles.message}>
      <p className={styles.messageContent}>
        Não vejo a hora de começar esse evento, com certeza vai ser o melhor de
        todos os tempos, vamooo pra cima! 🔥🔥
      </p>
      <div className={styles.messageUser}>
        <div className={styles.userImage}>
          <img
            src="https://github.com/renanloureiroo.png"
            alt="Renan Loureiro"
          />
        </div>
        <span>Renan Loureiro</span>
      </div>
    </li>
  )
}
