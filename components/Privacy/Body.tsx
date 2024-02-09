import React from 'react'
import { StyledGrid } from '../Home/Features'
import { Box, Grid } from '@mui/material';
import { Text, Title } from '../Terms/Body';
import { OutstripLink } from '../Home/Footer';

export default function PrivacyBody() {
    return (
        <StyledGrid container>

            <Grid item container xs={12} justifyContent="center" alignItems="center">

                <Box sx={{ justifyContent: "center", width: { xs: "80%", md: "60%" } }}>


                    <Title>1. WHAT THIS PRIVACY POLICY COVERS</Title>
                    <br />
                    <Text>
                        Here&apos;s how Outstrip SEO handles your personal information:
                    </Text>
                    <Text>
                        This policy explains how we treat the information we collect and receive about you, including details about your past use of our services.
                    </Text>
                    <br />
                    <Text>
                        What kind of information do we collect?
                    </Text>
                    <Text>
                        We collect things like your first name, last name and email address, but only if you choose to share them with us. This information isn&apos;t publicly available elsewhere.
                    </Text>
                    <br />
                    <Text>
                        What this policy doesn&apos;t cover?
                    </Text>
                    <Text>
                        This policy doesn&apos;t apply to other companies or people not connected to Outstrip SEO.
                    </Text>
                    <br />
                    <Title>2. THE INFORMATION COLLECTED</Title>
                    <br />
                    <Text>
                        What information does Outstrip SEO collect?
                    </Text>
                    <Text>
                        At Outstrip SEO, we only collect personal information when you give us the go-ahead. This usually happens when you sign up for things like our surveys, newsletters, or other cool features we offer.
                    </Text>
                    <Text>
                        The information we might collect could include things like your first name, last name and email address (but hey, that&apos;s not all - that&apos;s just an example!).
                    </Text>
                    <br />
                    <Title>3. HOW PERSONAL INFORMATION MAY BE USED</Title>
                    <br />
                    <Text>
                        If you share your info, you might get updates from us or our partners about new features, offers, or just cool stuff we think you&apos;d dig.
                    </Text>
                    <br />
                    <Text>
                        Users can always contact us via <OutstripLink>outstrip.tech@gmail.com</OutstripLink> and request to remove their information from all distribution lists.
                    </Text>
                    <br />
                    <Title>4. HOW PRIVATE INFORMATION IS PROTECTED, CHANGED AND UPDATED.</Title>
                    <br />
                    <Text>
                        Account information and deletion of personal identifiable information will be executed upon user request.
                    </Text>
                    <br />

                </Box>
            </Grid>


        </StyledGrid>
    )
}
