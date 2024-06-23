'use client'

import { CommitType } from '@/types/commit'
import { useState } from 'react'
import { getCommits } from '@/lib/getCommits'
import RefreshButton from '@/components/refreshButton'
import Commit from '@/components/commit'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const RefreshableCommitList = ({
  initialCommits,
}: {
  initialCommits: CommitType[]
}) => {
  const [commits, setCommits] = useState<CommitType[]>(initialCommits)

  const refreshCommits = async () => {
    const newCommits = await getCommits()
    setCommits(newCommits)
  }

  return (
    <div>
      <RefreshButton onClick={refreshCommits} />
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>
            <Commit
              authorAvatarUrl={commit.author.avatar_url}
              message={commit.commit.message}
              authorName={commit.commit.author.name}
              sha={commit.sha}
              timestamp={commit.commit.author.date}
              isLoading={false}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RefreshableCommitList
