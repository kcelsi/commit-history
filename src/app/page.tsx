import { CommitType } from '@/types/commit'
import RefreshableCommitList from '@/components/refreshableCommitList'
import { loadCommits } from '@/actions/actionCommit'
import { DEFAULT_COMMIT_COUNT_TO_LOAD } from '@/constants/commit'
import Link from 'next/link'

const HomePage = async () => {
  const initialCommits: CommitType[] = await loadCommits(
    DEFAULT_COMMIT_COUNT_TO_LOAD
  )

  return (
    <main>
      <h1 className="text-4xl font-bold text-center text-gray-900 my-8">
        Commit History for repository
        <Link
          href="https://github.com/GKoil/GenDiff"
          target="_blank"
          className="text-blue-500 hover:underline ml-2"
        >
          {`${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}`}
        </Link>
      </h1>
      <RefreshableCommitList initialCommits={initialCommits} />
    </main>
  )
}

export default HomePage
