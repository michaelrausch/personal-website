import axios from "axios";
import { useEffect, useState } from "react";
import GithubRepoCard from "./GithubRepoCard";

const GH_API_URL = process.env.NEXT_PUBLIC_GITHUB_API_URL || "https://api.github.com/"

const GithubRepoList: React.FC<Props> = ({username}) => {
    const [repos, setRepos] = useState<GithubRepository[]>([]);

    useEffect(() => {
        var repos: GithubRepository[] = []

        axios.get(GH_API_URL + "users/" + username + "/repos")
            .then(response => {
                response.data.forEach((repo: any) => {
                    // Don't use repos that are archived, dont havve a description or are forked
                    if (repo.archived) return
                    if (!repo.description) return
                    if (repo.fork) return

                    repos.push({
                        name: repo.name,
                        full_name: repo.full_name,
                        url: repo.html_url,
                        git: repo.git_url,
                        desc: repo.description,
                        updated_at: repo.updated_at,
                        stars: repo.stargazers_count
                    })

                    // Sort newest first
                    repos.sort(function (a, b) {
                        return +new Date(b.updated_at) - +new Date(a.updated_at);
                    });

                    repos = repos.slice(0, 3)
                    setRepos(repos);
                });
            })
    }, [username])

    return (
        <>
            {repos.map((repo, key) => {
                var odd = (key % 2) ? true : false;
                return <GithubRepoCard repo={repo} key={key} odd={odd} />
            })}
        </>
    )
}

interface Props {
    username: string;
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

export default GithubRepoList;