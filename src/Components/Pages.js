import React from "react";
import Api from "../config/Api";
import axios from "axios";


class Pages extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            isLoading:false,
            data:[],
            dataWithoutDescription:[],
            longDescription:[],
            longUrl:[],
            featureImage:[],
            tooLong:[],
            tooShort:[],
        }
    }


    componentDidMount(){
        const { data, dataWithoutDescription,longDescription,longUrl,featureImage,tooShort,tooLong } = this.state;
        axios.get(Api.getPosts).then((res) => {
            this.setState({data:res.data});
            if(res.data.posts && res.data.posts.length){
                    res.data.posts.forEach(ele =>{

                        if(ele.meta_description){
                        dataWithoutDescription.push(ele.title)
                        if(ele.meta_description.length >= 150 ) {
                            longDescription.push(ele.title)
                        }
                        }
                        if(ele.url){

                            if(ele.url.length >= 90){
                                longUrl.push(ele.title) 
                            }
                        }
                        if(!ele.feature_image){
                            featureImage.push(ele.title)
                        }
                        if(ele.html){
                            if(ele.html.length <= 250){
                                tooShort.push(ele.title)
                                console.log(ele.html.length,"ele.html.length")
                            }
                            if(ele.html.length >= 1500) {
                                tooLong.push(ele.title)
                            }
                            console.log(ele.html.length,"hello");
                        }
                    });
                    this.setState({dataWithoutDescription, longDescription, longUrl, featureImage, tooLong,tooShort})
                }
        }
        )

    }



    render(){
        const {data , dataWithoutDescription, longDescription, longUrl ,featureImage,tooLong,tooShort} = this.state;
        console.log(tooShort,"longDescription");
        return(
            <>
            <div className="blog-flex">
                <div className="pages-blocks">
                    <h4>Posts Without Meta Description</h4>
                    <ol>
                            {dataWithoutDescription.map((data=> {
                            return(   
                                <li>{data}</li>
                            )
                            })
                            )}
                    </ol>
                </div>
                <div className="pages-blocks">
                    <h4>Too Long Description</h4>
                    <ol>
                            {longDescription.map((data=> {
                            return(   
                                <li>{data}</li>
                            )
                            })
                            )}
                    </ol>
                </div>
                <div className="pages-blocks">
                    <h4> Long Url</h4>
                    <ol>
                            {longUrl.map((data=> {
                            return(   
                                <li>{data}</li>
                            )
                            })
                            )}
                    </ol>
                </div>


            </div>
            <div  className="blog-flex">
                <div className="pages-blocks">
                        <h4> Posts without Featured Image</h4>
                        {featureImage.length == 0 ?  <p>Awesome! No posts found</p> : (
                        <ol>
                                {featureImage.map((data=> {
                                return(   
                                    <li>{data}</li>
                                )
                                })
                                )}
                        </ol>
                        ) }
                    </div>
                    <div className="pages-blocks">
                    <h4> Too Long Post</h4>
                    <ol>
                            {tooLong.map((data=> {
                            return(   
                                <li>{data}</li>
                            )
                            })
                            )}
                    </ol>
                </div>
                <div className="pages-blocks">
                    <h4> Too Short post</h4>
                    {tooShort.length === 0 ? (<p>Awesome! No posts found</p>) : (
                    <ol>
                            {tooShort.map((data=> {
                            return(   
                                <li>{data}</li>
                            )
                            })
                            )}
                    </ol>
                      )}
                </div>

            </div>
            </>
        )
    }
    
}

export default Pages;