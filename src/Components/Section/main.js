import React, { Component } from 'react';
import {Link } from "react-router-dom";

import Meg from "./Meg.jpg";
import Mithali from "./Mithali.jpg";
import Harman from "./Harman.jpg";

import Axios from 'axios';
import "./main.css";
require('dotenv').config();

console.log(process.env.REACT_APP_API_KEY);




class Menu extends Component {
    state = {
        googleNewsArticles: [0],

    }
    intervalID;
    componentDidMount = () => {
    this.getArticles();
}
componentWillUnmount() {
    clearTimeout(this.intervalID);
}
getArticles = () => {
    console.log("Getting Articles");

    Axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}')
        .then(
            res => {
                console.log(res.data.articles);
                this.setState({ googleNewsArticles: this.state.googleNewsArticles.concat(res.data.articles).splice(1, 5) });
                this.intervalID = setTimeout(this.getArticles.bind(this), 5000);
            }
        )
        .catch(err => console.log(err))
}

render() {
    return (
        <main className="Menu">

            <div className="Main">


                <div className="flex-container">
                    <div className="flex-item">
                        <ul>
                            <li><Link to="/Blogs/Blog1">Meg Lanning</Link></li>
                        </ul>
                        <img src={Meg} alt="MEGASTAR" />
                        <h6>11/18/2019</h6>
                        <p>Meg Lanning-The MEGastar of Women's cricket:-</p>
                        <p>
                           
                        Cricket star Meg Lanning has come from the only girl on the team to Australian cricket captain!
                        Meg Lanning has emerged as a household name in world cricket as captain of both Australia and the Perth Scorchers.But perhaps even more significantly she has become what she never had as a kid growing up — a visible cricket role model for young girls.
                        </p>

                    </div>
                    
                    <div className="flex-item">

                        <ul>
                            <li><Link to="/Blogs/Blog2">Mithali Raj</Link></li>
                        </ul>
                        <h6>11/10/2019</h6>
                        <img src={Mithali} alt="Backbone of Indian Women's cricket" />
                        
                        <p>
                        Mithali Raj- The back bone of Women's cricket in India </p>
                        <p>From starting off as a girl-wonder who hit an unbeaten century on ODI debut at 17, to becoming the linchpin of India's line-up.

                            
                        </p>
                    </div>

                    <div className="flex-item">

                        <ul>
                            <li><Link to="/Blogs/Blog3">Harmanpreet Kaur </Link></li>
                        </ul>
                        <h6>11/05/2019</h6>

                        <img src={Harman} alt="Harry" />
                         <p>
                            Harmanpreet Kaur- The girl who took women's cricket to the next level!
                        </p>
                        <p>
                        Harmanpreet Kaur’s power-hitting and athletic fielding have been at the forefront of revolutionising women’s cricket in India.
                        She has changed the whole picture of women's cricket withe her aggresive style and attitude with unique play.
                        She got a name "HarMonster" for her monster inning in Wome's world cup semi-final 2017 against the world's best team- Australian Wome's cricket team.

                        </p>
                    </div>
                </div>







            </div>

            <div className="Nav">
                <Link to="/">Home</Link>
                {this.state.googleNewsArticles.map((article, i) =>
                    <div>
                        <p>{i + 1}) {article.title}</p>
                    </div>
                )}
            </div>
        </main>

    );
}
}


export default Menu;