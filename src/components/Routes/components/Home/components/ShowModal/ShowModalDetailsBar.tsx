import { Typography, Stack } from '@mariopopk/react-lightning'
import { Show } from '../../../../../../apollo/types/Show/ShowQuery'
import {
  UilClosedCaptioning,
  UilCommentMessage,
} from '@iconscout/react-unicons'

interface ShowModalDetailsBarProps {
  releaseYear: Show['releaseYear']
  maturityLevel: Show['maturityLevel']
  subtitles: Show['subtitles']
  audio: Show['audio']
}

export default function ShowModalDetailsBar({
  releaseYear,
  maturityLevel,
  subtitles,
  audio,
}: ShowModalDetailsBarProps) {
  return (
    <>
      <Stack spacing={3}>
        <Typography component="span">{releaseYear}</Typography>

        <Typography
          component="span"
          variant="caption"
          style={{
            border: '1px solid gray',
            padding: '0 0.5rem',
          }}
        >
          {maturityLevel}
        </Typography>

        {subtitles && <UilClosedCaptioning />}
        {audio && <UilCommentMessage />}
      </Stack>
    </>
  )
}
