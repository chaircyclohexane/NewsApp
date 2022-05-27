import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'


export class News extends Component {
    static propTypes = {

    }
    articles = [
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Dailymail.com",
            "title": "'RIP to a legend of our game': Tom Brady and LeBron James lead tributes to John Madden - Daily Mail",
            "description": "The NFL says Hall of Fame coach and beloved broadcaster John Madden has died at age 85. Madden retired from coaching at age 42 after a 9-7 season in 1978, and then took up broadcasting.",
            "url": "https://www.dailymail.co.uk/news/article-10351451/The-NFL-says-Hall-Fame-coach-beloved-broadcaster-John-Madden-died-age-85.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2021/12/29/01/52315959-0-image-a-6_1640741129099.jpg",
            "publishedAt": "2021-12-29T12:38:19Z",
            "content": "Super Bowl-winning Hall of Fame coach and beloved former broadcaster John Madden - who went on to connect to a younger generation with his popular video game - has died at the age of 85.  \r\nNFL commi… [+12324 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Andrew Jeong, Jennifer Hassan",
            "title": "Coronavirus live updates and omicron variant news - The Washington Post",
            "description": "Omicron made up an estimated 59 percent of infections for the week ending Dec. 25 but could have a shorter incubation period of about three days, CDC data suggests.",
            "url": "https://www.washingtonpost.com/nation/2021/12/29/covid-omicron-variant-live-updates/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/534NAADHN4I6ZE4Q5LRED5GIWE.jpg&w=1440",
            "publishedAt": "2021-12-29T12:33:45Z",
            "content": "New coronavirus cases are being reported at record levels in France, Italy and Britain as Europe faces a swell of infections brought by the more contagious omicron variant.\r\nFrance is reporting more … [+1658 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Vivian Wang",
            "title": "Hong Kong Police Raid Stand News and Arrest Staff - The New York Times",
            "description": "Those arrested, including current and former senior staff members of Stand News, were accused of conspiring to publish seditious material. The news site announced it would shut down immediately.",
            "url": "https://www.nytimes.com/2021/12/29/world/asia/hong-kong-stand-news-arrest.html",
            "urlToImage": "https://static01.nyt.com/images/2021/12/29/world/29HONGKONG-still1/29HONGKONG-still1-facebookJumbo.jpg",
            "publishedAt": "2021-12-29T12:11:00Z",
            "content": "On Tuesday, Mr. Lai was charged with a new accusation of sedition related to the newspaper, as were six other former senior employees. Mr. Lai, one of Hong Kongs most prominent opposition voices, had… [+1320 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "James Vincent",
            "title": "LG says next-generation OLED EX technology delivers improved brightness and accuracy - The Verge",
            "description": "LG has announced its next-generation OLED EX technology, which the company says uses a new chemical composition and predictive algorithms to improve picture quality and brightness. It’ll start being incorporated into TVs some time in the second quarter of 202…",
            "url": "https://www.theverge.com/2021/12/29/22858131/lg-oled-ex-technology-improved-brightness-accuracy-ces-2022",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/2lE2L4wgTZrOYErYigsohsNGGJE=/0x58:960x561/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23131821/110411_57576_1754.jpg",
            "publishedAt": "2021-12-29T10:36:43Z",
            "content": "OLED EX TVs will also have slimmer bezels\r\nLG will be incorporating OLED EX technology into its TVs from the second quarter of 2022. \r\nImage: LG Display\r\nLG is the maker of some of our favorite OLED … [+2064 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Valentina Orellana-Peralta: US teen shot dead by police 'died in mother's arms' - BBC News",
            "description": "The parents of a 14-year-old girl killed by a stray police bullet while shopping demand justice.",
            "url": "https://www.bbc.com/news/world-us-canada-59816567",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4851/production/_122531581_teengetty.jpg",
            "publishedAt": "2021-12-29T10:25:52Z",
            "content": "Media caption, Watch: The mother of Valentina Orellana-Peralta, 14, describes the moment she was fatally shot by an LA police officer\r\nA mother whose 14-year-old girl was accidentally killed by a str… [+2415 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Aya Elamroussi, CNN",
            "title": "Admissions at some children's hospitals are rising to near peak levels as Omicron spreads - CNN",
            "description": "As the Omicron variant continues to grip the US, some children's hospitals are once again seeing a rise in admissions fueled by the most contagious strain of coronavirus yet.",
            "url": "https://www.cnn.com/2021/12/29/health/us-coronanavirus-wednesday/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211229021951-pedia-icu-file-12022021-super-tease.jpg",
            "publishedAt": "2021-12-29T10:16:00Z",
            "content": "(CNN)As the Omicron variant continues to grip the US, some children's hospitals are once again seeing a rise in admissions fueled by the most contagious strain of coronavirus yet. \r\nThe holidays this… [+6459 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "Waiting for a Elizabeth Holmes trial verdict? Experts say fraud is complicated - NPR",
            "description": "A jury in Silicon Valley has been weighing the fate of Holmes, the former tech executive whose blood-testing startup Theranos shot her to fame. She now faces criminal fraud charges.",
            "url": "https://www.npr.org/2021/12/29/1068639311/elizabeth-holmes-jury-theranos-fraud-case",
            "urlToImage": "https://media.npr.org/assets/img/2021/12/28/ap21357786237207_wide-62dee1acdd7e3c7874ef37521dea16dd90f42a0f.jpg?s=1400",
            "publishedAt": "2021-12-29T10:01:06Z",
            "content": "Former Theranos CEO Elizabeth Holmes leaves federal court in San Jose, Calif., Thursday, Dec. 23, 2021.\r\nNic Coury/AP\r\nThe image of Elizabeth Holmes as a disgraced former startup founder who careened… [+7132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Simon Romero",
            "title": "How Oklahoma Became a Marijuana Boom State - The New York Times",
            "description": "Weed entrepreneurs have poured into Oklahoma from across the United States, propelled by low start-up costs and relaxed rules.",
            "url": "https://www.nytimes.com/2021/12/29/us/oklahoma-marijuana-boom.html",
            "urlToImage": "https://static01.nyt.com/images/2021/12/27/us/00oklahoma-pot-1/00oklahoma-pot-1-facebookJumbo.jpg",
            "publishedAt": "2021-12-29T10:00:17Z",
            "content": "But a moratorium is not likely, said Adria Berry, the director of the Oklahoma Medical Marijuana Authority, which oversees the industry and reported nearly $138 million in revenue from retail, state … [+1345 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Former U.S. Senate majority leader Harry Reid dies at 82 - Reuters",
            "description": "Harry Reid, the pugnacious son of a Nevada hard-rock miner who rose from poverty to become the U.S. Senate majority leader and earned a reputation as a fierce partisan fighter during an era of political gridlock in Washington, died on Tuesday. He was 82.",
            "url": "https://www.reuters.com/world/us/former-us-senate-majority-leader-harry-reid-has-died-2021-12-29/",
            "urlToImage": "https://www.reuters.com/resizer/b6_h13rY-Bdvzme98FjNTmyub6s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/66DX2G2BFRFVBHSTLD4R3B2E6Y.JPG",
            "publishedAt": "2021-12-29T09:35:00Z",
            "content": "WASHINGTON, Dec 28 (Reuters) - Harry Reid, the pugnacious son of a Nevada hard-rock miner who rose from poverty to become the U.S. Senate majority leader and earned a reputation as a fierce partisan … [+6588 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "'Just want to go home': China's Xian in COVID lockdown for 7th day - Reuters",
            "description": "A lockdown of 13 million people in the Chinese city of Xian entered its seventh day on Wednesday, with many unable to leave their residential compounds and relying on deliveries of necessities as new COVID-19 infections persisted.",
            "url": "https://www.reuters.com/world/china/china-reports-197-new-covid-19-cases-dec-28-vs-209-day-earlier-2021-12-29/",
            "urlToImage": "https://www.reuters.com/resizer/uEHBPb5m3Ra86UAvZf-XoeXCMu8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H45N4JET3NPVNLGZ265ONKVCNA.jpg",
            "publishedAt": "2021-12-29T09:35:00Z",
            "content": "BEIJING, Dec 29 (Reuters) - A lockdown of 13 million people in the Chinese city of Xian entered its seventh day on Wednesday, with many unable to leave their residential compounds and relying on deli… [+3656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Making History on Mars: NASA Perseverance Rover's Biggest Moments of 2021 [Video] - SciTechDaily",
            "description": "A new video looks back on the six-wheeled scientist’s first 10 months on the Red Planet and all that it’s accomplished so far. NASA’s Perseverance rover has been busy since its harrowing touchdown in Mars’ Jezero Crater this past February. In the 10 months si…",
            "url": "https://scitechdaily.com/making-history-on-mars-nasa-perseverance-rovers-biggest-moments-of-2021-video/",
            "urlToImage": "https://scitechdaily.com/images/NASA-Perseverance-Rover-Artistic-Rendering-scaled.jpg",
            "publishedAt": "2021-12-29T09:33:33Z",
            "content": "ByJet Propulsion LaboratoryDecember 29, 2021\r\nNASA’s Perseverance rover, shown in this artistic rendering, will land at Mars’ Jezero Crater in February 2021 and will start gathering soil samples soon… [+4084 chars]"
        },
        {
            "source": {
                "id": "politico",
                "name": "Politico"
            },
            "author": "Max Tani",
            "title": "How Lawrence O'Donnell became the White House's favorite cable news personality - POLITICO",
            "description": "Among cable hosts, he has the best line into the White House, and it's paying off.",
            "url": "https://www.politico.com/news/2021/12/29/biden-lawrence-odonnell-biden-526232",
            "urlToImage": "https://static.politico.com/09/8c/7267fc834b93b2bc617b88f69c50/211228-odonnell-getty-773.jpg",
            "publishedAt": "2021-12-29T09:30:27Z",
            "content": "As other programs have struggled to break out of the post-Trump slump that has tanked ratings and left some shows straining to find the urgency that drove programming during the previous administrati… [+8791 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Tupac Shakur's Poem To GF Up For Sale, Inspiration For 'All Eyez On Me' - TMZ",
            "description": "Tupac Shakur's poem to an old girlfriend is up for sale and it's believed to be the inspiration behind 'All Eyez On Me.'",
            "url": "https://www.tmz.com/2021/12/29/tupac-shakur-simi-poem-for-sale-all-eyez-on-me-inspiration/",
            "urlToImage": "https://imagez.tmz.com/image/14/16by9/2021/12/21/14446fdcf6a0473a92c6a48bae7ba26e_xl.jpg",
            "publishedAt": "2021-12-29T08:55:00Z",
            "content": "Tupac Shakurwrote a love poem to one of his old girlfriends back in the day ... it appears to have inspired one of his big hits ... and now it can be yours if the price is right!\r\nThe folks over at M… [+898 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Ken Martin",
            "title": "Stock futures rise despite omicron concerns - Fox Business",
            "description": "U.S. equity futures traded higher despite lingering worries about the coronavirus omicron variant.",
            "url": "https://www.foxbusiness.com/markets/stock-futures-12-29-2021",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/02/0/0/rtx2c2c0-1.jpg?ve=1&tl=1",
            "publishedAt": "2021-12-29T08:26:06Z",
            "content": "U.S. equity futures traded higher despite lingering worries about the coronavirus omicron variant.\r\nThe major futures indexes suggest a gain of 0.2% when the opening bell rings.\r\nGET FOX BUSINESS ON … [+2920 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "John Bacon, Celina Tebor and Christal Hayes, USA TODAY",
            "title": "CDC cuts isolation time for Americans who test positive from 10 days to 5. Latest COVID-19 updates - USA TODAY",
            "description": "Health officials also reduced the amount of time one should quarantine after coming into contact with someone who tests positive for COVID. Updates.",
            "url": "https://www.usatoday.com/story/news/health/2021/12/27/omicron-airlines-cancel-flights-covid-updates/9021308002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/12/21/USAT/ca1bf9f9-31a1-46b8-b677-511b21e889a5-USATSI_17394883.jpg?auto=webp&crop=1999,1125,x0,y82&format=pjpg&width=1200",
            "publishedAt": "2021-12-29T08:12:36Z",
            "content": "The Centers for Disease Control and Prevention has cut the amount of time it recommends people should isolate after testing positive for the coronavirus, reducing the number of days from 10 to five. … [+11615 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kenneth Garger",
            "title": "FDA says rapid COVID tests may be less accurate with Omicron - New York Post ",
            "description": "Rapid COVID-19 antigen tests may be less effective at detecting Omicron than earlier strains on the virus, the Food and Drug Administration said Tuesday.",
            "url": "https://nypost.com/2021/12/29/fda-says-rapid-covid-tests-may-be-less-accurate-with-omicron/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/12/36778628.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-12-29T07:28:43Z",
            "content": "Rapid COVID-19 antigen tests may be less effective at detecting Omicron than earlier strains on the virus, the Food and Drug Administration said Tuesday.\r\nThe development was gleaned from preliminary… [+735 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Harriet Alexander",
            "title": "'The weak better buckle up': Denver gunman espoused alt-right masculine supremacy theories - Daily Mail",
            "description": "Lyndon McLeod, 47, shot and killed five people in Denver on Monday - several of them connected to the tattoo industry. In his self-published book he wrote about gunning down people at a tattoo parlor.",
            "url": "https://www.dailymail.co.uk/news/article-10351893/The-weak-better-buckle-Denver-gunman-espoused-alt-right-masculine-supremacy-theories.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2021/12/29/07/52322795-0-image-a-4_1640762910782.jpg",
            "publishedAt": "2021-12-29T07:12:23Z",
            "content": "The Denver gunman who shot and killed five people on Monday night, several of them connected to the tattoo industry, had self-published a novel in which a character with his name murders people at ta… [+8921 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla's Musk exercises all of his stock options expiring next year - Reuters",
            "description": "Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> Chief Executive Elon Musk has exercised all of his options expiring next year, signaling an end to his stock sales that triggered a fall in the share price of the world'…",
            "url": "https://www.reuters.com/business/teslas-musk-completes-option-related-sales-plan-filing-2021-12-29/",
            "urlToImage": "https://www.reuters.com/resizer/TnAyvilnZnpGdKOiey3AQNaEtME=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D4SUKIYCARIVTBY4E67LLD2IOU.jpg",
            "publishedAt": "2021-12-29T06:26:00Z",
            "content": "San Francisco, Dec 28 (Reuters) - Tesla Inc (TSLA.O) Chief Executive Elon Musk has exercised all of his options expiring next year, signaling an end to his stock sales that triggered a fall in the sh… [+1822 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "N.C. State team ‘sad, mad, angry, confused’ by UCLA Holiday Bowl cancellation - Raleigh News & Observer",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiTmh0dHBzOi8vd3d3Lm5ld3NvYnNlcnZlci5jb20vc3BvcnRzL2NvbGxlZ2UvYWNjL25jLXN0YXRlL2FydGljbGUyNTY4OTg2MjIuaHRtbNIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-12-29T06:12:40Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kaitlan Collins and Natasha Bertrand, CNN",
            "title": "US and Russia to talk Ukraine and security issues next month - CNN",
            "description": "US and Russian officials have agreed to sit down for security talks on January 10, a spokesman for the US National Security Council confirmed Tuesday, amid tensions over Ukraine.",
            "url": "https://www.cnn.com/2021/12/28/politics/us-russia-security-talks/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200608165352-usa-russia-flags-super-tease.jpg",
            "publishedAt": "2021-12-29T04:11:00Z",
            "content": "(CNN)US and Russian officials have agreed to sit down for security talks on January 10, a spokesman for the US\r\n National Security Council confirmed Tuesday, amid tensions over Ukraine. \r\nRussia had … [+3215 chars]"
        }
    ]
    constructor() {
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
    }

    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fda7bafc218145a3893fee7ab1df7e9b&page=1&pageSize=${this.props.pageSize}`;
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({articles:parsedData.articles})

    }

     handlePrevClick= async () =>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fda7bafc218145a3893fee7ab1df7e9b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);
        
        let parsedData= await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page-1,
            loading:false
        })
    }
    handleNextClick= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fda7bafc218145a3893fee7ab1df7e9b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data= await fetch(url);

        let parsedData= await data.json();
        this.setState({
            articles:parsedData.articles,
            page:this.state.page+1,
            loading:false
        })
    }
    static defaultProps = {
        pageSize: '6',
        country: 'us',
        category: 'general'
      }
    render() {
        return (
            <div className='container my-3'>
                <h2 className="text-center my-3">The top head lines are</h2>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                {this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title.slice(0,45)} description={element.description} imageURL={element.urlToImage} newsURL={element.url} author={element.author?element.author:'null'} onTime={element.publishedAt} source={element.source.name}/>
                    </div>
                    
                
                })}
                </div>
                <div className="container d-flex justify-content-between">

                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &raquo;</button>
                </div>
            </div>
            
        )
    }
}

export default News
