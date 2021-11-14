import { GithubRepository } from "../../pages"

interface Props {
    repo: GithubRepository
}

const GithubRepoCard: React.FC<Props> = ({ repo }) => {
    return (
        <>
            <div className="bg-gray-200 dark:bg-gray-700 p-8 mb-10 rounded-lg">
                <a href={repo.url} target="_blank" rel="noreferrer">
                    <h2 className="text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-white text-primary">{repo.name}</h2>
                    <small className="text-sm font-semibold text-gray-600 dark:text-gray-300">{repo.full_name} - {repo.stars} Stars</small>
                    <p className="mt-2 text-primary font-medium text-gray-900 dark:text-gray-100">{repo.desc}</p>
                </a>
            </div>
        </>
    )
}

export default GithubRepoCard