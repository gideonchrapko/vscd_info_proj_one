import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'

import Outline from '../../Assets/Iraq_Outline.svg';
import './Crimeline.css';

const dataTimeline = [
    {
        year: 1990,
        data: [{
            date: "1990-07-25",
            title: "A miscommunication that lead the US to invade Iraq and start the Gulf War",
            description: "Sadam Husseins cable to president bush titled “Saddam’s Message of Friendship to President Bush” where  April Glaspie, senior member of the Foreign Service tells Sadam Hussein “we have no opinion on the Arab-Arab conflicts” with Kuwait before. Four days after Iraq’s invasion on Kuwait the US invades Iraq and imposes a full trade embargo on the country.",
            url: "https://msuweb.montclair.edu/~furrg/glaspie.html",
            img: "https://i.ibb.co/yY5ZCD2/Screen-Shot-2021-11-14-at-9-53-39-PM.png"
        },
        {
            date: "1990-10-10",
            title: "An elaborate lie of Iraqi war crimes to justify US invasion of Iraq",
            description: "Testimony of Nayirah that influenced the 7 US Senators who cited Nayirah’s story to support the Jan 12 decision to authorize the Gulf War.",
            url: "https://www.nytimes.com/1992/01/06/opinion/remember-nayirah-witness-for-kuwait.html",
            img: "https://i.ibb.co/R6pq7vG/Screen-Shot-2021-11-14-at-9-55-32-PM.png"
        }
    ]},
    {
        year: 1991,
        data: [{
            date: "1991",
            title: "Yemeni is stripped of its US aid",
            description: "Because they believed the Gulf War was not just the Yemeni government was stripped of $70 million of Aid for rightfully choosing not to back the Gulf War",
            url: "https://www.jstor.org/stable/425437",
            img: "https://i.ibb.co/3rkr0d5/Screen-Shot-2021-11-14-at-9-58-15-PM.png"
        },
        {
            date: "1991-06-23",
            title: "Effects of the US invasion creates an epidemic in Iraq",
            description: "The Harvard team, for example, reported last month that the lack of electrical power, fuel and key transportation links in Iraq now has led to acute malnutrition and epidemic levels of cholera and typhoid",
            url: "https://www.washingtonpost.com/archive/politics/1991/06/23/allied-air-war-struck-broadly-in-iraq/e469877b-b1c1-44a9-bfe7-084da4e38e41/",
            img: "https://i.ibb.co/Ns6yTPD/Screen-Shot-2021-11-14-at-10-02-19-PM.png"
        },
        {
            date: "1991-02-26",
            title: "While Iraqi troops withdraw from Kuwait they are bombed by the US",
            description: "Iraqi president Saddam Hussein announces that Iraq will withdraw from Kuwait immediately but does not renounce Iraq’s claim to Kuwait. U.S. and allied forces bomb a convoy of retreating Iraqi troops, killing hundreds.",
            url: "https://www.washingtonpost.com/archive/politics/1991/06/23/allied-air-war-struck-broadly-in-iraq/e469877b-b1c1-44a9-bfe7-084da4e38e41/",
            img: "https://i.ibb.co/MDxvtbq/Screen-Shot-2021-11-14-at-10-00-49-PM.png"
        },
        
    ]},
    {
        year: 2003,
        data: [{
            date: "2003-03-20",
            title: "America goes to war",
            description: "President Bush announces U.S. forces have begun a military operation into Iraq. These are opening stages of what will be a broad and concerted campaign, the president says. That initial effort to decapitate Iraq's leadership with air strikes fails, clearing the way for a ground invasion.",
            url: "",
            img: "https://i.ibb.co/MSqw4R2/Screen-Shot-2021-11-15-at-12-53-10-AM.png"
        },
        {
            date: "2003",
            title: "Americans go crazy for war",
            description: "Jesse Petrilla creates Quest For Saddam video game and goes on MSNBC",
            url: "https://www.youtube.com/watch?v=qep9MAFWNMM",
            img: "https://i.ibb.co/4KGbk3k/Screen-Shot-2021-11-15-at-12-58-13-AM.png"
        },
    ]},
    {
        year: 2004,
        data: [{
            date: "2004-01-29",
            title: "America is wrong about WMD",
            description: "The Bush administration concedes its prewar arguments about extensive stockpiles of chemical, biological, and even nuclear weaponry in Saddam Hussein's Iraq appear to have been mistaken. In January 2004, David Kay, the former top U.S. weapons inspector, tells Congress: 'We were almost all wrong.' A presidential commission concludes in March 2005 'not one bit' of prewar intelligence on Iraqi weapons of mass destruction panned out.",
            url: "https://www.cbsnews.com/news/kay-we-were-almost-all-wrong/",
            img: ""
        },
        {
            date: "2004",
            title: "Exposing The Truth About Abu Ghraib",
            description: "Evidence of prisoner abuse inside the U.S.-run Abu Ghraib prison becomes public. Backed by photographic evidence, the conviction of seven soldiers for the torture and humiliation of detainees brings jail sentences. Critics, including some of the convicted, complain that senior officers and officials are spared.",
            url: "https://www.youtube.com/watch?v=qep9MAFWNMM",
            img: "https://www.cbsnews.com/news/exposing-the-truth-of-abu-ghraib/"
        },
        {
            date: "2004",
            title: "Abu Ghraib creates an uproar ",
            description: "General Stanley McChrystal 'In my experience, we found that nearly every first-time jihadist claimed Abu Ghraib had first jolted him into action.'",
            url: "https://en.wikipedia.org/wiki/Abu_Ghraib_torture_and_prisoner_abuse",
            img: "https://i.ibb.co/4KGbk3k/Screen-Shot-2021-11-15-at-12-58-13-AM.png"
        },
    ]},
    {
        year: 2005,
        data: [{
            date: "01 11, 2005",
            title: "Oil for food program grift",
            description: "An independent probe into the program finds that UN officials failed to monitor it properly, allowing contractors to skim million of dollars. However, auditors didn't find evidence of corruption, payoffs to UN staffers or kickbacks to Saddam Hussein.",
            url: "https://www.cbsnews.com/news/kay-we-were-almost-all-wrong/",
            img: ""
        },
        {
            date: "11 5 2006",
            title: "Sadam sentenced to hanging",
            description: "The trial of Iraq's former dictator ends with a sentence of death by hanging. In the south, Shiites take to the streets celebrating. Sunni militants north of Baghdad vow revenge. In the courtroom, a bailiff attempts to silence Saddam as the verdict 'guilty of crimes against humanity' is dispensed.",
            url: "",
            img: "https://www.cbsnews.com/news/exposing-the-truth-of-abu-ghraib/"
        },
    ]},
    {
        year: 2006,
        data: [{
            date: "01 11 2005",
            title: "Oil for food program grift",
            description: "An independent probe into the program finds that UN officials failed to monitor it properly, allowing contractors to skim million of dollars. However, auditors didn't find evidence of corruption, payoffs to UN staffers or kickbacks to Saddam Hussein.",
            url: "",
            img: ""
        },
    ]},
]

const Data = () => {
    // style={{ backgroundImage: "url(https://i.ibb.co/R6pq7vG/Screen-Shot-2021-11-14-at-9-55-32-PM.png)" }}
    return (
        <div className="time_BG_colour" style={{ backgroundImage: `url(https://i.ibb.co/R6pq7vG/Screen-Shot-2021-11-14-at-9-55-32-PM.png)` }}>
            <Container fluid className="data_container">
                <Row>
                    <Col
                        lg={{ span: 1, offset: 11 }} sm={{ span: 12, offset: 10 }}
                        className="time_nav_container"
                    >
                        <h1>1990</h1>
                    {dataTimeline &&
                    dataTimeline.map((item, index) => (
                        <div key={index}>
                            {item.data.map((subitem, i) => {
                                return ( 
                                    <div 
                                        key={i} 
                                        style={{ height: "6vh", textAlign: "center", padding: "20px" }}>
                                            <div className="time_dot">
                                            </div>
                                    </div>
                                )}
                            )}
                        </div>
                    ))}
                        <h1>2011</h1>
                    </Col>
                </Row>
                <div style={{ height: "100vh" }}>
                    <Row style={{ marginTop: "10vh" }}>
                        <Col lg={{ span: 6, offset: 3 }}>
                            <h1 className="time_year_header">1990 – 2011</h1>
                            <img 
                                src={Outline}
                                alt="Outline of Iraq"
                                className="img_header_time"
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10vh" }}>
                        <Col lg={{ span: 3, offset: 3 }}>
                                <h4 className="time_header">
                                    In 1990 the US invaded Iraq 4 days after Iraq invaded Kuwait. From false allegations to major international confusions this was a confusing and morally ambiguous move.                    </h4>
                        </Col>
                        <Col lg={3}>
                                <h4 className="time_header">
                                    Eventually the US would go onto invade a second time in 2003 when the Bush administration convinced the public for a short period of time that Sadam Hussein possessed WMD.                    </h4>
                        </Col>
                    </Row>
                </div>
                <div style={{ marginTop: "-10vh", position: "relative", zIndex: "999" }}>
                    {dataTimeline &&
                    dataTimeline.map((item, index) => (
                        <div key={index}>
                            <h4 className="time_year">{item.year}</h4>
                            {item.data.map((subitem, i) => {
                                return (
                                    <Row key={i} style={{ marginTop: "40vh" }}>
                                        <Col lg={{ span: 1, offset: 5 }}>
                                            <motion.div 
                                                whileHover={{
                                                    scale: 1.1,
                                                    transition: { duration: 0.5 },
                                                }}
                                                className="time_img"
                                                alt={`"${subitem.title} image"`}
                                                style={{ backgroundImage: `url(${subitem.img})` }}
                                            >
                                            </motion.div>
                                        </Col>
                                        <Col lg={{ span: 3 }}>
                                            <h4 className="time_date" >{subitem.date}</h4>
                                            <h4 className="time_title">{subitem.title}</h4>
                                            <h4 className="time_description">{subitem.description}</h4>
                                        </Col>
                                    </Row>
                                )}
                            )}
                        </div>
                    ))}
                    </div>
            </Container>
         </div>
    )
}

export default Data