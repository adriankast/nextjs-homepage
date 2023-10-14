import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost ( {
  title,
  coverImage,
  date,
  excerpt,
  slug,
} )
{
  return (
    <section>
        <div className="grid gap-4 lg:grid-cols-2 grid-cols-1 mb-40 mt-40">
          <div>
            <CoverImage
              title={title}
              src={coverImage}
              slug={slug}
              height={620}
              width={1240}
            />
          </div>
          <div>
            <h3 className="mb-4 text-3xl lg:text-5xl leading-tight">
              <Link href={`/posts/${ slug }`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg italic">
              <DateFormatter dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          </div>
        </div>
    </section>
  );
}
