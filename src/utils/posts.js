export const formatPosts = (posts) => {
    return posts.map(post => {
        const { id, title, body } = post;
        const excerpt = body.split('.')[0];
        // This is a very rudimentary way to extract the first paragraph from the body.

        return {
            id,
            title,
            body,
            excerpt,
        }
    });
}
