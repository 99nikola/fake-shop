import { useRouter } from "next/router";
import { useCallback } from "react";
import StyledLink, { StyledLinkProps } from "./StyledLink.styled";

interface LinkProps extends StyledLinkProps {
    href: string,
}

const Link: React.FC<LinkProps> = ({ href, children, ...rest }) => {

    const router = useRouter();

    const link = useCallback(() => {
        if (router.pathname === href)
            return;

        router.replace({
            pathname: href
        });

    }, [router.pathname, router.pathname, href]);

    return (
        <StyledLink onClick={link} {...rest}>
            {children}
        </StyledLink>
    )
}

export default Link;