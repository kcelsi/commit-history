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
    <form action={formAction}>
      <input
        type="number"
        placeholder="count commits to load"
        name="count"
        defaultValue={commitCount}
      />
      <SubmitButton />
    </form>
  )
}

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      Refresh
    </button>
  )
}

export default memo(RefreshButton)
