import React from "react";
import Image from "next/image"

const Accessibility = () => {
    return (
        <div className="w-full h-full my-10 flex flex-col items-center justify-start rounded-lg">
            <div className="w-full md:w-4/5 lg:w-2/3 xl:w-1/2 flex flex-col items-center justify-start mx-auto gap-8">
                <div className="w-full flex flex-col p-6 items-start gap-2 justify-start">
                    <div className="w-full flex items-start">
                        <div className="flex-1 flex flex-col items-start justify-start">
                    <h3 className="title-text"><span className="text-primary">Job Finder</span> is a place where every member of the global workforce can find opportunity</h3>
                    <h5 className="section-text">Whatever your goals, ideas, and abilities are, we’re here to help you succeed.</h5>
                        </div>

                        <div className="flex-[0.3] h-full flex items-center justify-center p-2 hidden lg:block">
                            <Image src="/assets/images/accessibility.png" alt="accessibility" width={250} height={200}
                            className="h-full w-full"
                             />
                        </div>
                    </div>
                    <p className="subsection-text">No two <span className="text-primary">Job Finder</span> members are the same—and it’s that diversity which makes our community so great.</p>
                    <p className="subsection-text">We’re on a journey to make accessibility and inclusive design part of our core principles, building accessibility from the ground up and testing our products with assistive technology to make sure that everyone can use <span className="text-primary">Job Finder</span> to advance their professional goals.</p>
                </div>

                <div className="w-full flex items-start p-6 bg-gray-100 rounded-2xl">
                    <div className="flex-[0.1] flex items-start justify-start p-2">
                        <Image src="/assets/images/conversation.png" alt="conversation" width={32} height={32}
                        className="w-full h-auto" />
                    </div>

                    <div className="flex-1 flex flex-col items-start justify-start px-2 py-5 gap-4">
                        <h2 className="section-text">Our Disability Answer Desk</h2>
                        <p className="subsection-text">Our teams are constantly working to improve the experience for all of <span className="text-primary">Job Finder</span>'s products by adding new features and making changes to better serve all our members and customers. We’re always open to feedback and would love to hear from you as to how we can make our products even better.</p>
                        <p className="subsection-text">If you find an accessibility bug or have trouble using <span className="text-primary">Job Finder</span>'s products with assistive technology, contact us and we’ll reach out to help you through it. We also offer support through Be My Eyes, a free app that connects blind and low-vision people with volunteers for visual assistance through a live video call.</p>
                        <p className="subsection-text">If you’re a screen reader user, please visit the articles on the Screen Reader Support page in the Help Center.</p>
                    </div>
                </div>

                <div className="w-full flex items-start p-6">
                    <div className="flex-[0.1] flex items-start justify-start p-2">
                        <Image src="/assets/images/target.png" alt="target" width={32} height={32}
                        className="w-full h-auto" />
                    </div>

                    <div className="flex-1 flex flex-col items-start justify-start px-2 py-5 gap-4">
                        <h2 className="section-text">Accessibility @ <span className="text-primary">Job Finder</span></h2>
                        <p className="subsection-text">As a <span className="text-primary">Job Finder</span> company, we've embraced digital inclusion, adopting the W3C (World Wide Web Consortium) WCAG (Web Content Accessibility Guidelines) V2.1 Level AA in the design and development of our products.</p>
                        <p className="subsection-text">As part of our commitment to accessibility we continuously audit our products—internally and through a third party—using assistive technology such as screen reading software (e.g., JAWS, NVDA, VoiceOver and TalkBack)</p>
                        <h4 className="section-2-text">Read more about our Accessibility journey</h4>
                        <p className="subsection-text"><span className="text-primary">Job Finder</span>'s Latest Accessibility Integration Helps All Members Access Content More Easily by Erran Berger, VP of Product Engineering </p>
                        <p className="subsection-text">Making Learning More Accessible by Dan Brodnitz, Global Head of Content Strategy</p>
                        <p className="subsection-text">Disparities in Employment Outcomes in the US for Individuals with Disabilities by Matthew Baird, Senior Staff Economist</p>
                        <p className="subsection-text">Unlock the potential of Dyslexic Thinking by In the Loop</p>
                        <p className="subsection-text">Driving a More Equitable Workforce with Enhanced A11Y Tools and Resources by Erran Berger, VP of Product Engineering </p>
                        <p className="subsection-text">Celebrating National Disability Employment Awareness Month at <span className="text-primary">Job Finder</span> with New Features and Important Conversations by Amyn Thawer, VP of Global Compliance & Integrity </p>
                        <p className="subsection-text">Our Journey to Make<span className="text-primary">Job Finder</span>More Inclusive and Accessible by Melissa Selcher, Chief Marketing and Communications Officer</p>
                    </div>
                </div>

                <div className="w-full flex items-start p-6 bg-gray-100 rounded-2xl">
                    <div className="flex-[0.1] flex items-start justify-start p-2">
                        <Image src="/assets/images/certificate.png" alt="certificate" width={32} height={32}
                        className="w-full h-auto" />
                    </div>

                    <div className="flex-1 flex flex-col items-start justify-start px-2 py-5 gap-4">
                        <h2 className="section-text">Want even more info?</h2>
                        <p className="subsection-text">We have policies and conformance documentation to help explain our commitment and the current state of our products.</p>
                        <p className="subsection-text"><span className="font-semibold">Policies:</span> Accessibility Policy for Employees in Ontario</p>
                        <p className="subsection-text"><span className="font-semibold">Conformance reports:</span> Need a Section 508, WCAG, or EN 301 549 conformance report about one of our products? All of them are available through <span className="text-primary">Job Finder</span>'s Accessibility Report Center.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accessibility;