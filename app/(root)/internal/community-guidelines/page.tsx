import Image from "next/image";
import React from "react";

const CommunityGuise = () => {
    return (
        <div className="w-full flex items-start justify-center">
            <div className="w-9/10 md:w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-center justify-start pt-6 gap-8">
                <div className="w-full flex items-center justify-center md:justify-between">
                    <div className="flex-[0.7] flex flex-col items-center md:items-start justify-center md:justify-start gap-4">
                        <h2 className="subhead-text">We want JobFinder to reflect the best version of professional life</h2>
                        <h5 className="section-text">This is a community where we treat each other with respect and help each other succeed.</h5>
                    </div>

                    <div className="flex-[0.2] h-full flex items-center justify-center hidden md:block">
                        <Image src="/assets/images/community.png" alt="community" width={350} height={350}
                            className="w-full h-full"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-around gap-6 md:gap-2">
                    <div className="w-1/2 md:w-[200px] gap-4 md:h-[250px] rounded-xl bg-primary/20 p-4 flex flex-col items-center md:items-start justify-center md:justify-between">
                        <h2 className="section-text">Be safe</h2>
                        <h5 className="subsection-text">Only bring safe converstation to JobFinder</h5>
                        <p className="paragraph-text">Learn more</p>
                    </div>

                    <div className="w-1/2 md:w-[200px] gap-4 md:h-[250px] rounded-xl bg-green-400/20 p-4 flex flex-col items-center md:items-start justify-center md:justify-between">
                        <h2 className="section-text">Be trustworthy</h2>
                        <h5 className="subsection-text">Use your true identity and share information that is real and authentic.</h5>
                        <p className="paragraph-text">Learn more</p>
                    </div>

                    <div className="w-1/2 md:w-[200px] gap-4 md:h-[250px] rounded-xl bg-blue-400/20 p-4 flex flex-col items-center md:items-start justify-center md:justify-between">
                        <h2 className="section-text">Be professional</h2>
                        <h5 className="subsection-text">We allow broad conversations about the world of work, but just keep it professional.</h5>
                        <p className="paragraph-text">Learn more</p>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col items-start justify-start p-4">
                        <h2 className="title-text">JobFinder Professional Community Policies</h2>
                        <p className="subsection-text ">Thank you for using JobFinder, where the world’s professionals come together to find jobs, stay informed, learn new skills, and build productive relationships. The content that you contribute should add to the JobFinder community in a constructive manner. Additional information on what that means, is laid out below. You should also review our Publishing Platform Guidelines. Together we can make our community a place where everyone is able to learn, grow, and communicate, which, in turn, helps create economic opportunity for everyone.</p>
                    </div>

                    <div className="w-full flex items-start justify-start">
                        <div className="flex-[0.1] flex items-start justify-center pt-12">
                            <Image src="/assets/images/conversation.png" alt="conversation" width={44} height={44} />
                        </div>

                        <div className="flex-1 flex flex-col items-start justify-start p-4">
                            <h3 className="title-text">Tell us if you see abusive content</h3>
                            <p className="paragraph-text">If you see something you believe may violate our policies, whether in profiles, posts, messages, comments, or anywhere else, please report it to us. Combined with our automated defenses, these reports help us identify and prevent abuse. Users can report content by clicking on the three dots icon in the upper right-hand corner of the content itself on JobFinder. Please use the reporting tools responsibly and only for their intended purposes. To learn more about how to report inappropriate content, behavior, or members, visit our Transparency Center.</p>
                            <p className="paragraph-text">In addition to JobFinder's trained content reviewers, we use automated systems to identify potentially violative content. Violating content can be removed from JobFinder. Learn more about our approach to content moderation, including our automated systems</p>
                        </div>
                    </div>

                    <div className="w-full flex items-start justify-start">
                        <div className="flex-[0.1] flex items-start justify-center pt-12">
                            <Image src="/assets/images/shield.png" alt="conversation" width={44} height={44} />
                        </div>

                        <div className="flex-1 flex flex-col items-start justify-start p-4">
                            <h3 className="title-text">Violating our community policies can result in action against your account or content</h3>
                            <p className="paragraph-text">These policies apply to all members. Depending on the severity of violation, we may limit the visibility of certain content, label it, or remove it entirely. Repeated or egregious offenses will result in account restriction. If you believe action taken on your content or your account was in error, you can submit an appeal</p>
                            <p className="paragraph-text">Learn more about how we enforce violations of our Professional Community Policies.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start p-4 md:p-0 ">
                    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between border-b-[5px] border-primary/20">
                        <div className="w-full md:flex-[0.5] flex flex-col items-start justify-around">
                            <h2 className="title-text">Be safe</h2>
                            <p className="paragraph-text">Only bring safe conversations to JobFinder</p>
                        </div>

                        <div className="md:flex-[0.3] w-full flex items-center justify-center">
                        <Image src="/assets/images/kids.png" alt="kids" width={200} height={200} />
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-4 mt-5">
                        <p className="paragraph-text"><span className="font-bold">Do not post harassing content:</span> We don’t allow bullying or harassment. This includes targeted personal attacks, intimidation, shaming, disparagement, and abusive language directed at other members. Do not reveal others' personal or sensitive information (for example, doxing), or incite others to do the same. You may not engage in trolling or other repetitive negative content that disrupts other members or conversations on the platform.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not threaten, incite, or promote violence:</span> We don’t allow threatening or inciting violence of any kind. We don’t allow individuals or groups that engage in or promote violence, property damage, or organized criminal activity. You may not use JobFinder to express support for such individuals or groups or to otherwise glorify violence.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not share material depicting the exploitation of children:</span> We have zero tolerance for content that depicts the sexual exploitation of children. Do not share, post, transmit, or solicit child exploitation material through or using our platform. Do not use JobFinder in any way to facilitate, encourage, or engage in the abuse or exploitation of children. When we become aware of apparent child exploitation, we report it to the National Center for Missing and Exploited Children (NCMEC). Additionally, while we recognize that there may be instances where people share images of non-sexualized child nudity with good intentions, we generally remove these images due to the potential of misappropriation and abuse by others.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not promote, sell or attempt to purchase illegal or dangerous goods or services:</span> We don't allow content that facilitates the purchase of illegal or dangerous goods and/or services, prostitution, and escort services. We don't allow content that promotes or distributes fake educational and/or professional certifications, sale of scraped data, proxy test-taking, or instructions on creating forged official documents. You may not use JobFinder to hold lotteries, contests, sweepstakes, or giveaways. Do not use JobFinder to sensationalize or capitalize on tragic events for commercial purposes.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not share content promoting dangerous organizations or individuals:</span> We don't allow any terrorist organizations or violent extremist groups on our platform. And we don't allow any individuals who affiliate with such organizations or groups to have a JobFinder profile. Content that depicts terrorist activity, that is intended to recruit for terrorist organizations, or that threatens, promotes, or supports terrorism in any manner is not tolerated.</p>  
                    </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start p-4 md:p-0 ">
                    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between border-b-[5px] border-green-400/20">
                        <div className="w-full md:flex-[0.5] flex flex-col items-start justify-around">
                            <h2 className="title-text">Be Trustworthy</h2>
                            <p className="paragraph-text">We require you to use your true identity on JobFinder, provide accurate information about yourself or your organization, and only share information that is real and authentic.</p>
                        </div>

                        <div className="md:flex-[0.3] w-full flex items-center justify-center">
                        <Image src="/assets/images/meeting.png" alt="meeting" width={200} height={200} />
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-4 mt-5">
                        <p className="paragraph-text"><span className="font-bold">Do not share false or misleading content:</span> Do not share content that is false, misleading, or intended to deceive. Do not share content to interfere with or improperly influence an election or other civic process. Do not share synthetic or manipulated media that depicts a person saying something they did not say or doing something they did not do without clearly disclosing the fake or altered nature of the material. Do not share content that directly contradicts guidance from leading global health organizations and public health authorities; including false information about the safety or efficacy of vaccines or medical treatments. Do not share content or endorse someone or something in exchange for personal benefit (including personal or family relationships, monetary payment, free products or services, or other value), unless you have included a clear and conspicuous notice of the personal benefit you receive and have otherwise complied with our Advertising Policies.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not create a fake profile or falsify information about yourself:</span> We don’t allow fake profiles or entities. Do not post misleading or deceptive information about yourself, your business, your qualifications, work experience, affiliations, or achievements. Do not use an image of someone else, or any other image that is not your likeness, for your profile photo. Do not associate yourself on JobFinder with a business or organization that you are not actually professionally associated with. Do not use or attempt to use another person's JobFinder account or create a member profile for anyone other than yourself. And do not share your JobFinder account with anyone else.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not scam, defraud, deceive others:</span> Do not use LinkedIn to facilitate romance scams, promote pyramid schemes, or otherwise defraud members. Do not share malicious software that puts our members, platform, or services at risk. Phishing attempts are not tolerated.</p>  
                    </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start p-4 md:p-0 ">
                    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between border-b-[5px] border-blue-400/20">
                        <div className="w-full md:flex-[0.5] flex flex-col items-start justify-around">
                            <h2 className="title-text">Be professional</h2>
                            <p className="paragraph-text">JobFinder’s mission is to connect the world's professionals to make them more productive and successful. We allow broad conversations about the world of work, but require professional expression. To maintain a professional platform, members should treat each other with respect and civility. Do not interact with others or share content in a way that's uncivil, inappropriate, or disrespectful.</p>
                        </div>

                        <div className="md:flex-[0.3] w-full flex items-center justify-center">
                        <Image src="/assets/images/frontdesk.png" alt="frontdesk" width={200} height={200} />
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-start gap-4 mt-5">
                        <p className="paragraph-text"><span className="font-bold">Do not be hateful:</span> We don't allow content that attacks, denigrates, intimidates, dehumanizes, incites or threatens hatred, violence, prejudicial or discriminatory action against individuals or groups because of their actual or perceived race, ethnicity, national origin, caste, gender, gender identity, sexual orientation, religious affiliation, age, or disability status. Hate groups are not permitted on JobFinder. Do not use racial, religious, or other slurs that incite or promote hatred, or any other content intended to create division. Do not post or share content that denies a well-documented historical event such as the Holocaust or slavery in the United States.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not engage in sexual innuendos or unwanted advances:</span> We don't allow unwanted expressions of attraction, desire, requests for romantic relationship, marriage proposals, sexual advances or innuendo, or lewd remarks. JobFinder is a professional networking platform, not a dating site. Do not use JobFinder to pursue romantic connections, ask for romantic dates, or provide sexual commentary on someone's appearance or perceived attractiveness. Do not send unwanted advances in messages, posts, or comments or send sexually explicit images to anyone on the platform.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not share harmful or shocking material:</span> We don't allow content that is excessively gruesome or shocking. This includes content that is sadistic or gratuitously graphic, such as the depiction of bodily injury, severe physical or sexual violence. We don't allow content, activities, or events that promote, organize, depict, or facilitate criminal activity. We also don't allow content depicting or promoting instructional weapon making, drug abuse, and threats of theft. Do not engage in or promote escort services, prostitution, exploitation of children, or human trafficking. Do not share content or activities that promote or encourage suicide or any type of self-injury, including self-mutilation and eating disorders. If you see signs that someone may be considering self-harm, please report it using our reporting tools and consider also reporting it to your local law enforcement authorities. Do not share material depicting nudity or sexual activity.</p>  
                        <p className="paragraph-text"><span className="font-bold">Do not spam members or the platform:</span> We don't allow untargeted, irrelevant, obviously unwanted, unauthorized, in appropriately commercial or promotional, or gratuitously repetitive messages or similar content. Do not use our invitation feature to send promotional messages to people you don't know or to otherwise spam people. Please make the effort to create original, professional, relevant, and interesting content in order to gain engagement. Don't do things to artificially increase engagement with your content. Respond authentically to others’ content and don’t agree with others ahead of time to like or re-share each other’s content</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityGuise;
