import React from "react";
import Image from "next/image"

const GuestControl = () => {
    return (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center py-8">
           <div className="w-9/10 md:w-3/5 flex flex-col items-start justify-start bg-white rounded-2xl p-6 gap-6">
           <h2 className="subhead-text text-primary">Unsubscribe</h2>

           <p className="subsection-text">Unsubscribe from JobFinder Email Communications JobFinder uses email addresses uploaded by members to make suggestions in features like People You May Know. Use this link to unsubscribe, you will stop receiving JobFinder invitations and your email will stop being processed by JobFinder.</p>
           <p className="subsection-text">Unsubscribe from JobFinder SMS Communications JobFinder uses phone numbers uploaded by members to make suggestions in features like People You May Know. If you are a JobFinder member, you may also receive select notifications via SMS, such as PIN verification codes. Use this link to unsubscribe. You will stop receiving JobFinder SMS and your phone number will stop being processed by JobFinder.</p>
           <p className="subsection-text">Opt-out of Targeted Advertising If you're not a JobFinder member, you can opt out of JobFinder's and its partners' tracking of visits to JobFinder for targeted advertising purposes by clicking on this link. In California, this setting also serves as your opt-out of JobFinder's "sharing" your personal information. This is a cookie-based opt-out, so it is browser-specific and is rendered ineffective by clearing or blocking cookies, or cookies' expiration set by the browser maker. If you're a JobFinder member, please go to the Ads Settings page to manage your preferences.</p>
           <p className="subsection-text">Guest Recent History See more relevant search recommendations based on searches you've done in the past while signed out.</p>
           <p className="subsection-text">We adhere to self-regulatory principles for interest based advertising. If you wish to not receive targeted ads from most third party companies, you may opt-out as described here.</p>
            </div> 
        </div>
    )
};

export default GuestControl;