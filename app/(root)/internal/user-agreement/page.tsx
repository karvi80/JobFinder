import React from "react";
import Image from "next/image"

const UserAgreement = () => {
    return (
        <div className="w-full h-full my-10 flex flex-col items-center justify-start rounded-lg gap-6">
            <div className="flex items-center justify-center w-full p-10 bg-primary bg-opacity-20">
                <h1 className="head-text">User Agreement</h1>
            </div>

            <div className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-start justify-start mx-auto gap-4">
                <div className="flex flex-col items-start justify-start p-3">
                    <h3 className="section-text">Effective on November 20, 2024</h3>
                    <p className="subsection-text">Our mission is to connect the world’s professionals to allow them to be more productive and successful. <br />
                        Our services are designed to promote economic opportunity for our members by enabling you and millions of other professionals to meet, exchange ideas, learn, and find opportunities or employees, work, and make decisions in a network of trusted relationships.</p>
                </div>

                <h2 className="subhead-text">Introduction</h2>

                <div className="flex flex-col items-start justify-start p-3 gap-4">
                    <h2 className="title-text">Contract</h2>
                    <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                        <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                            className="flex-[0.1]" />
                        <p className="paragraph-text">When you use our Services you agree to all of these terms. Your use of our Services is also subject to our Cookie Policy and our Privacy Policy, which covers how we collect, use, share, and store your personal information.</p>
                    </div>
                    <p className="subsection-text">By creating a <span className="text-primary">Job Finder</span> account or accessing or using our Services (described below), you are agreeing to enter into a legally binding contract with <span className="text-primary">Job Finder</span> (even if you are using third party credentials or using our Services on behalf of a company). If you do not agree to this contract (“Contract” or “User Agreement”), do not create an account or access or otherwise use any of our Services. If you wish to terminate this Contract at any time, you can do so by closing your account and no longer accessing or using our Services.</p>

                    <div className="flex flex-col items-start justify-start p-3">
                        <h3 className="section-text">Services</h3>
                        <p className="subsection-text">This Contract applies to jobfinder.com, JobFinder-branded apps, and other JobFinder-related sites, apps, communications, and other services that state that they are offered under this Contract (“Services”), including the offsite collection of data for those Services, such as via our ads and the “Apply with Job Finder” and “Share with Job Finder plugins.</p>
                    </div>

                    <div className="flex flex-col items-start justify-start p-3 gap-3">
                        <h3 className="section-text">Job Finder</h3>
                        <p className="subsection-text">You are entering into this Contract with Job Finder (also referred to as “we” and “us”).</p>
                        <p className="subsection-text">We use the term “Designated Countries” to refer to countries in the European Union (EU), European Economic Area (EEA), and Switzerland.</p>
                        <p className="subsection-text">If you reside in the “Designated Countries”, you are entering into this Contract with JobFinder Ireland Unlimited Company (JobFinder Ireland”) and JobFinder Ireland will be the controller of your personal data provided to, or collected by or for, or processed in connection with our Services.</p>
                        <p className="subsection-text">If you reside outside of the “Designated Countries”, you are entering into this Contract with JobFinder Corporation (JobFinder Corp.”) and JobFinder Corp. will be the controller of (or business responsible for) your personal data provided to, or collected by or for, or processed in connection with our Services.</p>
                        <p className="subsection-text">As a Visitor or Member of our Services, the collection, use, and sharing of your personal data is subject to our Privacy Policy, our Cookie Policy and other documents referenced in our Privacy Policy, and updates. You acknowledge and have read our Privacy Policy.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start p-3 gap-6">
                    <h2 className="title-text">Obligations</h2>
                    <div className="w-full flex flex-col items-start justify-start gap-2 p-3">
                        <h3 className="section-text">Service Eligibility</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Here are some promises that you make to us in this Contract:</p>
                        </div>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">You’re eligible to enter into this Contract and you are at least our “Minimum Age.”</p>
                        </div>
                        <p className="subsection-text">The Services are not for use by anyone under the age of 16.</p>
                        <p className="subsection-text">To use the Services, you agree that: <br /> (1) you must be the "Minimum Age" (described below) or older; <br /> (2) you will only have one Job Finder account, which must be in your real name; <br /> (3) and you are not already restricted by Job Finder from using the Services. Creating an account with false information is a violation of our terms, including accounts registered on behalf of others or persons under the age of 16.</p>
                        <p className="subsection-text">“Minimum Age” means 16 years old. However, if law requires that you must be older in order for JobFinder to lawfully provide the Services to you without parental consent (including using your personal data) then the Minimum Age is such older age.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Your Account</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">You will keep your password a secret</p>
                        </div>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">You will not share your account with anyone else and will follow our policies and the law.</p>
                        </div>
                        <p className="subsection-text">Members are account holders. You agree to: <br /> (1) protect against wrongful access to your account (e.g., use a strong password and keep it confidential); <br /> (2) not share or transfer your account or any part of it (e.g., sell or transfer the personal data of others by transferring your connections); <br /> (3) follow the law, our list of Dos and Don’ts (below), and our Professional Community Policies. Learn More You are responsible for anything that happens through your account unless you close it or report misuse.</p>
                        <p className="subsection-text">As between you and others (including your employer), your account belongs to you. However, if the Services were purchased by another party for you to use (e.g., Recruiter seat or JobFinder Learning subscription bought by your employer), the party paying for such Service has the right to control access to and get reports on your use of such paid Service; however, they do not have rights to your personal account.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Payment</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">You’ll honor your payment obligations and you are okay with us storing your payment information. You understand that there may be fees and taxes that are added to our prices.</p>
                        </div>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Refunds are subject to our policy, and we may modify our prices prospectively.</p>
                        </div>
                        <p className="subsection-text">If you buy any of our paid Services, you agree to pay us the applicable fees and taxes and you agree to the additional terms specific to the paid Services. Failure to pay these fees will result in the termination of your paid Services. Also, you agree that:</p>
                        <ul className="flex flex-col items-start justify-start list-disc px-4 py-2 gap-2">
                            <li className="paragraph-text">Your purchase may be subject to foreign exchange fees or differences in prices based on location (e.g., exchange rates).</li>
                            <li className="paragraph-text">We may store and continue billing your payment method (e.g., credit card), even after it has expired, to avoid interruptions in your paid Services and to use it to pay for other Services you may buy. You may update or change your payment method.</li>
                            <li className="paragraph-text">If you purchase a subscription, your payment method automatically will be charged at the start of each subscription period for the fees and taxes applicable to that period. To avoid future charges, cancel before the renewal date. Learn how to cancel or suspend your paid subscription Services.</li>
                            <li className="paragraph-text">We may modify our prices effective prospectively upon reasonable notice to the extent allowed under the law.</li>
                            <li className="paragraph-text">All of your paid Services are subject to JobFinder’s refund policy.</li>
                            <li className="paragraph-text">We may calculate taxes payable by you based on the billing information that you provide us.</li>
                        </ul>
                        <p className="subsection-text">You can get a copy of your invoice through your LinkedIn account settings under “Purchase History”.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Sharing</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">When you share information on our Services, others can see, copy and use that information.</p>
                        </div>
                        
                        <p className="subsection-text">Our Services allow sharing of information (including content) in many ways, such as through your profile, posts, articles, group posts, links to news articles, job postings, messages, and InMails. Depending on the feature and choices you make, information that you share may be seen by other Members, Visitors, or others (on or off of the Services). Where we have made settings available, we will honor the choices you make about who can see content or other information (e.g., message content to your addressees, sharing content only to JobFinder connections, restricting your profile visibility from search tools, or opting not to notify others of your JobFinder profile update). For job searching activities, we default to not notifying your connections or the public. So, if you apply for a job through our Services or opt to signal that you are interested in a job, our default is to share it only with the job poster.</p>
                        <p className="subsection-text">To the extent that laws allow this, we are not obligated to publish any content or other information on our Services and can remove it with or without notice.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Limits</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">We have the right to limit how you connect and interact on our Services.</p>
                        </div>
                        
                        <p className="subsection-text">JobFinder reserves the right to limit your use of the Services, including the number of your connections and your ability to contact other Members. JobFinder reserves the right to restrict, suspend, or terminate your account if you breach this Contract or the law or are misusing the Services (e.g., violating any of the Dos and Don’ts or Professional Community Policies).</p>
                        <p className="subsection-text">We can also remove any content or other information you shared if we believe it violates our Professional Community Policies or Dos and Don’ts or otherwise violates this Contract. Learn more about how we moderate content.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Complaints Regarding Content</h3>
                        <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Contact information for complaints about content provided by our Members.</p>
                        </div>
                        
                        <p className="subsection-text">We ask that you report content and other information that you believe violates your rights (including intellectual property rights), our Professional Community Policies or otherwise violates this Contract or the law. To the extent we can under law, we may remove or restrict access to content, features, services, or information, including if we believe that it’s reasonably necessary to avoid harm to JobFinder or others, violates the law or is reasonably necessary to prevent misuse of our Services. We reserve the right to take action against serious violations of this Contract, including by implementing account restrictions for significant violations.</p>
                        <p className="subsection-text">We respect the intellectual property rights of others. We require that information shared by Members be accurate and not in violation of the intellectual property rights or other rights of third parties. We provide a policy and process for complaints concerning content shared, and/or trademarks used, by our Members.</p>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start gap-3 p-3">
                        <h3 className="section-text">Complaints Regarding Content</h3>
                        
                        
                        <p className="subsection-text">We ask that you report content and other information that you believe violates your rights (including intellectual property rights), our Professional Community Policies or otherwise violates this Contract or the law. To the extent we can under law, we may remove or restrict access to content, features, services, or information, including if we believe that it’s reasonably necessary to avoid harm to JobFinder or others, violates the law or is reasonably necessary to prevent misuse of our Services. We reserve the right to take action against serious violations of this Contract, including by implementing account restrictions for significant violations.</p>
                        <p className="subsection-text">We respect the intellectual property rights of others. We require that information shared by Members be accurate and not in violation of the intellectual property rights or other rights of third parties. We provide a policy and process for complaints concerning content shared, and/or trademarks used, by our Members.</p>
                    </div>
                </div>

                <div className="flex flex-col items-start justify-start p-3">
                    <h2 className="title-text">How To Contact Us</h2>
                    <div className="">
                    <div className="flex items-start p-3 bg-blue-200 bg-opacity-20 gap-2">
                            <Image src="/assets/icons/bulb.png" alt="bulb" width={24} height={24}
                                className="flex-[0.1]" />
                            <p className="paragraph-text">Contact information for complaints about content provided by our Members.</p>
                        </div>
                    <p className="subsection-text">For general inquiries, you may contact us online. For legal notices or service of process, you may write us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAgreement;