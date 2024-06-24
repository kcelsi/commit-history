import { CommitType } from '@/types/commit'
import CommitList from '@/components/commitList'
import { loadCommits } from '@/actions/actionCommit'
import { DEFAULT_COMMIT_COUNT_TO_LOAD } from '@/constants/commit'
import Link from 'next/link'
import { getCommitCount } from '@/lib/getCommits'
import { getPlural } from '@/utils/getPluralCommit'

const HomePage = async () => {
  const initialCommits: CommitType[] = await loadCommits(
    DEFAULT_COMMIT_COUNT_TO_LOAD
  )
  const countCommits: number = await getCommitCount()

  return (
    <main>
      <h1 className="text-4xl font-bold text-center text-gray-900 my-8 break-words">
        Commit History for repository
        <Link
          href="https://github.com/GKoil/GenDiff"
          target="_blank"
          className="text-blue-500 hover:underline ml-2"
        >
          {`${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}`}
        </Link>
      </h1>

      <p className="text-center text-xl text-gray-700 my-4">
        There are{' '}
        <span className="text-blue-500 font-semibold">{countCommits}</span>{' '}
        {getPlural(countCommits)}
      </p>
      <CommitList initialCommits={initialCommits} />
    </main>
  )
}

export default HomePage
