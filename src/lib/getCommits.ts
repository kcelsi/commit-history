'use server'

import { Commit } from '@/types/commit'

const BRANCH = 'master'

export const getCommits = async (): Promise<Commit[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}/commits?sha=${BRANCH}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  )
  const data = await response.json()
  return data
}
