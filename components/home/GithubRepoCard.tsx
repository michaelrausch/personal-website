import { motion } from "framer-motion"
import { GithubRepository } from "./GithubRepoList"

interface Props {
    repo: GithubRepository
    odd: boolean
}

const GithubRepoCard: React.FC<Props> = ({ repo, odd }) => {
    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <a href={repo.url} target="_blank" rel="noreferrer" style={{color: "#163300"}}>
                <div className={`dark:bg-gray-700 p-9 mb-12 rounded-lg transform ${odd ? 'rotate-1 scale-102' : '-rotate-1'}`} style={{backgroundColor: "#E2F8D4"}}>
                    <h2 className="text-xl lg:text-3xl font-extrabold text-primary" style={{color: "#163300"}}>{repo.name}</h2>
                    <small className="text-sm font-semibold">{repo.full_name} - {repo.stars} Stars</small>
                    <p className="mt-2 text-lg font-medium">{repo.desc}</p>
                </div>
            </a>
        </motion.div>
    )
}

export default GithubRepoCard
