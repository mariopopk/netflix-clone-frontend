import { Typography, Modal, Button, Spinner } from '@mariopopk/react-lightning'
import { Show } from '../../apollo/types/Show/ShowQuery'
import { FeaturedMediaHorizontal } from '../Routes/components/Home/components/FeaturedMedia/FeaturedMedia'
import { UilTimes } from '@iconscout/react-unicons'
import ShowModalDetailsBar from './ShowModalDetailsBar'
import styles from './ShowModal.module.css'

interface ShowModalProps {
  show?: Show
  open: boolean
  handleClose?: () => void
  loading: boolean
}

export default function ShowModal({
  show,
  open,
  handleClose,
  loading,
}: ShowModalProps) {
  return (
    <>
      <Modal isOpen={open} onClose={() => handleClose?.()}>
        {loading && <Spinner />}
        {show && (
          <div style={{ width: '920px', maxWidth: '100vw' }}>
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

            <div style={{ margin: '1.5rem 2rem' }}>
              <div className={styles.ShowModalColumns}>
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
        )}
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
        <div style={{ marginBottom: '0.75rem' }}>
          <Typography
            fontWeight="semibold"
            color="secondary"
            variant="caption"
            component="span"
          >
            {title}:{' '}
          </Typography>
          <ItemList list={data} />
        </div>
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
