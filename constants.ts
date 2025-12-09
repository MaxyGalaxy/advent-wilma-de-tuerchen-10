import { Market, WilmaColor } from './types';

// Use a string path relative to the root.
// The build process (vite.config.ts) ensures this file is copied to the output directory.
const PLACEHOLDER_IMAGE = 'placeholder.jpg';

export const WILMA_COLORS = {
  yellow: WilmaColor.Yellow,
  darkNavy: WilmaColor.DarkNavy,
  lightBlue: WilmaColor.LightBlue,
  mediumBlue: WilmaColor.MediumBlue,
  grey: WilmaColor.Grey,
  pink: WilmaColor.Pink,
};

export const MARKETS: Market[] = [
  // Nordrhein-Westfalen
  {
    id: 'essen',
    city: 'Essen',
    name: 'Internationaler Weihnachtsmarkt',
    region: 'Nordrhein-Westfalen',
    description: 'Sowohl kulinarische als auch künstlerische Vielfalt ist in Essen im Stadtzentrum geboten, da an über 170 Hütten Artikel aus vielen Ländern der ganzen Welt und dem gesamten Bundesgebiet angeboten werden. Von Leckereien aus Griechenland und Frankreich über Kunsthandwerk aus Tibet bis holländische Poffertjes ist alles dabei! Ein Highlight ist außerdem der Mittelaltermarkt am Flachsmarkt.',
    dates: '14.11. – 23.12.2025',
    lat: 51.4556,
    lng: 7.0116,
    link: "https://www.visitessen.de/essener_weihnachtsmarkt",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'muenster',
    city: 'Münster',
    name: 'Weihnachtsmarkt in Münster',
    region: 'Nordrhein-Westfalen',
    description: 'Münster hat sechs verschiedene Weihnachtsmärkte, die sich prima durch einen weihnachtlichen Spaziergang miteinander verbinden lassen, da sie so nah beieinanderliegen. Berühmt ist der romantische Lichterhimmel auf dem Platz des Westfälischen Friedens.',
    dates: '24.11. – 23.12.2025',
    lat: 51.9607,
    lng: 7.6261,
    link: "https://www.weihnachtsmarkt-muenster.com",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'dortmund',
    city: 'Dortmund',
    name: 'Dortmunder Weihnachtsstadt',
    region: 'Nordrhein-Westfalen',
    description: 'Seit 1996 hält die Weihnachtsstadt am Hansaplatz in Dortmund den Rekord für den höchsten Weihnachtsbaum mit einer Höhe von 45 Metern, der mit rund 48.000 kleinen Lichtern dekoriert wird. Der einmonatige Aufbau lohnt sich!',
    dates: '20.11. – 30.12.2025',
    lat: 51.5136,
    lng: 7.4653,
    link: "https://www.weihnachtsstadt-do.de",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'koeln',
    city: 'Köln',
    name: 'Weihnachtsmarkt am Kölner Dom',
    region: 'Nordrhein-Westfalen',
    description: 'Das Besondere dieses Weihnachtsmarktes ist die Lage auf der Kölner Domplatte. Die Pavillons sind rund um den Dom aufgebaut und bieten Leckereien, Geschenke-Läden und Kunst.',
    dates: '17.11. – 23.12.2025',
    lat: 50.9413,
    lng: 6.9583,
    link: "https://www.koelnerweihnachtsmarkt.com/de",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'duesseldorf',
    city: 'Düsseldorf',
    name: 'Weihnachtsmarkt in Düsseldorf',
    region: 'Nordrhein-Westfalen',
    description: 'Am Düsseldorfer Rathaus und zu Füßen des Jan-Wellem-Standbilds, nur wenige Schritte vom Rheinufer entfernt, erstrahlt Düsseldorfs beliebtester Weihnachtsmarkt. Das Besondere ist ein fast 100 Jahre altes Karussell, was in Kombination mit den roten Holzbüdchen eine weihnachtliche Stimmung verbreitet.',
    dates: '20.11. – 30.12.2025',
    lat: 51.2277,
    lng: 6.7735,
    link: "https://www.visitduesseldorf.de/erleben/veranstaltungen/weihnachten-in-duesseldorf",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'satzvey',
    city: 'Mechernich-Satzvey',
    name: 'Advent auf Burg Satzvey',
    region: 'Nordrhein-Westfalen',
    description: 'Der historische Weihnachtsmarkt auf der Wasserburg am Rand der Eifel kann nicht nur mit handgearbeiteten Geschenken und Räucherwerk aufwarten. Seit 15 Jahren präsentiert Burg Satzvey im Park auch ein Krippenspiel nach Vorlagen aus der Staufferzeit, gesprochen in Latein und Mittelhochdeutsch und vom "Proclamator" dem Publikum verständlich übersetzt. Der Weihnachtsmann nimmt gemeinsam mit seinen Elfen die Wunschzettel der Kinder entgegen.',
    dates: '29. Nov – 21. Dez 2025 (Sa & So)',
    lat: 50.6225,
    lng: 6.7077,
    link: "https://www.burgsatzvey.de/veranstaltungen/burgweihnacht-2025-1",
    imageUrl: PLACEHOLDER_IMAGE
  },

  // Baden-Württemberg
  {
    id: 'esslingen',
    city: 'Esslingen',
    name: 'Esslinger Mittelaltermarkt',
    region: 'Baden-Württemberg',
    description: 'Auf dem Esslinger Mittelalter- und Weihnachtsmarkt erwacht jedes Jahr das sogenannte „dunkle Zeitalter". Die Händler bieten in historischen Gewändern ihre mittelalterliche Handwerkskunst an und laden beispielsweise zu einem heißen Bad in einem großen Waschzuber ein.',
    dates: '25.11. – 22.12.2025',
    lat: 48.7428,
    lng: 9.3072,
    link: "https://www.esslingen-info.com/veranstaltungen/mittelaltermarkt-weihnachtsmarkt",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'stuttgart',
    city: 'Stuttgart',
    name: 'Weihnachtsmarkt in Stuttgart',
    region: 'Baden-Württemberg',
    description: 'Das Besondere an diesem Christkindlmarkt in Stuttgart ist die traumhafte Kulisse, da der Markt in das Alte Schloss, die Stiftskirche, und in der barocken Schlossanlage des neuen Schlosses eingebettet ist. Zusätzlich schaffen Konzerte im Innenhof des Alten Schlosses eine besinnliche Atmosphäre.',
    dates: '26.11. – 23.12.2025',
    lat: 48.7758,
    lng: 9.1829,
    link: "https://www.stuttgarter-weihnachtsmarkt.de/en/home/",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'schwetzingen',
    city: 'Schwetzingen',
    name: 'Weihnachtsmarkt Schwetzingen',
    region: 'Baden-Württemberg',
    description: 'Das Schloss Schwetzingen und der Schlossgarten bilden den prächtigen Rahmen für den Kurfürstlichen Weihnachtsmarkt im Städtchen Schwetzingen nahe Heidelberg. Handwerk aus der Region gehört ebenso zur Angebotspalette in den weißen Zelten wie vielfältige kulinarische Spezialitäten, auch aus den Partnerstädten.',
    dates: '27. Nov – 21. Dez 2025 (Do–So)',
    lat: 49.3857,
    lng: 8.5707,
    link: "https://www.visit-schwetzingen.de/genuss-tradition/weihnachtsmarkt-1",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'gengenbach',
    city: 'Gengenbach',
    name: 'Gengenbacher Adventskalender',
    region: 'Baden-Württemberg',
    description: 'Das Rathaus von Gengenbach verwandelt sich mit seinen 24 Fenstern in ein großes Adventskalenderhaus. Bereits seit über zwanzig Jahren werden an den beleuchteten Fenstern Werke bekannter Künstler wie Marc Chagall oder Andy Warhol präsentiert, diesmal sind es paradiesische Bilder von Olaf Hajek, einem der renommiertesten deutschen Illustratoren der Gegenwart. Jeden Abend um 18 Uhr öffnet sich ein weiteres Fenster, bis das Rathaus einer "Schatzkiste der Fantasie" gleicht.',
    dates: '28.11. – 23.12.2025',
    lat: 48.4042,
    lng: 8.0150,
    link: "https://www.gengenbach.info/veranstaltungen/gengenbacher-adventskalender-621959dfd5",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'ravennaschlucht',
    city: 'Breitnau',
    name: 'Weihnachtsmarkt Ravennaschlucht',
    region: 'Baden-Württemberg',
    description: 'Schöner könnte die Kulisse wohl kaum sein: Dieser Adventsmarkt wird eingerahmt vom Eisenbahn-Viadukt der Höllentalbahn, das 40 Meter über der Talenge thront, und der sattgrünen Landschaft des Schwarzwaldes. Die Ravennaschlucht liegt bei Breitnau und bietet insbesondere bei Schnee ein zauberhaftes Ambiente. Verkauft werden Holzspielzeuge, handgemachte Seifen, Schmuck aus Silberbesteck und Keramik. Auf die kleinsten Besucher warten das Weihnachtspostamt und der illuminierte Krippenpfad.',
    dates: '28. Nov – 21. Dez 2025 (Fr–So)',
    lat: 47.9250,
    lng: 8.0480,
    link: "https://www.hochschwarzwald.de/en/christmas-market-in-the-ravenna-gorge",
    imageUrl: PLACEHOLDER_IMAGE
  },

  // Bayern
  {
    id: 'nuernberg',
    city: 'Nürnberg',
    name: 'Christkindlesmarkt',
    region: 'Bayern',
    description: 'Der wohl bekannteste und zugleich größte Weihnachtsmarkt Deutschlands befindet sich in der Nürnberger Altstadt und wird traditionell mit dem Prolog des Christkinds eröffnet. Dieses wird jedes Jahr von den Bürgern Nürnbergs gewählt. Ein Muss bei einem Besuch auf dem Nürnberger Christkindlesmarkt ist der Kauf eines berühmten „Zwetschgenmännle". Eine kleine dekorative Figur aus getrockneten Pflaumen.',
    dates: '28.11. – 30.12.2025',
    lat: 49.4520,
    lng: 11.0767,
    link: "https://www.christkindlesmarkt.de",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'fraueninsel',
    city: 'Fraueninsel',
    name: 'Christkindlmarkt',
    region: 'Bayern',
    description: 'Dieser Weihnachtsmarkt liegt auf einer kleinen Insel im Chiemsee. Er ist somit der einzige Christkindlmarkt, der nur per Schiff zu erreichen ist und vor allem für Touristen ein beliebtes Ausflugsziel in der Adventszeit.',
    dates: '27.11–30.11 & 04.12–07.12.2025',
    lat: 47.8718,
    lng: 12.4253,
    link: "https://www.chiemsee-alpenland.de/entdecken/veranstaltungen-brauchtum/veranstaltungs-highlights/christkindlmarkt-fraueninsel",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'rothenburg',
    city: 'Rothenburg ob der Tauber',
    name: 'Rothenburger Reiterlesmarkt',
    region: 'Bayern',
    description: 'Der Reiterlesmarkt in Rothenburg ob der Tauber gehört mit zu den ältesten Weihnachtsmärkten des Landes. Besondere Angebote sind altdeutsches Weihnachtsgebäck und weißer Glühwein. Eröffnet wird der Markt vom Reiterle persönlich, wenn es auf dem Pferd am Marktplatz eintrifft und die Besucher*innen begrüßt.',
    dates: '21.11. – 23.12.2025',
    lat: 49.3768,
    lng: 10.1772,
    link: "https://www.rothenburg-tourismus.de/veranstaltungen/reiterlesmarkt",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'muenchen_main',
    city: 'München',
    name: 'Christkindlmarkt',
    region: 'Bayern',
    description: 'Münchens wohl schönster Weihnachtsmarkt erstreckt sich vom Marienplatz bis zur Neuhauser Straße quer durch die Innenstadt, wobei tägliche Livemusik vom Rathausbalkon ein weihnachtliches Ambiente bietet. Das traditionelle „Krampus-Laufen", bei dem Personen in schaurigen Krampuskostümen durch die Straßen laufen und mit Glocken Lärm machen, darf nicht verpasst werden!',
    dates: '24.11. – 24.12.2025',
    lat: 48.1372,
    lng: 11.5761,
    link: "https://www.muenchen.de/veranstaltungen/event/1140.html",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'muenchen_schwabing',
    city: 'München',
    name: 'Schwabinger Weihnachtsmarkt',
    region: 'Bayern',
    description: 'Wer es familiär und kreativ mag, sollte den Künstlermarkt an der Münchner Freiheit in München besuchen. Hier erwartet dich skurriles Kunsthandwerk aus Fotografie, Skulpturen oder auch Keramik.',
    dates: '28.11. – 24.12.2025',
    lat: 48.1616,
    lng: 11.5866,
    link: "https://www.schwabingerweihnachtsmarkt.de",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'tegernsee',
    city: 'Tegernsee',
    name: 'Tegernseer Adventszauber',
    region: 'Bayern',
    description: 'Vor reizvoller Bergkulisse leuchtet der Tegernseer Adventszauber: Die Märkte in Bad Wiessee, Rottach-Egern und am Schloss in Tegernsee liegen direkt am Seeufer und sind durch Pendelschiffe und Busse miteinander verbunden. Das Rahmenprogramm reicht von den kunstvollen Skulpturen eines Eisschnitzers bis hin zu Alphornbläsern und Perchten mit ihren zottigen Kostümen.',
    dates: '29. Nov – 21. Dez 2025 (Sa & So)',
    lat: 47.7087,
    lng: 11.7563,
    link: "https://www.tegernsee.com/adventszauber",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'wuerzburg',
    city: 'Würzburg',
    name: 'Weihnachtsmarkt Würzburg',
    region: 'Bayern',
    description: 'Insgesamt 125 Stände bieten vorweihnachtlichen Glanz. Der Würzburger Weihnachtsmarkt bleibt seiner langen Tradition verpflichtet. Er bietet neben Glühwein und Heißgetränken weihnachtliche Artikel und zahlreiche kulinarische Angebote und darüber hinaus das umfangreiche und abwechslungsreiche Angebot einer echten Verkaufsmesse.',
    dates: '28.11. – 23.12.2025',
    lat: 49.7939,
    lng: 9.9512,
    link: "https://www.wuerzburg.de/leben-in-wuerzburg/veranstaltungen/100115.Weihnachtsmarkt.html",
    imageUrl: PLACEHOLDER_IMAGE
  },

  // Rhein-Main
  {
    id: 'frankfurt',
    city: 'Frankfurt am Main',
    name: 'Weihnachtsmarkt',
    region: 'Rhein-Main',
    description: 'Zwischen Römerberg und der geschichtsträchtigen Paulskirche findet in Frankfurt einer der schönsten und meistbesuchten Weihnachtsmärkte in Deutschlands statt. Bekannt ist der Weihnachtsmarkt unter anderem für die besonders schön verarbeiteten Keramikwaren wie die typisch frankfurterischen Bembel.',
    dates: '24.11. – 22.12.2025',
    lat: 50.1109,
    lng: 8.6821,
    link: "https://www.frankfurt-tourismus.de/en/Discover-Experience/Events/Frankfurt-Christmas-Market",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'kronberg',
    city: 'Kronberg',
    name: 'Weihnachtsmarkt Kronberg',
    region: 'Rhein-Main',
    description: 'Für den Weihnachtsmarkt in Kronberg am Taunus wird von der Altstadt bis zur Burg alles in eine festliche Weihnachtsmarktmeile verwandelt. Ein Kunsthandwerkermarkt vor der märchenhaften Kulisse der Burg bietet Inspiration für das ein oder andere Weihnachtsgeschenk. Doch auch an den festlich dekorierten Weihnachtsmarktständen in der Altstadt können allerlei adventliche Waren erworben werden. Gastronomiestände sorgen mit Glögg und einem umfangreichen Angebot an süßen und herzhaften Leckereien für das leibliche Wohl. Der Weihnachtsmarkt der Stadt Kronberg im Taunus ist mit seinem besonderen Ambiente einen Besuch wert.',
    dates: '06.12. – 07.12.2025',
    lat: 50.1793,
    lng: 8.5085,
    link: "https://www.weihnachtsmarkt-deutschland.de/kronberg-weihnachtsmarkt.html",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'seligenstadt',
    city: 'Seligenstadt',
    name: 'Adventsmarkt Seligenstadt',
    region: 'Rhein-Main',
    description: 'Zum Rahmenprogramm des Seligenstädter Adventsmarktes gehören Kutschfahrten, Adventskonzerte im Rathaus-Innenhof und in der Einhard Basilika, der Hobby-Künstler-Markt Advent im Kloster, die Waldweihnacht, verschiedene Themenstadtführungen, sowie vielfältige kulturelle Angebote. Das Angebot der Weihnachtsmarktstände in der Einhardstadt Seligenstadt ist wie immer vielfältig. Weihnachtsschmuck, Figuren – aber auch Nützliches und Praktisches kann erworben werden.',
    dates: '27.11. – 14.12.2025',
    lat: 50.0433,
    lng: 8.9757,
    link: "https://www.seligenstadt.de/de/erleben/veranstaltungen/29-seligenstaedter-adventsmarkt",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'darmstadt',
    city: 'Darmstadt',
    name: 'Weihnachtsmarkt Darmstadt',
    region: 'Rhein-Main',
    description: 'Kulinarische und handwerkliche Spezialitäten laden zu vorweihnachtlichem Treiben auf den Darmstädter Weihnachtsmarkt ein. Die adventlich geschmückte Innenstadt und die Weihnachtsbäume auf dem Marktplatz, dem Luisenplatz und dem Ludwigsplatz sorgen für Weihnachtsstimmung. Der Lange Ludwig funkelt mit 30.000 LEDs, der Weihnachtsbaum auf dem Marktplatz zeigt ab 18 Uhr stündlich eine Lichtanimation und auf dem Friedensplatz dreht sich ein historisches Pferdekarussell.',
    dates: '17.11. – 23.12.2025',
    lat: 49.8728,
    lng: 8.6512,
    link: "https://www.darmstadt-tourismus.de/en/events/christmas-market",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'wiesbaden',
    city: 'Wiesbaden',
    name: 'Sternschnuppenmarkt',
    region: 'Rhein-Main',
    description: 'Wenn der Duft von gebrannten Mandeln in der Luft liegt, Lichter die Innenstadt verzaubern und festliche Klänge durch die Gassen ziehen, ist wieder Sternschnuppen Markt in Wiesbaden. Zauberhaftes Licht von rund 20 leuchtenden Lilien, vier illuminierten Toren, Schneeflocken, Sternen und Lichterketten lässt die Innenstadt in festlichem Glanz erstrahlen – nachhaltig mit umweltfreundlicher LED-Technik.',
    dates: '25.11. – 23.12.2025',
    lat: 50.0820,
    lng: 8.2414,
    link: "https://www.wiesbaden.de/leben-in-wiesbaden/freizeit/maerkte/sterntauchen.php",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'mainz',
    city: 'Mainz',
    name: 'Weihnachtsstadt Mainz',
    region: 'Rhein-Main',
    description: 'Die Weihnachtsstadt lädt zum Bummeln, Genießen und Staunen ein. Überall erwarten Euch stimmungsvolle Lichter, regionale Spezialitäten, Glühwein und ein einzigartiges Ambiente – ein Erlebnis für Groß und Klein. Vom Historischen Weihnachtsmarkt auf den Domplätzen, den kleineren „Mainzer WinterZeit"-Märkten oder dem Neuwintermarkt auf dem Neubrunnenplatz – hier ist für alle etwas dabei!',
    dates: '27.11. – 23.12.2025',
    lat: 49.9994,
    lng: 8.2739,
    link: "https://www.mainz.de/freizeit-und-sport/maerkte/weihnachtsmarkt.php",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'bad_vilbel',
    city: 'Bad Vilbel',
    name: 'Wasserburg Weihnachtsmarkt',
    region: 'Rhein-Main',
    description: 'Zauberhafter Bummel durch alte Gemäuer in der Stadt der Quellen… Abwechslungsreiches Kunsthandwerk erfreut das Auge, überall duftet es nach Glühwein, herzhafter Bratwurst und Lebkuchen und von der Bühne erklingt Weihnachtsmusik zum Lauschen und Mitswingen. Für die Kleinen dreht sich ein Karussell, der Märchenonkel erzählt allerlei zum Schmunzeln und Träumen und auch der Nikolaus ist unterwegs.',
    dates: '13.12. – 14.12.2025',
    lat: 50.1852,
    lng: 8.7366,
    link: "https://www.bad-vilbel.de/tourismus-freizeit/veranstaltungen/weihnachtsmarkt",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'oberursel',
    city: 'Oberursel',
    name: 'Weihnachtsdorf',
    region: 'Rhein-Main',
    description: 'Das Oberurseler Weihnachtsdorf präsentiert sich mit weihnachtlichen Buden, Schankhütten sowie dem gemütlichen Weihnachtsstadl. Die Hütten fügen sich zu einem kleinen Dorf zusammen, das zum Schlemmen und Verweilen einlädt. Auch Oberurseler Vereine und Institutionen beteiligen sich abwechselnd mit einem Stand.',
    dates: '04.12. – 27.12.2025',
    lat: 50.2036,
    lng: 8.5770,
    link: "https://www.oberursel.de/kultur-und-freizeit/feste-und-maerkte/weihnachtsmarkt/",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'hanau',
    city: 'Hanau',
    name: 'Weihnachtszauber Hanau',
    region: 'Rhein-Main',
    description: 'Der märchenhafte Weihnachtsmarkt in Hanau, der größte und schönste der Region, lädt auch in diesem Jahr zu einem festlichen Erlebnis ein. Zu Füßen des Nationaldenkmals der berühmten Märchensammler laden mehr als 75 Verkaufs- und Gastronomiestände zum Schlendern, Schlemmen und Genießen ein. Das kleine nostalgische Riesenrad und das historische Karussell bringen Kinderaugen zum Leuchten und auf der großen Weihnachtsbühne sorgen täglich Künstler, Musiker und Chöre für Unterhaltung und Festtagslaune.',
    dates: '24.11. – 22.12.2025',
    lat: 50.1328,
    lng: 8.9169,
    link: "https://www.hanau.de/tourismus/veranstaltungen/hanauer-weihnachtsmarkt",
    imageUrl: PLACEHOLDER_IMAGE
  },
  {
    id: 'dreieich',
    city: 'Dreieich',
    name: 'Hayner Weihnachtsmarkt',
    region: 'Rhein-Main',
    description: 'Stände in bezaubernder Fachwerkkulisse und auf dem historischen Areal der Burg Hayn überraschen mit kreativem, hochwertigem Angebot, umweht von Posaunenklängen & Weihnachtsliedern. Auch an kulinarischen Köstlichkeiten & Getränken fehlt es nicht. Freuen Sie sich auf Programm, Kunsthandwerker, Nikolaus, Engel & Turmbläser.',
    dates: '06.12–08.12 & 13.12–15.12.2025',
    lat: 50.0076,
    lng: 8.7042,
    link: "https://www.burg-hayn.de/veranstaltungen/weihnachtsmarkt",
    imageUrl: PLACEHOLDER_IMAGE
  }
];