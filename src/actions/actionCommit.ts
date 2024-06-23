'use server'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { getCommits } from '@/lib/getCommits'

dayjs.extend(relativeTime)

async function fetchAndFormatCommits(count: number) {
  const commits = await getCommits(count)

  return commits.map((commit) => ({
    ...commit,
    timestamp: dayjs(commit.commit.author.date).fromNow(),
  }))
}

export async function loadCommitsForm(prevData: unknown, formData: FormData) {
  const count = Number(formData.get('count'))
  return fetchAndFormatCommits(count)
}

export async function loadCommits(count: number) {
  return fetchAndFormatCommits(count)
}
