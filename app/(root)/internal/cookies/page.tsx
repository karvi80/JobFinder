import React from "react";
import CookiesTable from "@/components/CookiesTable";
import { cookiesTechnologies, cookiesUse } from "@/constants";

const Cookies: React.FC = () => {

    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 mt-4">
            <div className="w-full flex items-center justify-center bg-primary/20 p-10">
                <h1 className="head-text">Cookie Policy</h1>
            </div>

            <div className="w-9/10 md:w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-center justify-start pt-6 gap-8 p-4">
                <div className="w-full flex flex-col items-start justify-start p-4 gap-4">
                    <h4 className="section-2-text">Effective on June 3, 2022</h4>
                    <p className="subsection-text">At JobFinder, we believe in being clear and open about how we collect and use data related to you. This Cookie Policy applies to any JobFinder product or service that links to this policy or incorporates it by reference. We use cookies and similar technologies such as pixels, local storage and mobile ad IDs (collectively referred to in this policy as “cookies”) to collect and use data as part of our Services, as defined in our Privacy Policy (“Services”) and which includes our sites, communications, mobile applications and off-site Services, such as our ad services and the “Apply with JobFinder” and “Share with JobFinder plugins or tags. In the spirit of transparency, this policy provides detailed information about how and when we use these technologies.</p>
                    <p className="subsection-text">By continuing to visit or use our Services, you are agreeing to the use of cookies and similar technologies for the purposes described in this policy.</p>
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-4">
                    <h2 className="subhead-text">What technologies are used?</h2>
                    <div className="w-full">
                        <CookiesTable
                            header="Type of technology"
                            description="Description"
                            technologies={cookiesTechnologies.map(item => ({
                                title: item.type,
                                desc: item.desc
                            }))}
                        />
                    </div>

                    <p className="subsection-text">Our cookie tables lists cookies and similar technologies that are used as part of our Services. Please note that the names of cookies and similar technologies may change over time.</p>
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-4">
                    <h2 className="subhead-text">What are these technologies used for?</h2>
                    <p className="subsection-text">Below we describe the purposes for which we use these technologies.</p>
                    <div className="w-full">
                        <CookiesTable
                            header="Purpose"
                            description="Description"
                            technologies={cookiesUse.map(item => ({
                                title: item.purpose,
                                desc: item.desc
                            }))}
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start gap-4">
                        <h2 className="subhead-text">What third parties use these technologies in connection with our Services?</h2>
                    <div className="w-full flex flex-col items-start justify-start gap-3">
                        <p className="subsection-text">Third parties such as our customers, partners and service providers may use cookies in connection with our Services.</p>
                        <p className="subsection-text">For example, third parties may use cookies in their JobFinder pages, job posts and their advertisements on and off JobFinder for their own marketing purposes. For an illustration, please visit JobFinder’s Help Center.</p>
                        <p className="subsection-text">Third parties may also use cookies in connection with our off-site Services, such as JobFinder ad services. Third parties may use cookies to help us to provide our Services. We may also work with third parties for our own marketing purposes and to enable us to analyze and research our Services.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3">
                        <h3 className="section-text">Your Choices</h3>
                        <p className="subsection-text">You have choices on how JobFinder uses cookies and similar technologies. Please note that if you limit the ability of JobFinder to set cookies and similar technologies, you may worsen your overall user experience, since it may no longer be personalized to you. It may also stop you from saving customized settings like login information.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3">
                        <h3 className="section-text">Opt out of targeted advertising</h3>
                        <p className="subsection-text">As described in Section 2.4 of the Privacy Policy, you have choices regarding the personalized ads you may see.</p>
                        <p className="subsection-text">Some mobile device operating systems such as Android provide the ability to control the use of mobile advertising IDs for ads personalization. You can learn how to use these controls by visiting the manufacturer’s website. We do not use iOS mobile advertising IDs for targeted advertising.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3">
                        <h3 className="section-text">Browser Controls</h3>
                        <p className="subsection-text">Most browsers allow you to control cookies through their settings, which may be adapted to reflect your consent to the use of cookies. Further, most browsers also enable you to review and erase cookies, including JobFinder cookies. To learn more about browser controls, please consult the documentation that your browser manufacturer provides.</p>
                        
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3">
                        <h3 className="section-text">What is Do Not Track (DNT)?</h3>
                        <p className="subsection-text">DNT is a concept that has been promoted by regulatory agencies such as the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing Internet users to control the tracking of their online activities across websites by using browser settings. As such, JobFinder does not generally respond to “do not track” signals.</p>
                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default Cookies
    ;
