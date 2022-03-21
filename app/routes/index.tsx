import { useLoaderData } from 'remix'
import { datoQuerySubscription } from '~/lib/datocms'
import { useQuerySubscription } from 'react-datocms'
import { main as query } from '~/queries'
import { Posts } from '~/components/Posts'
import { Promotions } from '~/components/Promotions'
import * as Icons from '~/components/Icon'

export const loader = ({ request }: any) => {
  return datoQuerySubscription({
    request,
    query,
  })
}

export default function Index() {
  const { datoQuerySubscription } = useLoaderData()

  const {
    data: { promotions, morePosts },
  } = useQuerySubscription(datoQuerySubscription)

  return (
    <section className='bx-page-row hidden md:flex'>
      <div className='bx-page max-w-112'>
        <Promotions {...{ promotions }} />
        <h2 className='bx-contents-h2 mx-4 md:mx-8 -mb-4'>
          <span>
            <Icons.BulletSolid />
          </span>
          <span>최근 포스트</span>
        </h2>
        <Posts {...{ otherPosts: morePosts }} />
      </div>
    </section>
  )
}
