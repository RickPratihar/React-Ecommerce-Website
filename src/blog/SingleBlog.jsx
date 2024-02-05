import React, { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PaageHeader from "../component/PaageHeader";
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost";

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]
const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const { id } = useParams();
  const result = blog.filter((b) => b.id === Number(id));
  return (
    <div>
      <PaageHeader title={"Single Blog Page"} curPage={"Blog /Blog Details"} />
      <div className="blogsection blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>
                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    {item.metaList.map((val, i) => (
                                      <li key={i}>
                                        <i className={val.iconName}></i>
                                        {val.text} 
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              

                                <p>
                                  The purpose of the FRC's Audit and Risk
                                  Committee is to support and advise the
                                  Accounting Officer (The Chief Executive) and
                                  the Board by providing oversight of the
                                  company's financial reporting process and use
                                  of public funds, corporate governance, the
                                  audit process, the system of internal controls
                                  including business ...
                                </p>
                                <blockquote>
                                  <p>
                                    The Government also writes to the FRC
                                    setting out its priorities for the FRC's
                                    work. In November 2023, the Secretary of
                                    State for Business and Trade issued the FRC
                                    with a new remit letter updating the
                                    Government’s priorities for the FRC’s work.
                                  </p>
                                  <cite>
                                    <a href="#">...Rick Pratihar</a>
                                  </cite>
                                </blockquote>
                                <p>
                                  The purpose of the FRC's Audit and Risk
                                  Committee is to support and advise the
                                  Accounting Officer (The Chief Executive) and
                                  the Board by providing oversight of the
                                  company’s financial reporting process and use
                                  of public funds, corporate governance, the
                                  audit process, the system of internal controls
                                  including business continuity and information
                                  technology, the identification and management
                                  of significant risks and its compliance with
                                  laws and regulations. The Committee provides
                                  assurance to the Board and, when it is not
                                  satisfied with any aspect of the FRC’s
                                  internal controls or reporting, it shall
                                  report its views to the Board and the
                                  Accounting Officer. The Audit and Risk
                                  committee should provide the Board with advice
                                  on the continued appropriateness of the risk
                                  strategy and risk appetite in light of the
                                  organisation’s purpose, values, corporate
                                  strategy and strategic objectives.
                                </p>
                                <img
                                  src="/images/blog/single/01.jpg"
                                  alt=""
                                />
                                <p>
                                  The Regulatory Standards and Codes Committee
                                  (the ‘Committee’) remit entails high quality,
                                  effective and proportionate standards, codes
                                  and guidance for corporate governance,
                                  corporate reporting, stewardship, audit and
                                  assurance, and actuarial work. The Committee
                                  comprises of the Chair of the Committee and
                                  other non-executive Directors of the FRC. In
                                  addition, the Committee will be assisted by
                                  Senior Advisors, who will provide technical
                                  expertise and advice where requested, but will
                                  not be involved in taking decisions.
                                </p>
                                <div className="video-thumb">
                                  <img
                                    src="/images/blog/single/02.jpg"
                                    alt=""
                                  />
                                  <a href="#" className="video-button popup">
                                    <i className="icofont-ui-play"></i>
                                  </a>
                                </div>
                                <p>
                                  The Conduct Committee (the ‘Committee’) is
                                  responsible for the oversight of the FRC’s
                                  enquiries, investigations and enforcement
                                  function, ensuring that appropriate cases are
                                  investigated and conducted fairly, in the
                                  public interest, in a timely manner and in
                                  accordance with due process and the Regulators
                                  code.
                                </p>
                                <div className="tags-section">
                                  <ul className="tags lab-ul">
                                    <li>
                                      <a href="#">Agency</a>
                                    </li>
                                    <li>
                                      <a href="#">Business</a>
                                    </li>
                                    <li>
                                      <a href="#">Personal</a>
                                    </li>
                                  </ul>
                                  <ul className="lab-ul social-icons">
                                    {
                                        socialList.map((val, i) => (
                                            <li key={i}>
                                                <a href="#" className={val.className}>
                                                    <i className={val.iconName}></i>
                                                </a>
                                            </li>
                                        ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="navigations-part">
                        <div className="left">
                            <a href="#" className="prev">
                                <i className="icofont-double-left"></i> Previous Blog
                            </a>
                            <a href="#" className="title">
                                Evisculate parallel process via Technica sound Models Authoritative
                            </a>
                        </div>
                        <div className="right">
                            <a href="#" className="prev">
                                <i className="icofont-double-right"></i> Next Blog
                            </a>
                            <a href="#" className="title">
                                Evisculate parallel process via Technica sound Models Authoritative
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/*right side */}
            <div className="col-lg-4 col-12">
                <aside>
                    <Tags/>
                    <PopularPost/>
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
