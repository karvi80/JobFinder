import React from "react";
import Image from "next/image"

const PrivacyPolicy = () => {
    return (
        <div className="w-full h-full my-10 flex flex-col items-center justify-start rounded-lg gap-6">
            <div className="flex items-center justify-center w-full p-10 bg-primary bg-opacity-20">
                <h1 className="head-text">Privacy Policy</h1>
            </div>

            <div className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-start justify-start mx-auto gap-4">
                <div className="flex flex-col items-start justify-start p-3">
                    <h3 className="section-text">Your Privacy Matters</h3>
                    <p className="subsection-text">JobFinder mission is to connect the world’s professionals to allow them to be more productive and successful. Central to this mission is our commitment to be transparent about the data we collect about you, how it is used and with whom it is shared.</p>
                    <p className="subsection-text">This Privacy Policy applies when you use our Services (described below). We offer our users choices about the data we collect, use and share as described in this Privacy Policy, Cookie Policy, Settings and our Help Center.</p>
                </div>

                <h2 className="subhead-text">Introduction</h2>

                <div className="flex flex-col items-start justify-start p-3 gap-4">
                    <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                        <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                            className="flex-[0.1]" />
                        <p className="paragraph-text">We are a social network and online platform for professionals. People use our Services to find and be found for business opportunities, to connect with others and find information. Our Privacy Policy applies to any Member or Visitor to our Services.</p>
                    </div>
                    <p className="subsection-text">Our registered users (“Members”) share their professional identities, engage with their network, exchange knowledge and professional insights, post and view relevant content, learn and develop skills, and find business and career opportunities. Content and data on some of our Services is viewable to non-Members (“Visitors”).</p>
                    <p className="subsection-text">We use the term “Designated Countries” to refer to countries in the European Union (EU), European Economic Area (EEA), and Switzerland. Members and Visitors located in the Designated Countries or the UK can review additional information in our European Regional Privacy Notice.</p>



                    <div className="flex flex-col items-start justify-start p-3 gap-3">
                        <h3 className="section-text">Services</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">This Privacy Policy, including our Cookie Policy applies to your use of our Services.</p>
                        </div>
                        <p className="subsection-text">This Privacy Policy applies to JobFinder.com, JobFinder-branded apps, and other JobFinder-branded sites, apps, communications and services offered by JobFinder (“Services”), including off-site Services, such as our ad services and the “Apply with JobFinder and “Share with JobFinder” plugins, but excluding services that state that they are offered under a different privacy policy. For California residents, additional disclosures required by California law may be found in our California Privacy Disclosure.</p>
                    </div>

                    <div className="flex flex-col items-start justify-start p-3 gap-3">
                        <h3 className="section-text">Data Controllers and Contracting Parties</h3>                      
                        <p className="subsection-text">If you are in the “Designated Countries”, JobFinder Ireland Unlimited Company (JobFinder Ireland”) will be the controller of your personal data provided to, or collected by or for, or processed in connection with our Services.</p>
                        <p className="subsection-text">If you are outside of the Designated Countries, JobFinder Corporation will be the controller of (or business responsible for) your personal data provided to, or collected by or for, or processed in connection with our Services.</p>
                        <p className="subsection-text">As a Visitor or Member of our Services, the collection, use and sharing of your personal data is subject to this Privacy Policy and other documents referenced in this Privacy Policy, as well as updates</p>
                    </div>

                    <div className="flex flex-col items-start justify-start p-3 gap-3">
                        <h3 className="section-text">Change</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Changes to the Privacy Policy apply to your use of our Services after the “effective date.”</p>
                        </div>
                        <p className="subsection-text">JobFinder (“we” or “us”) can modify this Privacy Policy, and if we make material changes to it, we will provide notice through our Services, or by other means, to provide you the opportunity to review the changes before they become effective. If you object to any changes, you may close your account.</p>
                        <p className="subsection-text">You acknowledge that your continued use of our Services after we publish or send a notice about our changes to this Privacy Policy means that the collection, use and sharing of your personal data is subject to the updated Privacy Policy, as of its effective date.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start p-3 gap-4">
                    <h2 className="title-text">Data We Collect</h2>
                    <div className="w-full flex flex-col items-start justify-start gap-2 p-3">
                        <h3 className="section-text">Data You Provide To Us</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">You provide data to create an account with us.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Registration</h3>
                        <p className="subsection-text">To create an account you need to provide data including your name, email address and/or mobile number, general location (e.g., city), and a password. If you register for a premium Service, you will need to provide payment (e.g., credit card) and billing information.</p>

                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">You create your LinkedIn profile (a complete profile helps you get the most from our Services).</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Profile</h3>
                        <p className="subsection-text">You have choices about the information on your profile, such as your education, work experience, skills, photo, city or area, endorsements, and optional verifications of information on your profile (such as verifications of your identity or workplace). You don’t have to provide additional information on your profile; however, profile information helps you to get more from our Services, including helping recruiters and business opportunities find you. It’s your choice whether to include sensitive information on your profile and to make that sensitive information public. Please do not post or add personal data to your profile that you would not want to be publicly available.</p>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">You may give other data to us, such as by syncing your calendar.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Posting and Uploading</h3>
                        <p className="subsection-text">We collect personal data from you when you provide, post or upload it to our Services, such as when you fill out a form, (e.g., with demographic data or salary), respond to a survey, or submit a resume or fill out a job application on our Services.</p>
                        <p className="subsection-text">If you sync your calendars with our Services, we will collect your calendar meeting information to keep growing your network by suggesting connections for you and others, and by providing information about events, e.g. times, places, attendees and contacts.</p>
                        <p className="subsection-text">You don’t have to post or upload personal data; though if you don’t, it may limit your ability to grow and engage with your network over our Services.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Data From Others</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Others may post or write about you.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Content and News</h3>
                            <p className="subsection-text">You and others may post content that includes information about you (as part of articles, posts, comments, videos) on our Services. We also may collect public information about you, such as professional-related news and accomplishments, and make it available as part of our Services, including, as permitted by your settings, in notifications to others of mentions in the news.</p>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Others may sync their calendar with our Services</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Contact and Calendar Information</h3>
                        <p className="subsection-text">We receive personal data (including contact information) about you when others import or sync their calendar with our Services, associate their contacts with Member profiles, scan and upload business cards, or send messages using our Services (including invites or connection requests). If you or others opt-in to sync email accounts with our Services, we will also collect “email header” information that we can associate with Member profiles.</p>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Customers and partners may provide data to us.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Cookies and Similar Technologies</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">We collect data through cookies and similar technologies.</p>
                        </div>
                        <p className="subsection-text">As further described in our Cookie Policy, we use cookies and similar technologies (e.g., pixels and ad tags) to collect data (e.g., device IDs) to recognize you and your device(s) on, off and across different services and devices where you have engaged with our Services. We also allow some others to use cookies as described in our Cookie Policy. If you are outside the Designated Countries, we also collect (or rely on others who collect) information about your device where you have not engaged with our Services (e.g., ad ID, IP address, operating system and browser information) so we can provide our Members with relevant ads and better understand their effectiveness. Learn more. You can opt out from our use of data from cookies and similar technologies that track your behavior on the sites of others for ad targeting and other ad-related purposes.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start p-3 gap-4">
                    <h2 className="title-text">How We Use Your Data</h2>
                    <div className="">
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">We use your data to provide, support, personalize and develop our Services.</p>
                        </div>
                        <p className="subsection-text">How we use your personal data will depend on which Services you use, how you use those Services and the choices you make in your settings. We may use your personal data to improve, develop, and provide products and Services, develop and train artificial intelligence (AI) models, develop, provide, and personalize our Services, and gain insights with the help of AI, automated systems, and inferences, so that our Services can be more relevant and useful to you and others. You can review JobFinder's Responsible AI principles here and learn more about our approach to generative AI here. Learn more about the inferences we may make, including as to your age and gender and how we use them.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Advertising</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">We serve you tailored ads both on and off our Services. We offer you choices regarding personalized ads, but you cannot opt-out of seeing non-personalized ads.</p>
                        </div>
                        <p className="subsection-text">We target (and measure the performance of) ads to Members, Visitors and others both on and off our Services directly or through a variety of partners, using the following data, whether separately or combined:</p>

                        <ul className="flex flex-col items-start justify-start list-disc px-4 py-2 gap-2">
                            <li className="paragraph-text">Data collected by advertising technologies on and off our Services using pixels, ad tags (e.g., when an advertiser installs a JobFinder tag on their website), cookies, and other device identifiers;</li>
                            <li className="paragraph-text">Member-provided information (e.g., profile, contact information, title and industry);</li>
                            <li className="paragraph-text">Data from your use of our Services (e.g., search history, feed, content you read, who you follow or is following you, connections, groups participation, page visits, videos you watch, clicking on an ad, etc.), including as described in Section 1.3;</li>
                            <li className="paragraph-text">Information from advertising partners, vendors and publishers;</li>
                            <li className="paragraph-text">Information inferred from data described above (e.g., using job titles from a profile to infer industry, seniority, and compensation bracket; using graduation dates to infer age or using first names or pronoun usage to infer gender; using your feed activity to infer your interests; or using device data to recognize you as a Member). Learn more about the inferences we make and how they may be used for advertising.</li>
                        </ul>

                        <p className="subsection-text">Learn more about the ad technologies we use and our advertising services and partners. You can learn more about our compliance with laws in the Designated Countries or the UK in our European Regional Privacy Notice.</p>
                        <p className="subsection-text">We will show you ads called sponsored content which look similar to non-sponsored content, except that they are labeled as advertising (e.g., as “ad” or “sponsored”). If you take a social action (such as like, comment or share) on these ads, your action is associated with your name and viewable by others, including the advertiser. Subject to your settings, if you take a social action on the LinkedIn Services, that action may be mentioned with related ads. For example, when you like a company we may include your name and photo when their sponsored content is shown.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start p-3 gap-4">
                    <h2 className="title-text">How We Share Information</h2>
                    <div className="">
                            <h3 className="section-text">Our Services</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Any data that you include on your profile and any content you post or social action (e.g., likes, follows, comments, shares) you take on our Services will be seen by others, consistent with your settings.</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Profile</h3>
                        <p className="subsection-text">Your profile is fully visible to all Members and customers of our Services. Subject to your settings, it can also be visible to others on or off of our Services (e.g., Visitors to our Services or users of third-party search tools). As detailed in our Help Center, your settings, degree of connection with the viewing Member, the subscriptions they may have, their usage of our Services, access channels and search types (e.g., by name or by keyword) impact the availability of your profile and whether they can view certain fields in your profile.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Posts, Likes, Follows, Comments, Messages</h3>
                        <p className="subsection-text">Our Services allow viewing and sharing information including through posts, likes, follows and comments.</p>

                        <ul className="flex flex-col items-start justify-start list-disc px-4 py-2 gap-2">
                            <li className="paragraph-text">When you share an article or a post (e.g., an update, image, video or article) publicly it can be viewed by everyone and re-shared anywhere (subject to your settings). Members, Visitors and others will be able to find and see your publicly-shared content, including your name (and photo if you have provided one).</li>
                            <li className="paragraph-text">In a group, posts are visible to others according to group type. For example, posts in private groups are visible to others in the group and posts in public groups are visible publicly. Your membership in groups is public and part of your profile, but you can change visibility in your settings.</li>
                            <li className="paragraph-text">Any information you share through companies’ or other organizations’ pages on our Services will be viewable by those organizations and others who view those pages' content.</li>
                            <li className="paragraph-text">When you follow a person or organization, you are visible to others and that “page owner” as a follower.</li>
                            <li className="paragraph-text">We let senders know when you act on their message, subject to your settings where applicable.</li>
                            <li className="paragraph-text">Subject to your settings, we let a Member know when you view their profile. We also give you choices about letting organizations know when you've viewed their Page.</li>
                            <li className="paragraph-text">When you like or re-share or comment on another’s content (including ads), others will be able to view these “social actions” and associate it with you (e.g., your name, profile and photo if you provided it).</li>
                        </ul>
                        
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Your employer can see how you use Services they provided for your work (e.g. as a recruiter or sales agent) and related information. We will not show them your job searches or personal messages.</p>
                        </div>
                    </div>

                    <div className="">
                            <h3 className="section-text">Legal Disclosures</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">We may need to share your data when we believe it’s required by law or to help protect the rights and safety of you, us or others.</p>
                        </div>
                        <p className="subsection-text">It is possible that we will need to disclose information about you when required by law, subpoena, or other legal process or if we have a good faith belief that disclosure is reasonably necessary to (1) investigate, prevent or take action regarding suspected or actual illegal activities or to assist government enforcement agencies; (2) enforce our agreements with you; (3) investigate and defend ourselves against any third-party claims or allegations; (4) protect the security or integrity of our Services or the products or services of our Affiliates (such as by sharing with companies facing similar threats); or (5) exercise or protect the rights and safety of JobFinder, our Members, personnel or others. We attempt to notify Members about legal demands for their personal data when appropriate in our judgment, unless prohibited by law or court order or when the request is an emergency. We may dispute such demands when we believe, in our discretion, that the requests are overbroad, vague or lack proper authority, but we do not promise to challenge every demand. To learn more see our Data Request Guidelines and Transparency Report.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;