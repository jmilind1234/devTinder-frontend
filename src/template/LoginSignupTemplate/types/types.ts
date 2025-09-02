export interface LoginSignupTemplateProps {
    headingText : string;
    headingStatus : boolean;
    contentText: string;
    contentStatus : boolean;
    form : React.ReactNode;
    formStatus ?: boolean;
    bottomText : string;
    bottomLinkText : string;
    bottomLinkStatus ?: boolean;
    bottomSectionStatus ?: boolean;
    bottomLinkTextStatus ?: boolean;
    bottomLink ?: string;
}