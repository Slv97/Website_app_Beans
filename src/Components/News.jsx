import React, { Component } from 'react';
import '../css/News.css'
import '../css/Section.css'

class News extends Component {
    render() {
        return(
            <section className="section news">
                <div className="section_r news_r">                    
                    <div className="news_r_content"> 
                         <img src="/images/head_back2.jpg" alt="news"/>   
                    </div>
                </div>
                <div className="section_l">
                    <div className="section_l_head">
                        <h3>Latest News</h3>                                              
                    </div>                     
                    <div className="news_l_content">
                        <div className="news_l_content_photo"> 
                            <img src="/images/news1.jpg" alt="news1"/>   
                        </div>                    
                        <div className="news_l_content_head">How To Be A Hipster: A Guide For The Best Hipster Cafes In Berlin</div>
                        <div className="news_l_content_text">I often go to sleep thinking about the cup of coffee I’m going to have the next morning. I adore it! These basic rules will help you learn how to make coffee to prevent unwanted bitterness and virtually guarantee a satisfying cup of coffee every time.</div> 
                        <div className="news_content_description_aut">by Harry Lucas</div>               
                    </div> 
                    <div className="news_l_content">
                        <div className="news_l_content_photo"> 
                            <img src="/images/news2.jpg" alt="news2"/>   
                        </div>                    
                        <div className="news_l_content_head">Boutique Cafe in Seoul</div>
                        <div className="news_l_content_text">All coffee enthusiasts know that the ideal way to explore a new city is through its coffee shops, so naturally my week in Seoul, South Korea, was spent sipping my way through its small but swiftly expanding specialty coffee community.</div> 
                        <div className="news_content_description_aut">by Harry Lucas</div>               
                    </div> 
                    <div className="news_l_content">
                        <div className="news_l_content_photo"> 
                            <img src="/images/news3.jpg" alt="news3"/>   
                        </div>                    
                        <div className="news_l_content_head">10 Best Coffee Types in the World</div>
                        <div className="news_l_content_text">The world’s finest arabica coffees are listed by country in no particular order since the biggest factor is personal preference. For example, some people might prefer the winey and fruity acidity of a Kenyan coffee over the classic balance of a Colombian coffee.</div> 
                        <div className="news_content_description_aut">by Harry Lucas</div>               
                    </div> 
                </div>
            </section>
        );
    }
}

export default News;