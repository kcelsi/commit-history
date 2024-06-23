'use server'

import { CommitType } from '@/types/commit'
import { DEFAULT_COMMIT_COUNT_TO_LOAD } from '@/constants/commit'

const BRANCHES = ['main', 'master']

const fetchWithAuth = async (url: string): Promise<Response> => {
  return await fetch(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  })
}

const fetchFromBranches = async (
  urlTemplate: (branch: string) => string
): Promise<Response> => {
  for (const branch of BRANCHES) {
    const url = urlTemplate(branch)
    const response = await fetchWithAuth(url)
    if (response.ok) {
      return response
    }
  }
  throw new Error('No valid response from either main or master branch.')
}

export const getCommits = async (
  count: number = DEFAULT_COMMIT_COUNT_TO_LOAD
): Promise<CommitType[]> => {
  const response = await fetchFromBranches(
    (branch) =>
      `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}/commits?sha=${branch}&per_page=${count}`
  )
  const data = await response.json()
  return data
}

export const getCommitCount = async () => {
  const response = await fetchFromBranches(
    (branch) =>
      `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}/commits?sha=${branch}&per_page=${1}&page=${1}`
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
