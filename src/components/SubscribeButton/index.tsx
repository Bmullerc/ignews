import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

interface SubsbriceButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubsbriceButtonProps) {
  const { data: session } = useSession();

  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    

  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe Now
    </button>
  )
}