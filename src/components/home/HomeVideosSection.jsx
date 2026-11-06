import React from "react";
import "./HomeVideosSection.css";

function HomeVideosSection() {
    const videos = [
        {
            title: "NSE Listing Video",
            subtitle:
                "Celebrating Virtual Galaxy's successful listing on the National Stock Exchange of India.",
            embed:
                "https://www.youtube.com/embed/Puy13UvwxgQ?si=kiZa6nrt18K1CUQ6",
            tag: "Milestone"
        },
        {
            title: "YouTube Video",
            subtitle:
                "Discover how Virtual Galaxy empowers enterprises through AI-driven digital transformation.",
            embed:
                "https://www.youtube.com/embed/_G2lr06C8tw?si=2-_UdLU7NGb492y_",
            tag: "Corporate Video"
        }
    ];

    return (
        <section
            id="videos"
            className="homeVideosSection section-spacing-lg"
        >
            <div className="container">

                <div className="heading-section center  effectFade fadeUp">

                    <div className="heading-sub fw-semibold">

                        Featured Videos

                    </div>

                    {/* <div className="heading-title text-gradient-3">

                        Discover Virtual Galaxy
                        <br />
                        Through Stories & Milestones

                    </div>

                    <p className="heading-text">

                        Explore our journey, achievements and vision through carefully
                        selected videos showcasing innovation, leadership and enterprise
                        excellence.

                    </p> */}

                </div>

                <div className="row g-4">

                    {videos.map((video, index) => (

                        <div
                            className="col-lg-6"
                            key={index}
                        >

                            <div
                                className="videoCard effectFade fadeRotateX"
                                data-delay={index * 0.15}
                            >

                                <div className="videoCardTop">

                                    {/* <span className="videoBadge">

                                        {video.tag}

                                    </span> */}

                                    <h4 className="videoTitle">

                                        {video.title}

                                    </h4>

                                </div>

                                <div className="videoWrapper">

                                    <iframe
                                        src={video.embed}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />

                                </div>

                                {/* <div className="videoContent">

                                    <p>

                                        {video.subtitle}

                                    </p>

                                </div> */}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default HomeVideosSection;