import { useEffect } from "react"
import { VscGithubInverted } from "react-icons/vsc"
import { useAuth } from "../../hooks/useAuth"

import { api } from "../../service/api"
import styles from "./styles.module.scss"

export const LoginBox = () => {
  const { signInUrl, user } = useAuth()
  console.log(user)
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGitHub}>
        <VscGithubInverted size={24} />
        Entrar com GitHub
      </a>
    </div>
  )
}
