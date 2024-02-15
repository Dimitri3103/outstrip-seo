"use client"

import React, { Fragment } from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

// Create Document Component
const MyDocument = (props: any) => {

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = date + "/" + month + "/" + year;

    const { url, metadata, reference, performance, advance, score } = props;

    const styles = StyleSheet.create({
        page: { fontSize: 12, flexDirection: 'column', paddingLeft: 10, paddingRight: 10 },

        spaceBetween: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', color: "#3E3E3E" },

        titleContainer: { flexDirection: 'row', marginTop: 24 },

        reportTitle: { fontSize: 16, textAlign: 'center' },

        addressTitle: { fontSize: 11, fontStyle: 'bold' },

        invoice: { fontWeight: 600, fontSize: 18, color: "rgb(193, 46, 42)" },

        invoiceNumber: { fontSize: 16, fontWeight: 600, color: "#000" },

        invoiceNumber2: { fontSize: 14, fontWeight: 600, color: "rgba(0, 0, 0, 0.45)" },

        address: { fontWeight: 400, fontSize: 10 },

        theader: { marginTop: 20, fontSize: 10, fontStyle: 'bold', paddingTop: 4, paddingLeft: 7, flex: 1, height: 20, backgroundColor: '#DEDEDE', borderColor: 'whitesmoke', borderRightWidth: 1, borderBottomWidth: 1 },

        theader2: { flex: 2, borderRightWidth: 0, borderBottomWidth: 1 },

        tbody: { fontSize: 9, paddingTop: 4, paddingLeft: 7, flex: 1, borderColor: 'whitesmoke', borderRightWidth: 1, borderBottomWidth: 1 },

        total: { fontSize: 9, paddingTop: 4, paddingLeft: 7, flex: 1.5, borderColor: 'whitesmoke', borderBottomWidth: 1 },

        tbody2: { flex: 2, borderRightWidth: 1, }
    })

    const InvoiceTitle = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <Image
                    style={{ width: 100, height: "auto" }}
                    src="/outstrip-seo.png" />
                <Text style={styles.reportTitle}>Outstrip</Text>
            </View>
        </View>
    );

    const Address = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View>
                    <Text style={styles.invoice}>Rapport généré pour :</Text>
                    <Text style={styles.invoiceNumber}>{url}</Text>
                </View>
                <View>
                    <Text style={styles.invoice}>Score</Text>
                    <Text style={styles.invoiceNumber}>{score}</Text>
                </View>
            </View>
        </View>
    );

    const TableHead = () => (
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
            <View style={[styles.theader, styles.theader2]}>
                <Text >Tests des métadonnées</Text>
            </View>
            <View style={styles.theader}>
                <Text>Résultats</Text>
            </View>
            <View style={styles.theader}>
                <Text>Impact</Text>
            </View>
        </View>
    );
    const TableBody = () => (

        <Fragment>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de méta-titre</Text>
                </View>
                <View style={styles.tbody}>
                    {metadata.title_length != 0 ? <Text>{metadata.title}</Text> : <Text>Cette page Web ne contient pas de balise de titre!</Text>}
                </View>
                <View style={styles.tbody}>
                    {metadata.title_length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Longueur du méta-titre</Text>
                </View>
                <View style={styles.tbody}>
                    {metadata.title_length != 0 ? <Text>{metadata.title_length} caractères.</Text> : <Text>Cette page Web ne contient pas de balise de titre!</Text>}
                </View>
                <View style={styles.tbody}>
                    {metadata.title_length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de méta-description</Text>
                </View>
                <View style={styles.tbody}>
                    {metadata.meta_description_length != 0 ? <Text>{metadata.meta_description}</Text> : <Text>Cette page Web ne contient pas de balise méta description!</Text>}
                </View>
                <View style={styles.tbody}>
                    {metadata.meta_description_length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Longueur de la méta description</Text>
                </View>
                <View style={styles.tbody}>
                    {metadata.meta_description_length != 0 ? <Text>{metadata.meta_description_length} caractères</Text> : <Text>Cette page Web ne contient pas de balise méta description!</Text>}
                </View>
                <View style={styles.tbody}>
                    {metadata.meta_description_length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test des balises de titre H1</Text>
                </View>
                <View style={styles.tbody}>
                    {metadata.h1.length != 0 ? <Text>Cette page Web contient {metadata.h1.length} balises H1.</Text> : <Text>Cette page Web ne contient pas de balises H1!</Text>}
                </View>
                <View style={styles.tbody}>
                    {metadata.h1.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>H2 Heading Tags Test</Text>
                </View>
                <View style={styles.tbody}>
                    {metadata.h2.length != 0 ? <Text>Cette page Web contient {metadata.h2.length} balises H2.</Text> : <Text>Cette page Web ne contient pas de balises H2!</Text>}
                </View>
                <View style={styles.tbody}>
                    {metadata.h2.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
        </Fragment >
    );

    const TableHead2 = () => (
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
            <View style={[styles.theader, styles.theader2]}>
                <Text>Tests de performance</Text>
            </View>
            <View style={styles.theader}>
                <Text>Résultats</Text>
            </View>
            <View style={styles.theader}>
                <Text>Impact</Text>
            </View>
        </View>
    );
    const TableBody2 = () => (
        <Fragment>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de minification CSS</Text>
                </View>
                <View style={styles.tbody}>
                    {performance.minified_css.length != 0 ? <Text>Cette page Web contient {performance.minified_css.length} fichier(s) CSS minifié(s).</Text> : <Text>Cette page Web ne contient aucun fichier CSS minifié!</Text>}
                </View>
                <View style={styles.tbody}>
                    {performance.minified_css.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de non-minification CSS</Text>
                </View>
                <View style={styles.tbody}>
                    {performance.css_not_minified.length != 0 ? <Text>Cette page Web contient {performance.css_not_minified.length} fichier(s) CSS non minifié(s).</Text> : <Text>Cette page Web ne contient aucun fichier CSS non minifié!</Text>}
                </View>
                <View style={styles.tbody}>
                    {performance.css_not_minified.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de minification Javascript</Text>
                </View>
                <View style={styles.tbody}>
                    {performance.minified_js.length != 0 ? <Text>Cette page Web contient {performance.minified_js.length} fichier(s) Javascript minifié(s).</Text> : <Text>Cette page Web ne contient aucun fichier Javascript minifié!</Text>}
                </View>
                <View style={styles.tbody}>
                    {performance.minified_js.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de non-minification Javascript</Text>
                </View>
                <View style={styles.tbody}>
                    {performance.js_not_minified.length != 0 ? <Text>Cette page Web contient {performance.js_not_minified.length} fichier(s) Javascript non minifié(s).</Text> : <Text>Cette page Web ne contient aucun fichier Javascript non minifié!</Text>}
                </View>
                <View style={styles.tbody}>
                    {performance.js_not_minified.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Éléments délivrés par CDN</Text>
                </View>
                <View style={styles.tbody}>
                    {performance.elements_delivered_by_cdn.length != 0 ? <Text>Cette page Web contient {performance.elements_delivered_by_cdn.length} elements élément(s) délivré(s) par CDN (Content Delivery Networks).</Text> : <Text>Cette page Web ne contient aucun élément délivré par CDN (Content Delivery Networks).!</Text>}
                </View>
                <View style={styles.tbody}>
                    {performance.elements_delivered_by_cdn.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Éléments non délivrés par CDN</Text>
                </View>
                <View style={styles.tbody}>
                    {performance.elements_not_delivered_by_cdn.length != 0 ? <Text>Cette page Web contient {performance.elements_not_delivered_by_cdn.length} élément(s) non délivré(s) par CDN (Content Delivery Networks).</Text> : <Text>Cette page Web ne contient aucun élément non délivré par CDN (Content Delivery Networks)!</Text>}
                </View>
                <View style={styles.tbody}>
                    {performance.elements_not_delivered_by_cdn.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de balises HTML obsolètes</Text>
                </View>
                <View style={styles.tbody}>
                    <Text>{performance.old_tags}</Text>
                    {performance.old_tags != "no issues" ? <Text>Cette page Web utilise des balises HTML obsolètes.</Text> : <Text>Cette page Web n&apos;utilise pas de balises HTML obsolètes.</Text>}
                </View>
                <View style={styles.tbody}>
                    {performance.old_tags == "no issues" ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            {/* <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de vitesse de chargement du site</Text>
                </View>
                <View style={styles.tbody}>
                    <Text>{performance.load_time}</Text>
                </View>
                <View style={styles.tbody}>
                    {performance.load_time < 5 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View> */}
        </Fragment>
    );

    const TableHead3 = () => (
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
            <View style={[styles.theader, styles.theader2]}>
                <Text>Tests avancés</Text>
            </View>
            <View style={styles.theader}>
                <Text>Résultats</Text>
            </View>
            <View style={styles.theader}>
                <Text>Impact</Text>
            </View>
        </View>
    );
    const TableBody3 = () => (
        <Fragment>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de favicon</Text>
                </View>
                <View style={styles.tbody}>
                    {advance.favicon.length != 0 ?
                        <Text>Ce site Web semble avoir une favicon.</Text> :
                        <Text>Ce site Web ne semble pas avoir de favicon.</Text>
                    }
                </View>
                <View style={styles.tbody}>
                    {advance.favicon.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de balise canonique</Text>
                </View>
                <View style={styles.tbody}>
                    <Text>{advance.canonical_url}</Text>
                    {advance.canonical_url == "NO" ?
                        <Text>Ce site Web ne semble pas avoir de balise de lien canonique.</Text> : <Text>Ce site Web semble avoir une balise de lien canonique.</Text>}
                </View>
                <View style={styles.tbody}>
                    {advance.canonical_url == "NO" ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test Google Analytics</Text>
                </View>
                <View style={styles.tbody}>
                    <Text>{advance.google_analytics_test}</Text>
                    {
                        advance.google_analytics_test != "Not connected to Google Analytics" ?
                            <Text>Un script Google Analytics est détecté sur cette page.</Text> :
                            <Text>Un script Google Analytics n&apos;est pas détecté sur cette page.</Text>}

                </View>
                <View style={styles.tbody}>
                    {advance.google_analytics_test != "Not connected to Google Analytics" ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
        </Fragment>
    );

    const TableHead4 = () => (
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
            <View style={[styles.theader, styles.theader2]}>
                <Text>Tests de réference</Text>
            </View>
            <View style={styles.theader}>
                <Text>Résultats</Text>
            </View>
            <View style={styles.theader}>
                <Text>Impact</Text>
            </View>
        </View>
    );
    const TableBody4 = () => (
        <Fragment>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test du plan du site</Text>
                </View>
                <View style={styles.tbody}>
                    {reference.sitemaps.length != 0 ? <Text>Cette page Web contient {reference.sitemaps.length} fichier(s) de plan de site.</Text> : <Text>Cette page Web ne contient aucun fichier de plan de site!</Text>}
                </View>
                <View style={styles.tbody}>
                    {reference.sitemaps.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test Robots.txt</Text>
                </View>
                <View style={styles.tbody}>
                    {
                        reference.robot_txt.length != 0 ?
                            <Text>Ce site Web utilise un fichier robots.txt.</Text> :
                            <Text>Ce site Web n&apos;utilise pas de fichier robots.txt.</Text>}
                </View>
                <View style={styles.tbody}>
                    {reference.robot_txt.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test de page d&apos;erreur 404</Text>
                </View>
                <View style={styles.tbody}>
                    {
                        reference.page_error != "No Error" ?
                            <Text>Aucune erreur détectée sur cette page.</Text>
                            :
                            <Text>Ce site Web utilise une page d&apos;erreur 404.</Text>
                    }
                </View>
                <View style={styles.tbody}>
                    {reference.page_error.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Certificat SSL et test HTTPS</Text>
                </View>
                <View style={styles.tbody}>
                    {reference.ssl_certificate == "VALID SSL certificate!" ?
                        <Text>Ce site Web utilise avec succès HTTPS, un protocole de communication sécurisé sur Internet.</Text>
                        :
                        <Text>Ce site Web n&apos;utilise pas HTTPS, un protocole de communication sécurisé sur Internet..</Text>}
                </View>
                <View style={styles.tbody}>
                    {reference.ssl_certificate == "VALID SSL certificate!" ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test d&apos;image responsive</Text>
                </View>
                <View style={styles.tbody}>
                    {reference.responsive_images.length != 0 ? <Text>Cette page Web contient {reference.responsive_images.length} image(s) réactive(s).</Text> : <Text>Cette page Web ne contient aucune image réactive!</Text>}
                </View>
                <View style={styles.tbody}>
                    {reference.responsive_images.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test d&apos;image non responsive</Text>
                </View>
                <View style={styles.tbody}>
                    {reference.non_esponsive_images.length != 0 ? <Text>Cette page Web contient {reference.non_esponsive_images.length} image(s) non réactive(s).</Text> : <Text>Cette page Web ne contient aucune image non réactive!</Text>}
                </View>
                <View style={styles.tbody}>
                    {reference.non_esponsive_images.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
                <View style={[styles.tbody, styles.tbody2]}>
                    <Text>Test d&apos;attribut {"alt"} d&apos;image</Text>
                </View>
                <View style={styles.tbody}>
                    {reference.image_alt_text_absent.length != 0 ? <Text>Cette page Web contient {reference.image_alt_text_absent.length} image(s) avec l&apos;attribut {"alt"} requis.</Text> : <Text>Cette page Web ne contient aucune image avec l&apos;attribut {"alt"} requis!</Text>}
                </View>
                <View style={styles.tbody}>
                    {reference.image_alt_text_absent.length != 0 ? <Image style={{ width: 20, height: 20 }} src="/check-circle.png" /> : <Image style={{ width: 20, height: 20 }} src="/close-circle.png" />}
                </View>
            </View>
        </Fragment>
    );

    const TableDate = () => (
        <View style={{ width: '100%', flexDirection: 'row' }}>
            <View style={[styles.tbody, styles.tbody2]}>
                <Text> </Text>
            </View>
            <View style={styles.tbody}>
                <Text style={styles.invoiceNumber}>Date</Text>
            </View>
            <View style={styles.tbody}>
                <Text style={styles.invoiceNumber2}>
                    {currentDate}
                </Text>
            </View>
        </View>
    );





    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <InvoiceTitle />
                <Address />
                <TableHead />
                <TableBody />
                <TableHead2 />
                <TableBody2 />
                <TableHead3 />
                <TableBody3 />
                <TableHead4 />
                <TableBody4 />
                <TableDate />
            </Page>
        </Document>
    )
}

export default function Invoice(props: any) {
    const { url, metadata, reference, performance, advance, score } = props;
    return (
        <PDFViewer width="1000" height="650">
            <MyDocument
                url={url}
                metadata={metadata}
                reference={reference}
                performance={performance}
                advance={advance}
                score={score}
            />
        </PDFViewer>
    )
}
