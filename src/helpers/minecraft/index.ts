export const getHelmByUsername = (username: string, size: number = 64) => {
  return `https://minotar.net/helm/${username}/${size}`;
}

export const getBodyByUsername = (username: string, size: number = 80) => {
  return `https://minotar.net/body/${username}/${size}`
}