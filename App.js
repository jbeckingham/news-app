import React, { Component } from 'react';
import './App.css';
import News from './News';
import Sources from './Sources';

class App extends Component {
    constructor() {
        super();
        this.state = {
            sources: [],
            outlet: "bbc-news",
            query: "",
            news: [],
        }
    }

    componentDidMount() {
        this.getSources();
        this.getNews();
    }

    setSources(sources) {
        this.setState(state => ({
            sources: sources
        }));
    }


    setNewsData(myNews) {
        this.setState(state => ({
            news: myNews.articles
        }));

    }

    getSources() {
        var url = 'https://newsapi.org/v2/sources?apiKey={{ADD API KEY HERE}}';
        var req = new Request(url);
        fetch(req)
            .then(response => response.json())
            .then(response => {
                this.setSources(response.sources);
            })
    }

    getNews() {
        var url = 'https://newsapi.org/v2/everything?' +
            'sources=' + this.state.outlet + "&" +
            'apiKey={{ADD API KEY HERE}}';
            if (this.state.query) {
                url += '&q=' + this.state.query;
            }
            var req = new Request(url);
            fetch(req)
            .then(response => response.json())
            .then(myNews => {
                this.setNewsData(myNews);
            })
    }

    onFormSubmit = () => {
        this.getNews();
    }

    setOutlet = (outlet) => {
        this.setState(state => ({
            outlet: outlet
        }));
    }

    setQuery = (query) => {
        this.setState(state => ({
            query: query
        }));
    }

    render() {
        return (
            <div>
                <Sources sources={this.state.sources} setQuery={this.setQuery} setOutlet={this.setOutlet} onFormSubmit={this.onFormSubmit}></Sources>
                <News news={this.state.news}> </News>
            </div>
        );
    }
}

export default App;
