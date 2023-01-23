import { Typography, Modal, Button } from '@mariopopk/react-lightning'
import { Show } from '../../apollo/types/Show/ShowQuery'
import { FeaturedMediaHorizontal } from '../Routes/components/Home/components/FeaturedMedia/FeaturedMedia'
import { UilTimes } from '@iconscout/react-unicons'
import ShowModalDetailsBar from './ShowModalDetailsBar'

interface ShowModalProps {
  show?: Show
  open: boolean
  handleClose?: () => void
}

export default function ShowModal({ show, open, handleClose }: ShowModalProps) {
  return (
    <>
      <Modal isOpen={open} onClose={() => handleClose?.()}>
        <div
          style={{
            maxHeight: '90vh',
            minWidth: '100%',
            maxWidth: '800px',
            position: 'relative',
          }}
        >
          <div>
            <Button
              onPress={() => handleClose?.()}
              backgroundColor="dark"
              color="light"
              style={{
                padding: '0.25rem',
                position: 'absolute',
                zIndex: 1,
                right: '1%',
                top: '1%',
                borderRadius: '50%',
              }}
            >
              <UilTimes />
            </Button>

            <FeaturedMediaHorizontal
              innerWidth="50%"
              show={show}
              showMediaButtongroup={false}
              showMediaText={false}
            />
          </div>

          <div style={{ margin: '1.5rem 2rem' }}>
            <div
              style={{
                display: 'grid',
                width: '100%',
                gridTemplateColumns: '2fr 1fr',
                columnGap: '1rem',
              }}
            >
              <section>
                <ShowModalDetailsBar
                  releaseYear={show?.releaseYear}
                  maturityLevel={show?.maturityLevel}
                  subtitles={show?.subtitles}
                  audio={show?.audio}
                />

                {show?.description && (
                  <Typography variant="base" fontWeight="normal">
                    {show?.description}
                  </Typography>
                )}

                <ModalInfo title="Cast" data={show?.cast?.data} />
                <ModalInfo title="Audio" data={show?.audio?.data} />
                <ModalInfo title="Subtitles" data={show?.subtitles?.data} />
              </section>
              <section>
                <ModalInfo title="Starring" data={show?.starring?.data} />
                <ModalInfo title="Genres" data={show?.genres?.data} />
              </section>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

interface ModalInfoProps {
  title: string
  data?: Item[]
}

function ModalInfo({ title, data }: ModalInfoProps) {
  return (
    <>
      {data?.length ? (
        <>
          <Typography
            fontWeight="semibold"
            color="secondary"
            variant="caption"
            component="span"
          >
            {title}:{' '}
          </Typography>
          <ItemList list={data} />
        </>
      ) : null}
    </>
  )
}

interface Item {
  id?: string
  attributes?: {
    name?: string
  }
}

interface ItemListProps {
  list?: Item[]
}

function ItemList({ list }: ItemListProps) {
  return (
    <>
      {list?.map((item, i) => {
        const last = i === list.length - 1
        return (
          <Typography key={item.id} component="span" variant="caption">
            {item?.attributes?.name}
            {last ? <br /> : ', '}
          </Typography>
        )
      })}
    </>
  )
}
