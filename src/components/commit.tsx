import { memo } from 'react'

interface CommitProps {
  message: string
  authorName: string
  timestamp: string
  sha: string
  authorAvatarUrl: string
  isLoading: boolean
}

const Commit: React.FC<CommitProps> = ({
  message,
  authorName,
  timestamp,
  sha,
  authorAvatarUrl,
  isLoading,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <div className="flex items-center">
        <img
          src={authorAvatarUrl}
          alt={`${authorName}'s avatar`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="flex-1">
          <p
            className="text-lg font-bold overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
            }}
            title={message}
          >
            {message}
          </p>
          <p className="text-gray-700">by {authorName}</p>
          <p className="text-gray-500">{timestamp}</p>
          <p className="text-sm text-gray-400">sha: {sha}</p>
        </div>
      </div>
    </div>
  )
}

export default memo(Commit)
