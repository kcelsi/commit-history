'use client'

import { loadCommitsForm } from '@/actions/actionCommit'
import { useFormState, useFormStatus } from 'react-dom'
import { COMMIT } from '@/constants/commit'
import { CommitType } from '@/types/commit'
import { memo, useEffect } from 'react'

const RefreshButton: React.FC<{
  commitCount: number
  onClick: (commits: CommitType[]) => void
}> = ({ commitCount, onClick }) => {
  const [state, formAction] = useFormState(loadCommitsForm, [COMMIT])

  useEffect(() => {
    if (state.at(0) === COMMIT) return

    onClick(state)
  }, [state])

  return (
    <form
      action={formAction}
      className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-md"
    >
      <input
        type="number"
        min={1}
        max={200}
        placeholder="Count commits to load"
        name="count"
        defaultValue={commitCount}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <SubmitButton />
    </form>
  )
}

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-4 py-2 font-semibold text-white rounded-lg ${pending ? 'bg-gray-500 animate-pulse' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
    >
      Refresh
    </button>
  )
}

export default memo(RefreshButton)
