import { memo } from 'react'
import Image from 'next/image'

interface CommitProps {
  message: string
  authorName: string
  timestamp: string
  sha: string
  authorAvatarUrl: string
}

const Commit: React.FC<CommitProps> = ({
  message,
  authorName,
  timestamp,
  sha,
  authorAvatarUrl,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <div className="flex items-center">
        <Image
          src={authorAvatarUrl}
          alt={`${authorName}'s avatar`}
          className="rounded-full mr-4"
          width={50}
          height={50}
        />

        <div className="flex-1">
          <p
            className="text-lg font-bold overflow-hidden break-words"
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
          <p className="text-sm text-gray-400 break-all">sha: {sha}</p>
        </div>
      </div>
    </div>
  )
}

export default memo(Commit)
