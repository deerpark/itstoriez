import { StructuredText, Image } from 'react-datocms'
import { Post as PostType } from '~/types'

type PostProps = {
  post: PostType,
  morePosts?: PostType[],
  categoryId?: string,
}

export function Post({ post /* , morePosts  */ }: PostProps) {
  return (
    <>
      <div className='bx-article'>
        <div className='bx-article-body'>
          <div className='prose-sm prose-slate dark:prose-invert'>
            <StructuredText
              data={post.content}
              renderBlock={({ record }: any) => {
                if (record.__typename === 'ImageBlockRecord') {
                  return <Image className='bx-article-image' data={record.image.responsiveImage} />
                }

                return (
                  <>
                    <p>Don't know how to render a block!</p>
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </>
                )
              }}
            />
          </div>
        </div>
      </div>
      {/* <section className='section'>
        <div className='section__title'>More posts</div>
        <ul className='grid'>
          {morePosts.map((post: any) => (
            <li key={post.slug} className='grid__item'>
              <Link to={`/posts/${post.slug}`} className='grid__link'>
                <div>
                  <Image className='grid__image' data={post.coverImage.responsiveImage} />
                  <p className='grid__title'>{post.title}</p>
                  <Date dateString={post.date} />
                  <p className='date'>{post.excerpt}</p>
                  <Avatar name={post.author.name} picture={post.author.picture} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  )
}
