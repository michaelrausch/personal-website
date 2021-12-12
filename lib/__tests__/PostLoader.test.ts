import 'jest'
import { getAllPostIds, getAllPosts, getNumberOfPages, getPostsForPage, TEST } from '../PostLoader'

/**
 * @jest-environment node 
 */

// Number of test posts in the /content/tests directory
const NUM_TEST_POSTS = 5

describe('Markdown Post Loader', () => {
    
    it('getAllPosts() should return all posts in the test directory', () => {
        let posts = getAllPosts(TEST)

        expect(posts.length).toBe(NUM_TEST_POSTS)
    }) 

    it('Each object returned from getAllPosts() should contain the post ID and the frontmatter', () => {
        let posts = getAllPosts(TEST)

        expect(posts[0].id).toBe('01-test')
        expect(posts[1].id).toBe('02-test')

        expect(posts[0].title).toBe('test')
        expect(posts[1].title).toBe('test')
    })

    it('getAllPostIds() should return all the post IDs', () => {
        let posts = getAllPostIds(TEST)

        expect(posts[0].params.id).toBe('01-test')
        expect(posts[1].params.id).toBe('02-test')
    })

    it('getNumberOfPages() should return 2 pages if postsPerPage is one less than the number of posts', () => {
        let count = getNumberOfPages(TEST, 4)

        expect(count).toBe(2)
    })
    
    it('getNumberOfPages() should return the total number of posts when postsPerPage is set to 1', () => {
        let count = getNumberOfPages(TEST, 1)

        expect(count).toBe(NUM_TEST_POSTS)
    })

    it('getPostsForPage() should return all posts when postsPerPage is greater than the total number of posts', () => {
        let count = getPostsForPage(TEST, 1, 555)

        expect(count.length).toBe(NUM_TEST_POSTS)
    })

    it('getPostsForPage() should return 3 posts when we ask for the first 3 posts on page 1', () => {
        let count = getPostsForPage(TEST, 1, 3)

        expect(count.length).toBe(3)
    })

    it('getPostsForPage() should return the last remaining post when we ask for page 2, with 4 posts per page', () => {
        let count = getPostsForPage(TEST, 2, 4)

        expect(count.length).toBe(1)
    })
})