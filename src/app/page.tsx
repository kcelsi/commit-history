import { CommitType } from '@/types/commit'
import { getCommits } from '@/lib/getCommits'
import RefreshableCommitList from '@/components/refreshableCommitList'

const HomePage = async () => {
  const initialCommits: CommitType[] = await getCommits()

  return (
    <div className="container">
      <h1>Commit History</h1>
      <RefreshableCommitList initialCommits={initialCommits} />
    </div>
  )
}

export default HomePage
