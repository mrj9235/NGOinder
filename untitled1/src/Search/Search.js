import React, {Component} from 'react';

class Search extends Component{

    search(){
        let term = window.location.href.split('=');
        let name = " ";
        let content = ["100 Forests", "Abolition 2000", "Baha'i International Community", "Center of Concern",
        "Del Children's Hospital", "Extra Life", "The Franklin and Eleanor Roosevelt Institute",
        "GCS (Global Cooperation Society) International", "Habitat for Humanity",
            "Information Habitat: Where Information Lives", "Jungle Restoration Foundation", "Koala Protection Agency",
        "The League of Women Voters", "Mother Nature", "National Council on Family Relations", "Organic Stuff Committee",
        "Pathways To Peace", "Quaker United Nations Office", "Recycling for the Future",
        "Society for Conservation and Protection of Environment (SCOPE)", "Together Foundation for Global Unity",
        "UNA-USA - United Nations Association-United States of America", "Voter Rights Group", "Wainwright House",
        "Xylophones Are Good for the Environment", "Yachay Wasi", "Zoologist Appreciation Foundation"];
        let ul = document.createElement('ul');

        for(let x = 0; x < term.size; x++){
            name.concat(term[x])
        }

        if(name != " "){
            for(let i = 0; i < content.size; i++){
                if(content[i].includes(name)){
                    let li = document.createElement('li');
                    li.innerText = content[i];
                    ul.appendChild(li);
                }
            }
            return(
                <div dangerouslySetInnerHTML={{__html: ul}}></div>
            )
        }
        else{
            return(
            <div>
                <h3>
                    No Results
                </h3>
            </div>
            )
        }
    }

    render(){
        return(
            <body>
                <h2>
                    Search Results
                </h2>
                {this.search()}
            </body>
        )
    }
}

export default Search;