import React, { Component } from 'react'
import Tools from './tools'
import Cards from './cards'
export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            groups: [
                {   
                    title: "mygroup1"
                },
                {
                    title: "mygroup2"
                },
                {
                    title: "mygroup3"
                }
            ],
            queryMatched : '',
        }
        this.findGroups = this.findGroups.bind(this);
        this.setqueryMatchToFalse = this.setqueryMatchToFalse.bind(this);
    }

    findGroups(queryFromChild){      
        let matchingGroups = this.state.groups.filter((cur)=> cur.title.includes(queryFromChild));
        if(matchingGroups.length > 0){
            // query successful, set flag to true
            this.setState({ queryMatched: queryFromChild });
            console.log("find the group");
        }
        else{
            this.setState({ queryMatched: '' });
            console.log("nononon");
        }
    }

    setqueryMatchToFalse(){
        this.setState({ queryMatch: false });
    }

    render(){
        return (
            <section className="home">
                <Tools  findGroups={ this.findGroups }
                        setqueryMatchToFalse={ this.setqueryMatchToFalse }
                        queryMatched={ this.state.queryMatched }/>
                <Cards  groups={ this.state.groups }
                        queryMatch={ this.state.queryMatch } 
                        matchingGroups={ this.state.matchingGroups }/>
            </section>
        )
    }
}