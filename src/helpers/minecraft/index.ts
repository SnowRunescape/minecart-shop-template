export const getHelmByUsername = (username: string) => {
  return `https://minotar.net/helm/${username}/64`;
}

export const getBodyByUsername = (username: string) => {
  return `https://minotar.net/body/${username}/80`
}