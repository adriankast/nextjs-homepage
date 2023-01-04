import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'

export default function PostHeader({ title, coverImage, date, coverImageInfo, coverImageUrl }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} slug={false} srcInfo={coverImageInfo} srcUrl={coverImageUrl} />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-lg italic">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
