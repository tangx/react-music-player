

export type HotComment = {
  commentId: number
  content: string
  user: User
}

type User = {
  avatarUrl: string
  nickname: string
}