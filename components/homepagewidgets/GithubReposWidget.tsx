interface Props {
    repos: GithubRepository[]
}

const GithubReposWidget: React.FC<Props> = ({ repos }) => {
    return (
        <>
            {repos.map((repo, key) => {
                return <div key={key} className="bg-gray-200 dark:bg-gray-800 p-8 mb-10 rounded-lg">
                    <a href={repo.url} target="_blank">
                        <h2 className="text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-white text-primary">{repo.name}</h2>
                        <small className="text-sm font-semibold text-gray-600 dark:text-gray-300">{repo.full_name} - {repo.stars} Stars</small>
                        <p className="mt-2 text-primary font-medium text-gray-900 dark:text-gray-100">{repo.desc}</p>
                    </a>

                </div>
            })}
        </>
    )
}

export interface GithubRepository {
    name: string,
    full_name: string,
    url: string,
    git: string,
    desc: string,
    updated_at: Date,
    stars: number
}

export default GithubReposWidget