import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../service/api"

type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}

type AuthContextData = {
  user: User | null
  signInUrl: string
  signOut: () => void
}

type AuthProviderType = {
  children: ReactNode
}

type AuthRespondeType = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = (props: AuthProviderType) => {
  const signInUrl = "http://localhost:4000/github"

  const [user, setUser] = useState<User | null>(null)

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("@dowhile:token")
  }
  const signIn = async (githubCode: string) => {
    const response = await api.post<AuthRespondeType>("authenticate", {
      code: githubCode,
    })

    const { token, user } = response.data

    localStorage.setItem("@dowhile:token", token)

    setUser(user)
  }

  // Removendo code da url
  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes("?code=")

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split("?code=")
      window.history.pushState({}, "", urlWithoutCode)

      signIn(githubCode)
    }
  }, [])

  // Get User in api utilizando token armazenado no localStorage
  useEffect(() => {
    const token = localStorage.getItem("@dowhile:token")
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      api.get<User>("/profile").then((response) => {
        if (response.status == 200) {
          setUser(response.data)
        }
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  )
}
