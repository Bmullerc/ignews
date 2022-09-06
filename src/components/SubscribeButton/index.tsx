import styles from './styles.module.scss'

interface SubsbriceButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubsbriceButtonProps) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe Now
    </button>
  )
}