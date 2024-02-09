import React from 'react'
import { StyledGrid } from '../Home/Features'
import { Box, Grid, Typography, styled } from '@mui/material';
import { OutstripLink } from '../Home/Footer';

export const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontWeight: 600,
    fontSize: "18px",
    color: "#212832",
    [theme.breakpoints.up('sm')]: {
        fontSize: "20px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "22px",
    },
}));
export const Text = styled(Typography)(({ theme }) => ({
    fontFamily: "DM Sans",
    fontWeight: 400,
    fontSize: "16px",
    color: "#18242B",
    textAlign: "justify",
    paddingRight: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
        fontSize: "18px",
    },
    [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(15),
        fontSize: "20px",
    },
}));

export default function TermsBody() {
    return (
        <StyledGrid container>

            <Grid item container xs={12} justifyContent="center" alignItems="center">

                <Box sx={{ justifyContent: "center", width: { xs: "80%", md: "60%" } }}>


                    <Title>Last updated: January 31, 2024</Title>
                    <br />
                    <Text>
                        Protect yourself and understand our rules - Read our Terms of Service carefully before browsing.
                    </Text>
                    <br />
                    <Text>
                        Your access to and use of this service depend on your acceptance of these Terms. This includes everyone, whether just browsing or actively using the service.
                    </Text>
                    <br />
                    <Text>
                        Our Terms outline the rules for using our Service. Please review them carefully. If you don&apos;t agree, you won&apos;t be able to use it.
                    </Text>
                    <br />
                    <Title>Subscriptions</Title>
                    <br />
                    <Text>
                        Upgrade your experience with subscriptions! Pay upfront for monthly or yearly access to exclusive features.
                    </Text>
                    <br />
                    <Title>Free Trial</Title>
                    <br />
                    <Text>
                        Experience Outstrip risk-free for a limited period with our free trial offer.
                    </Text>
                    <br />
                    <Text>
                        We&apos;re always improving the free trial, so some things might change. If we cancel it, we&apos;ll let you know.
                    </Text>
                    <br />
                    <Title>Accounts</Title>
                    <br />
                    <Text>
                        Join our community! Be 18+, keep your info accurate, and enjoy all the benefits. (We might need to close accounts with incorrect info.)
                    </Text>
                    <br />
                    <Text>
                        Heads up! It&apos;s your responsibility to keep your login info secure. Remember, you&apos;re accountable for your account activity.
                    </Text>
                    <br />
                    <Title>Copyright Policy</Title>
                    <br />
                    <Text>
                        We protect creators and their work. If you believe someone&apos;s copyright or other rights are being violated, report it to us.
                    </Text>
                    <br />
                    <Text>
                        If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to outstrip.tech@gmail.com, with the subject line: &quot;Copyright Infringement&quot; and include in your claim a detailed description of the alleged Infringement as detailed below, under &quot;DMCA Notice and Procedure for Copyright Infringement Claims&quot;
                    </Text>
                    <br />
                    <Text>
                        We take copyright seriously, but please file claims responsibly. Misusing this process can have consequences.
                    </Text>
                    <br />
                    <Title>Contact Us</Title>
                    <br />
                    <Text>If you have any questions about these Terms, please contact us at</Text>
                    <Text><OutstripLink>outstrip.tech@gmail.com</OutstripLink></Text>
                    <br />

                </Box>
            </Grid>


        </StyledGrid>
    )
}
