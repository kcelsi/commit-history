'use server'

import { CommitType } from '@/types/commit'
import { DEFAULT_COMMIT_COUNT_TO_LOAD } from '@/constants/commit'

const BRANCH = 'master'

export const getCommits = async (
  count: number = DEFAULT_COMMIT_COUNT_TO_LOAD
): Promise<CommitType[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}/commits?sha=${BRANCH}&per_page=${count}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  )
  const data = await response.json()
  return data
}
