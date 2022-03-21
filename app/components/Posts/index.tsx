import { Link } from 'remix'
import { Image } from 'react-datocms'
import { Avatar } from '~/components/Avatar'
import { Date } from '~/components/Date'
import { PostsProps } from '~/types'

export { Post } from '~/components/Posts/Post'

export function Posts({ firstPost, otherPosts, category }: PostsProps) {
  return (
    <>
      {firstPost && (
        <div className='bx-section'>
          <section className='bx-post'>
            <Link
              className='bx-post-link'
              to={`/${category || firstPost.category?.name?.toLowerCase() || 'posts'}/${firstPost.slug}`}
            >
              <div className='bx-post-thumb'>
                <Image className='bx-thumbnail' data={firstPost.coverImage.responsiveImage} />
              </div>
              <div className='bx-post-info'>
                <div className='bx-post-meta'>
                  <h5 className='bx-post-title'>{firstPost.title}</h5>
                  <div className='bx-post-desc'>{firstPost.excerpt}</div>
                  <div className='bx-post-desc'>
                    <Date dateString={firstPost.date} />
                  </div>
                </div>
                <div className='bx-post-avatar'>
                  <Avatar name={firstPost.author.name} picture={firstPost.author.picture} />
                </div>
              </div>
            </Link>
          </section>
        </div>
      )}
      {otherPosts && (
        <div className='bx-section'>
          <ul>
            {otherPosts.map((post: any) => (
              <li className='bx-post bx-other-post' key={post.slug}>
                <Link
                  className='bx-post-link'
                  to={`/${category || post.category?.name?.toLowerCase() || 'posts'}/${post.slug}`}
                >
                  <div className='bx-post-thumb'>
                    <Image className='bx-thumbnail' data={post.coverImage.responsiveImage} />
                  </div>
                  <div className='bx-post-info'>
                    <div className='bx-post-meta'>
                      <h5 className='bx-post-title'>{post.title}</h5>
                      <div className='bx-post-desc'>{post.excerpt}</div>
                      <div className='bx-post-desc'>
                        <Date dateString={post.date} />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
