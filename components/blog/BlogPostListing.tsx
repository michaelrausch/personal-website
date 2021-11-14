
import Link from 'next/link';

interface Props {
    post: IBlogPost
}

const BlogPostListing: React.FC<Props> = ({post}) => {
    return (
        <article className="mb-12 text-left">
            <Link href={"/post/" + post.id} passHref>
                <a>
                    <div className="max-w-2xl cursor-pointer text-gray-900 dark:text-gray-100 mx-auto sm:mx-0 text-center sm:text-left">
                        <h2 className="text-xl lg:text-2xl font-extrabold text-primary ">{post.title}</h2>
                        <p className="text-sm my-1 font-sourcecode">{post.date} - {post.tags}</p>
                        <p className="text-lg text-gray-700 dark:text-gray-200 my-3 font-medium">{post.description}</p>
                    </div>
                </a>
            </Link>
        </article>
    )
}

export interface IBlogPost {
    id: string;
    title: string;
    date: Date;
    tags: string;
    description: string;
}

export default BlogPostListing;