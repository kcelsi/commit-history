import { CommitType } from '@/types/commit'

export const COMMIT: CommitType = {
  sha: 'abc123',
  commit: {
    message: 'Initial commit',
    author: {
      name: 'John Doe',
      date: '2024-06-24',
    },
  },
  author: {
    avatar_url: 'https://example.com/avatar.jpg',
  },
  timestamp: '2024-06-24T12:00:00Z',
}

export const DEFAULT_COMMIT_COUNT_TO_LOAD = 20
