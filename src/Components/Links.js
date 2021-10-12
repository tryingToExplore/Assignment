import React from "react";
import Api from "../config/Api";
import axios from "axios";


class Link extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            data:'',
            numberOfLinks:'',
            externalLinks:[],
            internalLinks:[],
        }
    }

    componentDidMount() {
        const { data } = this.state;
        axios.get(Api.getPosts).then((response) =>{
            this.setState({data:response.data})
            if(response.data.posts.length) {
                const internalLinks = [];
                const externalLinks = ['https://www.youtube.com/'];
                response.data.posts.forEach(element => {
                    if(element.url.includes('https://ghost-blog.ipxp.in/')) {
                        internalLinks.push(element.url);
                    } else {
                        externalLinks.push(element.url);
                    }
                });
                this.setState({ internalLinks, externalLinks})
            }
        })
}


    render(){
        const { externalLinks,internalLinks } = this.state;
        console.log( internalLinks.length, "array");
        // return  internalLinks.map((links) => {
            return(
                <div className="blog-flex">
                    <div className="number-of-links">
                       <h3> Number of Links</h3>
                       <p>{internalLinks.length + externalLinks.length}</p>
                       <h3>External Links</h3>
                       <p>{externalLinks.length}</p>
                       <h3>Internal Links</h3>
                       <p>{internalLinks.length}</p>
                    </div>

                    <div className="external-links">
                     <h1>External Links</h1>  
                     <ul>
                     {externalLinks.map((external) => {
                         return (
                            <li>{external}</li>
                            )
                        })
                         }
                    </ul>                 
                    </div>


                    <div className="external-links">
                        <h1>Internal Links</h1>
                        <ul>
                            {internalLinks.map((internal, index) => {
                                return (
                                    <li> {internal}</li>
                                )
                            })
                            }
                        </ul>
                    </div>

                </div>
            )
        // })
    }
    
}

export default Link ;