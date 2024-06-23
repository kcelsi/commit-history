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

export const getCommitCount = async () => {
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}/commits?sha=${BRANCH}&per_page=${1}&page=${1}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  )

  const linkHeader = response.headers.get('link')

  if (linkHeader) {
    const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/)
    if (lastPageMatch) {
      return parseInt(lastPageMatch[1], 10)
    }
  }

  // If the Link header is absent, it means there is only one commit
  return 1
}
