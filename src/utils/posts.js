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

export const filterPosts = (searchTerm, posts) => {
    if (searchTerm.length >= 3) {
        return posts.filter(post => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    return [];
}
