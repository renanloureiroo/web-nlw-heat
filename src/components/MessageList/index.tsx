import styles from "./styles.module.scss"

import logo from "../../assets/logo.svg"

export const MessageList = () => {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logo} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
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
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
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
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
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
      </ul>
    </div>
  )
}
