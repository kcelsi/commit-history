'use client'

import { CommitType } from '@/types/commit'
import { useEffect, useState } from 'react'
import RefreshButton from '@/components/refreshButton'
import Commit from '@/components/commit'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const TIME_TO_UPDATE_MS = 60000

dayjs.extend(relativeTime)

const RefreshableCommitList = ({
  initialCommits,
}: {
  initialCommits: CommitType[]
}) => {
  const [commits, setCommits] = useState<CommitType[]>(initialCommits)
  const [currentTime, setCurrentTime] = useState(dayjs())

  const refreshCommits = async (newCommits: CommitType[]) => {
    setCommits(newCommits)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs())
    }, TIME_TO_UPDATE_MS)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <RefreshButton commitCount={commits.length} onClick={refreshCommits} />
      <ul className="max-w-screen-md">
        {commits.map((commit) => (
          <li key={commit.sha} className="mb-2">
            <Commit
              authorAvatarUrl={commit.author.avatar_url}
              message={commit.commit.message}
              authorName={commit.commit.author.name}
              sha={commit.sha}
              timestamp={dayjs(commit.commit.author.date).from(currentTime)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RefreshableCommitList
