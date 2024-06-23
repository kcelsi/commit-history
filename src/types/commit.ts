export interface CommitType {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      date: string
    }
  }
  author: {
    avatar_url: string
  }
  timestamp: string
}
