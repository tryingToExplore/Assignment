const baseUrl = 'https://ghost-blog.ipxp.in/ghost/api/v3/content/';
const contentApiKey = '8196190b08906dda0ebf6e6f5d';
    
const Api = {
    getPosts: `${baseUrl}/posts/?key=${contentApiKey}`,
    getPages:`${baseUrl}/pages/?key=${contentApiKey}`,
    getAuthors:`${baseUrl}/authors/?key=${contentApiKey}`,
    getTags:`${baseUrl}/tags/?key=${contentApiKey}`,
    getpublishedposts:`${baseUrl}/publishedposts/?key=${contentApiKey}`,
}

export default Api;