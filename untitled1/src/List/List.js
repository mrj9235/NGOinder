import React, {Component} from 'react';

class List extends Component{

    makeList(listID, arr){

        if(arr instanceof Array){
            let arrSorted = arr.sort();
            //let list = <ul style="list-style-type:disc"> </ul>;

            for(let x = 0; x < arrSorted.length; x++){
                let newLi = document.createElement("li");
                newLi.innerHTML = arrSorted[x];
                let newList = document.getElementById(listID);
                newList.appendChild(newLi);
            }
        }
    }


    render(){
        return(
            <body>
                <h2>
                    All NGOs
                </h2>
                <h3>
                    #
                </h3>
                <ul type = "disc">
                    100 Forests
                </ul>
                <h3>
                    A
                </h3>
                <ul id="aNGO" type = "disc">
                    /**{this.makeList("aNGO",['Apples', 'Amanda', 'Army'])}*/
                    Abolition 2000
                </ul>
                <h3>
                    B
                </h3>
                <ul type = "disc">
                    Baha'i International Community
                </ul>
                <h3>
                    C
                </h3>
                <ul type = "disc">
                    Center of Concern
                </ul>
                <h3>
                    D
                </h3>
                <ul type = "disc">
                    Del Children's Hospital
                </ul>
                <h3>
                    E
                </h3>
                <ul type = "disc">
                    Extra Life
                </ul>
                <h3>
                    F
                </h3>
                <ul type = "disc">
                    The Franklin and Eleanor Roosevelt Insititute
                </ul>
                <h3>
                    G
                </h3>
                <ul type = "disc">
                    GCS (Global Cooperation Society) International
                </ul>
                <h3>
                    H
                </h3>
                <ul type = "disc">
                    Habitat for Humanity
                </ul>
                <h3>
                    I
                </h3>
                <ul type = "disc">
                    Information Habitat: Where Information Lives
                </ul>
                <h3>
                    J
                </h3>
                <ul type = "disc">
                    Jungle Restoration Foundation
                </ul>
                <h3>
                    K
                </h3>
                <ul type = "disc">
                    Koala Protection Agency
                </ul>
                <h3>
                    L
                </h3>
                <ul type = "disc">
                    The League of Women Voters
                </ul>
                <h3>
                    M
                </h3>
                <ul type = "disc">
                    Mother Nature
                </ul>
                <h3>
                    N
                </h3>
                <ul type = "disc">
                    National Council on Family Relations
                </ul>
                <h3>
                    O
                </h3>
                <ul type = "disc">
                    Organic Stuff Committee
                </ul>
                <h3>
                    P
                </h3>
                <ul type = "disc">
                    Pathways To Peace
                </ul>
                <h3>
                    Q
                </h3>
                <ul type = "disc">
                    Quaker United Nations Office
                </ul>
                <h3>
                    R
                </h3>
                <ul type = "disc">
                    Recycling for the Future
                </ul>
                <h3>
                    S
                </h3>
                <ul type = "disc">
                    Society for Conservation and Protection of Environment (SCOPE)
                </ul>
                <h3>
                    T
                </h3>
                <ul type = "disc">
                    Together Foundation for Global Unity
                </ul>
                <h3>
                    U
                </h3>
                <ul type = "disc">
                    UNA-USA - United Nations Association-United States of America
                </ul>
                <h3>
                    V
                </h3>
                <ul type = "disc">
                    Voter Rights Group
                </ul>
                <h3>
                    W
                </h3>
                <ul type = "disc">
                    Wainwright House
                </ul>
                <h3>
                    X
                </h3>
                <ul type = "disc">
                    Xylophones Are Good for the Environment
                </ul>
                <h3>
                    Y
                </h3>
                <ul type = "disc">
                    Yachay Wasi
                </ul>
                <h3>
                    Z
                </h3>
                <ul type = "disc">
                    Zoologist Appreciation Foundation
                </ul>
            </body>
        )
    }
}

export default List;