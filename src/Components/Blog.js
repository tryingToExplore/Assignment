import React from "react";
import axios from "axios";
import Api from '../config/Api';
import Charts from '../Components/Charts';
// import { Chart } from 'react-charts'



class Blog extends React.Component{

constructor(props){
    super(props);
    this.state={
        posts: '',
        Pages:'',
        Authors:'',
        Tags:'',
        isLoading:true,
    };
    this.renderPostData=this.renderPostData.bind(this); 
}

componentDidMount(){
  const PostData=axios.get(Api.getPosts);
  const PagesData=axios.get(Api.getPages);
  const AuthorsData=axios.get(Api.getAuthors);
  const TagsData=axios.get(Api.getTags);
  Promise.all([PostData,PagesData,AuthorsData,TagsData]).then((responses) => {
    this.setState({posts:responses[0].data})
    this.setState({Pages:responses[1].data})
    this.setState({Authors:responses[2].data})
    this.setState({Tags:responses[3].data})
  })
}


renderPostData(){
    const {posts,Pages,Tags,Authors} = this.state;
    if(posts) {
        return(
            <div>
                {posts.meta.pagination.total}
            </div>
        )
    }
     }

     renderPagesData(){
        const {posts,Pages,Tags,Authors} = this.state;
        if(Pages) {
            return(
                <div>
                    {Pages.meta.pagination.total}
                </div>
            )
        }
         }


     renderTagsData(){
            const {posts,Pages,Tags,Authors} = this.state;
            if(Tags) {
                return(
                    <div>
                        {Tags.meta.pagination.total}
                    </div>
                )
            }
             }

     renderAuthorsData(){
                const {posts,Pages,Tags,Authors} = this.state;
                if(Authors) {
                    return(
                        <div>
                            {Authors.meta.pagination.total}
                        </div>
                    )
                }
                 }


    renderPublishedPostlist() {
        const{ posts }= this.state;
    if (posts.posts && posts.posts.length){
        let latestPost = posts.posts;
        if(latestPost.length > 5){
        latestPost.splice(4, posts.posts.length - 5)
        // console.log(latestPost);
        }
                   return latestPost.map((Publishedlist) =>    {
                
                return(
                     <ul>
                         <li>
                             {Publishedlist.title}
                         </li>
                     </ul>
                )
    });
    } 
}





render() {
    const {posts,Pages,Tags,Authors} = this.state;
    console.log(posts,"posts");
    return(
     <>
        <div className="blog-flex">
            <div className="blog-margin">
                <p>Number of posts</p>
                <h1>{this.renderPostData()}</h1>
            </div>
            <div className="blog-margin">
                <p>Number of Pages</p>
                <h1>{this.renderPagesData()}</h1>
            </div>
            <div className="blog-margin">
                <p>Number of Authors</p>
                <h1>{this.renderTagsData()}</h1>
            </div>
            <div className="blog-margin">
                <p>Number of Tags</p>
                <h1>{this.renderAuthorsData()}</h1>
            </div>
        </div>
        <div className="blog-title-chart-container">


        <div className="blog-title-block">
                {this.renderPublishedPostlist()}
        </div>
        <div className="blog-title-block">
            {/* {this.MyChart()} */}
            <Charts />
                {/* {this.renderPublishedPostlist()} */}
        </div>
        </div>
     </>
    )
}

}

export default Blog