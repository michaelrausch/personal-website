import { motion } from "framer-motion"
import { GithubRepository } from "../../pages"

interface Props {
    repo: GithubRepository
    odd: boolean
}

const GithubRepoCard: React.FC<Props> = ({ repo, odd }) => {
    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <a href={repo.url} target="_blank" rel="noreferrer">
                <div className={`bg-gray-200 dark:bg-gray-700 p-9 mb-12 rounded-lg transform ${odd ? 'rotate-1 scale-102' : '-rotate-1'}`}>
                    <h2 className="text-xl lg:text-3xl font-extrabold text-gray-900 dark:text-white text-primary">{repo.name}</h2>
                    <small className="text-sm font-semibold text-gray-600 dark:text-gray-300">{repo.full_name} - {repo.stars} Stars</small>
                    <p className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">{repo.desc}</p>
                </div>
            </a>
        </motion.div>
    )
}

export default GithubRepoCard