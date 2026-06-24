export type Lang = "no" | "en";

const translations = {
  no: {
    nav: {
      hjem: "Hjem",
      cv: "CV",
      master: "Master",
      galleri: "Galleri",
      blogg: "Tanker",
      prosjekter: "Prosjekter",
      kontakt: "Kontakt",
      toggleLabel: "EN",
      toggleAriaLabel: "Bytt til engelsk",
    },
    footer: {
      role: "Siviløkonom · MSc in Finance, BI",
    },
    home: {
      heroSubtitle: "Siviløkonom · MSc in Finance, BI Norwegian Business School",
      heroGreeting: "Hei,",
      heroName: "Mitt navn er Jens Anders Andresen.",
      heroParagraph:
        "Siviløkonom fra BI med fordypning i finans.",
      heroParagraphTwo:
        "For tiden er jeg opptatt av å lære meg mer om AI og maskinlæring, og hvordan det kan brukes i for eksempel finans og analyse.",
      heroParagraphThree:
        "Denne siden er blant annet et resultat av denne nyskjerrigheten.",
      exploreHeading: "Utforsk siden",
      sections: {
        cv: {
          title: "CV",
          description: "Utdanning, erfaring og kompetanse.",
        },
        master: {
          title: "Master",
          description: "Min mastergrad — MSc in Finance fra BI.",
        },
        galleri: {
          title: "Galleri",
          description: "Mitt bildegalleri.",
        },
        blogg: {
          title: "Tanker",
          description: "Refleksjoner og tanker"
        },
        prosjekter: {
          title: "Prosjekter",
          description: "Ting jeg bygger og utforsker på fritiden.",
        },
        kontakt: {
          title: "Kontakt",
          description: "Ta gjerne kontakt.",
        },
      },
    },
    cv: {
      title: "CV",
      intro: "",
      educationHeading: "Utdanning",
      education: [
        {
          degree: "MSc in Business, Major in Finance",
          school: "Handelshøyskolen BI",
          period: "Aug 2022 – Jul 2024",
          description:
            "Siviløkonom med fordypning i finans. Studiet dekket porteføljeteori, verdsettelse, risikostyring og kvantitativ analyse.",
        },
        {
          degree: "Bachelor i Økonomi og Ledelse",
          school: "Handelshøyskolen BI",
          period: "Aug 2017 – Jul 2020",
          description:
            "Siviløkonomutdanning med bred faglig base innen finans, regnskap, makroøkonomi, strategi og forretningsjus.",
        },
        {
          degree: "Studiespesialiserende",
          school: "Nesodden videregående skole",
          period: "Aug 2014 – Jun 2017",
          description:
            "Studiespesialisering med fordypning i engelsk og samfunnsøkonomi, samt matematikk S og teknologi og forskningslære.",
        },
      ],
      subjectsHeading: "Fag fra studiet",
      subjectsBachelorLabel: "Bachelor i Økonomi og Ledelse · 2017–2020",
      subjectsMasterLabel: "MSc i Finance · 2022–2024",
      subjectsBachelor: [
        {
          code: "MRK 3414",
          title: "Markedsføringsledelse",
          description:
            "Introduksjon til prinsipper for markedsføring, inkludert strategisk planlegging, produktutvikling og markedsanalyser.",
          href: "https://programmeinfo.bi.no/nb/kurs/MRK-3414/2020-host",
        },
        {
          code: "BØK 1113",
          title: "Økonomistyring",
          description:
            "Grunnleggende om økonomistyring i bedrifter, inkludert budsjettarbeid og kostnadskontroll.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-1113/2019-host",
        },
        {
          code: "HIS 3410",
          title: "Bedriften",
          description:
            "Historisk og samfunnsmessig utvikling av bedrifter, og deres rolle i økonomien.",
          href: "https://programmeinfo.bi.no/nb/kurs/HIS-3410/2017-host",
        },
        {
          code: "SØK 1101",
          title: "Mikroøkonomi I",
          description:
            "Grunnleggende økonomiske prinsipper på individ- og bedriftsnivå, som tilbud og etterspørsel.",
          href: "https://programmeinfo.bi.no/nb/kurs/S%C3%98K-1101/2019-var",
        },
        {
          code: "ORG 3402",
          title: "Psykologi, organisasjon og ledelse",
          description:
            "Forståelse av menneskelig atferd i organisasjoner og hvordan ledelse påvirker dette.",
          href: "https://programmeinfo.bi.no/nb/kurs/ORG-3402/2019-var",
        },
        {
          code: "BØK 1121",
          title: "Finans I",
          description:
            "Grunnleggende prinsipper innen finans, som kapitalforvaltning, investering og finansielle markeder.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-1121/2024-var",
        },
        {
          code: "JUR 3420",
          title: "Forretningsjus",
          description:
            "Introduksjon til lover og regler som regulerer virksomheter og kommersielle aktiviteter.",
          href: "https://programmeinfo.bi.no/nb/kurs/JUR-3420/2021-host",
        },
        {
          code: "ORG 1211",
          title: "Organisasjonsteori og HRM",
          description:
            "Utforsker teorier om hvordan organisasjoner fungerer og hvordan mennesker forvaltes i bedrifter.",
          href: "https://programmeinfo.bi.no/nb/kurs/ORG-1211/2017-host",
        },
        {
          code: "JUR 3624",
          title: "Regnskapsførerskikk og etikk",
          description:
            "Fokus på etiske retningslinjer og profesjonell praksis innen regnskapsførsel.",
          href: "https://programmeinfo.bi.no/nb/kurs/JUR-3624/2021-var",
        },
        {
          code: "ELE 3733",
          title: "Oppstart av bedrift",
          description:
            "Praktisk innføring i å starte egen virksomhet, inkludert forretningsplanlegging og entreprenørskap.",
          href: "https://programmeinfo.bi.no/nb/kurs/ELE-3733/2019-var",
        },
        {
          code: "SØK 1201",
          title: "Makroøkonomi I",
          description:
            "Grunnleggende forståelse av nasjonal og global økonomi, inkludert BNP, inflasjon og arbeidsledighet.",
          href: "https://programmeinfo.bi.no/nb/kurs/S%C3%98K-1201/2023-host",
        },
        {
          code: "MAD 1214",
          title: "Logistikk",
          description:
            "Introduksjon til logistikk og forsyningskjedeledelse, med fokus på effektivitet og kostnadskontroll.",
          href: "https://programmeinfo.bi.no/nb/kurs/MAD-1214/2017-host",
        },
        {
          code: "STR 1301",
          title: "Strategi I",
          description:
            "Utvikling og implementering av forretningsstrategier for å oppnå konkurransefortrinn.",
          href: "https://programmeinfo.bi.no/nb/kurs/STR-1301/2023-host",
        },
        {
          code: "BØK 1322",
          title: "Finans II",
          description:
            "Videreføring av Finans I, med mer avanserte emner som risikostyring og kapitalstruktur.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-1322/2018-var",
        },
        {
          code: "BØK 3541",
          title: "Økonomi- og virksomhetsstyring",
          description:
            "Forståelse av økonomiske styringsverktøy som brukes til å lede og måle bedriftens prestasjoner.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-3541/2018-var",
        },
        {
          code: "BØK 3532",
          title: "Finansregnskap og regnskapsanalyse",
          description:
            "Grunnleggende regnskapsføring og analyse av finansielle rapporter.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-3532/2018-var",
        },
        {
          code: "STR 1320",
          title: "Strategi II",
          description:
            "Avanserte strategiske verktøy og teknikker for å lede organisasjoner i dynamiske markeder.",
          href: "https://programmeinfo.bi.no/nb/kurs/STR-1320/2024-var",
        },
        {
          code: "ELE 3743",
          title: "Personlig økonomi",
          description:
            "Lærer deg hvordan du kan håndtere din egen økonomi, inkludert investering, sparing og gjeld.",
          href: "https://programmeinfo.bi.no/nb/kurs/ELE-3743/2021-host",
        },
        {
          code: "SØK 1366",
          title: "Makroøkonomi II",
          description:
            "Mer avanserte emner innen makroøkonomi, inkludert internasjonal handel og finanspolitikk.",
          href: "https://programmeinfo.bi.no/nb/kurs/S%C3%98K-1366/2021-var",
        },
        {
          code: "ELE 3735",
          title: "Finansregnskap",
          description:
            "Fordypning i regnskapsføring, med fokus på hvordan selskaper registrerer og rapporterer finansielle transaksjoner.",
          href: "https://programmeinfo.bi.no/nb/kurs/ELE-3735/2023-var",
        },
        {
          code: "SØK 1344",
          title: "Mikroøkonomi II",
          description:
            "Fortsettelse av Mikroøkonomi I, med dypere analyse av markeder, spillteori og beslutningsteori.",
          href: "https://programmeinfo.bi.no/nb/kurs/S%C3%98K-1344/2019-host",
        },
        {
          code: "MET 1190",
          title: "Statistikk",
          description:
            "Introduksjon til statistiske metoder og verktøy som brukes for økonomisk analyse.",
          href: "https://programmeinfo.bi.no/nb/kurs/MET-1190/2021-var",
        },
        {
          code: "MET 1333",
          title: "Økonometri",
          description:
            "Lærer deg hvordan du bruker statistiske metoder for å analysere økonomiske data og utvikle økonomiske modeller.",
          href: "https://programmeinfo.bi.no/nb/kurs/MET-1333/2018-host",
        },
        {
          code: "MET 1180",
          title: "Matematikk for siviløkonomer",
          description:
            "Grunnleggende matematikk som er nødvendig for å løse økonomiske og finansielle problemer.",
          href: "https://programmeinfo.bi.no/nb/kurs/MET-1180/2020-host",
        },
      ],
      subjectsMaster: [
        {
          code: "GRA 6035",
          title: "Mathematics",
          description:
            "Gir en grunnleggende forståelse av matematikk som brukes i økonomiske og finansielle modeller, som kalkulus og lineær algebra.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6035/",
        },
        {
          code: "GRA 6031",
          title: "Microeconomics",
          description:
            "Utforsker økonomiske beslutninger på individ- og bedriftnivå, med fokus på tilbud og etterspørsel, markedsstruktur og pristeori.",
          href: "https://programmeinfo.bi.no/en/course/GRA-6031/2015-autumn",
        },
        {
          code: "GRA 6534",
          title: "Investments",
          description:
            "Dette kurset dekker teorien og praksisen innen investeringer, inkludert porteføljeforvaltning og verdsettelse av ulike typer aktiva.",
          href: "https://programmeinfo.bi.no/en/course/GRA-6534/2018-spring",
        },
        {
          code: "GRA 6038",
          title: "Ethics and Sustainability in Organizations",
          description:
            "Diskuterer etiske problemstillinger og bærekraft innenfor forretningsdrift, med fokus på langsiktig verdiskaping og ansvarlig ledelse.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6038/2019-autumn",
        },
        {
          code: "GRA 6547",
          title: "Research Methodology in Finance",
          description:
            "Lærer deg forskningsmetoder som brukes i finansforskning, inkludert datainnsamling, statistisk analyse og empiriske studier.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6547/2024-spring",
        },
        {
          code: "GRA 6538",
          title: "Applied Valuation",
          description:
            "Dette kurset lærer deg hvordan du verdsetter selskaper og finansielle instrumenter, ved bruk av metoder som diskontert kontantstrøm (DCF) og komparative analyser.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6538/2021-spring",
        },
        {
          code: "GRA 6555",
          title: "Asset Management",
          description:
            "Fokuserer på forvaltning av investeringsporteføljer, inkludert risikostyring, investeringsstrategier og oppfølging av fond.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6555/2020-spring",
        },
        {
          code: "GRA 6513",
          title: "Financial Risk Management",
          description:
            "Dekker teorier og teknikker for å identifisere, måle og styre finansiell risiko, som markedsrisiko, kredittrisiko og likviditetsrisiko.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6513/2018-spring",
        },
        {
          code: "GRA 6560",
          title: "Strategic Asset Allocation",
          description:
            "Utforsker strategisk fordeling av aktiva over ulike investeringer, med mål om å maksimere avkastning tilpasset risiko over tid.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6560/2019-autumn",
        },
        {
          code: "GRA 6634",
          title: "Advanced Macroeconomics",
          description:
            "Gir en dypere innsikt i makroøkonomiske teorier og modeller, med vekt på hvordan nasjonale og internasjonale økonomier fungerer.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6634/2017-autumn",
        },
        {
          code: "GRA 6666",
          title: "International Macroeconomics and Finance",
          description:
            "Ser på internasjonale finansielle markeder og makroøkonomiske fenomener, som valutakurser, inflasjon og global økonomisk politikk.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6666/2022-autumn",
        },
        {
          code: "GRA 6039",
          title: "Econometrics with Programming",
          description:
            "Dette kurset integrerer økonometriske teknikker med programmering, og gir deg ferdighetene til å analysere økonomiske data ved hjelp av verktøy som Python eller R.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6039/2017-autumn",
        },
        {
          code: "GRA 6531",
          title: "Applied Portfolio Management",
          description:
            "Dette kurset gir praktisk erfaring i porteføljeforvaltning, inkludert strategier for aktiv og passiv forvaltning av investeringer.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6531/2021-spring",
        },
        {
          code: "GRA 1970",
          title: "Master Thesis",
          description:
            "Her skrev jeg og en annen om innvirkningen av ESG score på porteføljer skapt ved hjelp av Fama og French sine 3 og 5 faktorinnvesteringsmodeller.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-1970/2019-autumn",
        },
      ],
      experienceHeading: "Verv og erfaring",
      experience: [
        {
          role: "Styremedlem",
          company: "Nesodden Høyre",
          period: "Jan 2020 – Mai 2021",
          description:
            "Økonomiansvarlig i styret med ansvar for løpende bokføring, budsjettering og finansiell rapportering. Forbedret rutiner for budsjettoppfølging og sikret korrekt registrering av transaksjoner.",
        },
        {
          role: "CFO og medgründer",
          company: "Hakuna Potata SB",
          period: "Aug 2019 – Des 2019",
          description:
            "Medgründer og CFO i studentbedrift ved BI. Totalansvar for budsjett, regnskap, kalkyler og finansiell rapportering fra oppstart til avvikling – inkludert utvikling av økonomiske rutiner og strategier for bedriften.",
        },
      ],
      skillsHeading: "Kompetanse",
      skills: [
        "Arduino IDE",
        "Bloomberg",
        "Budsjettering og finansiell rapportering",
        "Eikon",
        "ESG-analyse",
        "Excel",
        "Faktorinvestering (Fama-French)",
        "Finansiell modellering",
        "Kvantitativ analyse",
        "Porteføljeteori",
        "PowerPoint",
        "Python",
        "R",
        "Regresjonsanalyse",
        "Risikostyring",
        "Samfunnsøkonomisk analyse",
        "Stata",
        "Verdsettelse",
        "Word",
      ],
      coursesHeading: "Kurs og sertifiseringer",
      courses: [
        {
          text: "Bloomberg Market Concepts (BMC)",
          description:
            "Bloombergs egen e-læringskurs i finansmarkeder, med fokus på makroøkonomi, valuta, renter og aksjemarkeder. Dekker også bl.a. hvordan sentralbanker, BNP, inflasjon og arbeidsmarked påvirker finansmarkedene.",
          tags: ["Makroøkonomi", "Finansmarkeder", "Renter"],
          href: "/documents/bmc-certificate.pdf",
        },
        {
          text: "AmplifyME Simulation - diplomnivå 4",
          description:
            "Simulert handelsgulv hvor jeg tok rollen som trader og megler under tidspress, med ordreutførelse, risikostyring og kundekommunikasjon i et simulert markedsmiljø. Fullført på høyeste diplomnivå (nivå 4).",
          tags: ["Trading", "Risikostyring", "Kapitalmarkeder"],
          href: "/documents/amplifyme-diploma.pdf",
        },
        {
          text: "Learnesy - Excel - Bas Norsk",
          description:
            "Learnesy-kurs i grunnleggende Excel-bruk på norsk, med vekt på formler, funksjoner og celleformatering for å sette opp enkle beregninger og oversikter - et fundament for videre arbeid med tall i Excel.",
          tags: ["Excel", "Formler og funksjoner", "Dataoversikt"],
          href: "/documents/learnesy-diploma.pdf",
        },
        {
          text: "Aksjeskolen - DN- Diplom",
          description:
            "Dagens Næringslivs aksjeskole - et kurs i aksjeinvestering som dekker grunnleggende verdsettelse, porteføljesammensetning, risiko og analyse av norske og internasjonale aksjer.",
          tags: ["Aksjer", "Investering", "Porteføljeteori"],
          href: "/documents/aksjeskolen-diplom.jpg",
        },
        {
          text: "Attest Studentbedrift",
          description:
            "Attestert deltakelse i Ungt Entreprenørskaps studentbedrift-program ved BI, hvor jeg var CFO for Hakuna Potata. Ansvar for budsjettering, regnskap og økonomistyring av en reell bedrift gjennom et helt semester.",
          tags: ["Entreprenørskap", "Regnskap", "Budsjettering"],
          href: "/documents/attest-sb.pdf",
        },
        {
          text: "Python Data Structures (Coursera, University of Michigan)",
          description:
            "Del av spesialiseringen Python for Everybody fra University of Michigan. Dekker Python-grunnlag som variabler, løkker og funksjoner, samt datastrukturer som lister, dictionaries, tupler og filbehandling.",
          tags: ["Python", "Programmering", "Datastrukturer"],
          href: "/documents/python-data-structures-certificate.pdf",
        },
      ],
      coursesDownloadLabel: "Se dokumentasjon",
      languagesHeading: "Språk",
      languages: [
        "Norsk – Morsmål",
        "Engelsk – flytende skriftlig og muntlig",
      ],
      interestsHeading: "Interesser",
      interestsText:
        "Golf, tennis og frisbeegolf hvor jeg setter pris på både konkurranse og det sosiale, matlaging som uttrykk for kreativitet, samt gaming med fokus på strategi og samarbeid.",
    },
    master: {
      title: "Master",
      subtitle: "MSc in Business, Major in Finance — Handelshøyskolen BI",
      paragraph:
        "Masteroppgaven min undersøkte hvordan ESG-score påvirker avkastning og risiko i det norske aksjemarkedet. Jeg konstruerte porteføljer basert på ESG-rangeringer og analyserte dem gjennom Fama-French 3- og 5-faktormodeller, med en egenutviklet ESG-faktor jeg kalte TMB – Top Minus Bottom.",
      paragraphTwo:
        "Dataene kom fra Bloomberg og Refinitiv Eikon og dekket Oslo All Share Index fra 2002 til 2022 – totalt nærmere 300 000 datapunkter fordelt på aksjepriser, regnskapstall og ESG-scorer. For selskaper uten tilstrekkelige ESG-data estimerte jeg scorer ved hjelp av lineær regresjon, og negative estimater ble satt til null i tråd med ESG-rammeverkets logikk.",
      paragraphThree:
        "Porteføljene ble konstruert ved å rangere selskaper etter ESG-score og dele dem inn i tre grupper – topp, bunn og tilfeldig utvalg – basert på 30. og 70. persentil. Disse ble rebalansert hvert år per 1. juli. For å beregne Fama-French-faktorene SMB, HML, RMW og CMA konstruerte jeg separate univariate porteføljer basert på markedsverdi, bok-til-marked, lønnsomhet og investeringsatferd. TMB-faktoren ble beregnet som differansen i avkastning mellom topp- og bunnporteføljene.",
      paragraphFour:
        "Selve analysen ble gjort med OLS-regresjon i R, der porteføljenes meravkastning ble regressert mot faktorene. Resultatene ble testet med ANOVA for å vurdere modellenes statistiske signifikans.",
      paragraphFive:
        "Hovedfunnet var at porteføljer med lave ESG-scorer gjennomgående presterte bedre enn de med høye scorer – særlig i verdiporteføljer. Det peker på at sammenhengen mellom bærekraft og avkastning er mer kompleks enn den ofte fremstilles.",
      thesisHeading: "Masteroppgave",
      thesisTitle:
        "ESG Meets Fama French Portfolio Performance — A Risk/Return study of the Norwegian markets",
      thesisSummary:
        "Oppgaven undersøker hvordan integrering av ESG-score påvirker avkastning og risikoegenskaper i porteføljer bygget med Fama-French-faktormodellene i det norske markedet. Ved å konstruere porteføljer basert på ESG-score og analysere dem gjennom Fama-French sin 3- og 5-faktormodell, samt en egen ESG-faktor (TMB), finner vi at porteføljer med lave ESG-score utpresterer porteføljer med høye ESG-score. Resultatene peker på en kompleks sammenheng mellom ESG og avkastning, og gir nye innsikter for bærekraftig finans i det norske aksjemarkedet.",
      thesisPdfLabel: "Last ned masteroppgaven (PDF)",
      thesisPdfHref: "/documents/master-thesis.pdf",
      dataHeading: "Data og kildekode",
      dataIntro:
        "Datagrunnlaget og R-koden bak analysen er samlet i en zip-fil. Den inneholder Excel-arkene med rådata, beregninger og regresjonsresultater for hver faktor (SMB, HML, RMW, CMA og ESG), samt R-skriptene som beregner porteføljeavkastning og simulerer manglende ESG-score med lineær regresjon.",
      dataDownloadLabel: "Last ned data og kode (.zip)",
      dataHref: "/documents/master-thesis-data.zip",
    },
    galleri: {
      title: "Galleri",
      intro: "Et utvalg bilder jeg har tatt som hobbyfotograf.",
      emptyTitle: "Ingen bilder lastet opp ennå.",
      emptyHintPrefix: "Legg bilder i ",
      emptyHintSuffix: " for å vise dem her.",
      closeLabel: "Lukk",
      prevLabel: "Forrige bilde",
      nextLabel: "Neste bilde",
    },
    blogg: {
      title: "Tanker",
      intro: "Her samler jeg korte refleksjoner — om finans og livet for øvrig.",
      posts: [
        {
          title: "[Tittel på innlegg]",
          date: "[Dato]",
          excerpt: "[Kort utdrag eller innledning til refleksjonen.]",
        },
        {
          title: "[Tittel på innlegg]",
          date: "[Dato]",
          excerpt: "[Kort utdrag eller innledning til refleksjonen.]",
        },
        {
          title: "[Tittel på innlegg]",
          date: "[Dato]",
          excerpt: "[Kort utdrag eller innledning til refleksjonen.]",
        },
      ],
    },
    prosjekter: {
      title: "Prosjekter",
      intro: "Ting jeg bygger og utforsker på og utenfor fritiden - som jeg er spesielt stolt av.",
      projectLinkLabel: "Les artikkelen",
      readMoreLabel: "Les mer",
      readLessLabel: "Vis mindre",
      projects: [
        {
          title: "Hakuna Potata",
          startYear: 2019,
          description:
            "Studentbedrift jeg var med å starte og var CFO for, som del av et entreprenørskapsprogram ved BI. Vi drev en food truck som solgte bakte poteter fra Spikersuppa i Oslo, rettet mot tilskuere og løpere under Sentrumsløpet.",
          tags: ["Entreprenørskap", "Studentbedrift"],
          href: "https://www.linkedin.com/pulse/unge-entrepren%C3%B8rer-r%C3%A5-skaperglede-og-varme-poteter-mc-carthy/",
        },
        {
          title: "Denne nettsiden",
          startYear: 2026,
          description:
            "Nettsiden du besøker nå, som jeg har utviklet og designet selv. Bygget med Visual Studio, Claude Code AI, og hostet på GitHub og Vercel under eget domenenavn.",
          tags: ["Visual Studio Code", "GitHub", "Vercel", "Claude AI", "Claude Code"],
          href: "",
        },
        {
          title: "Intervju med Oljefondssjef Nicolai Tangen",
          startYear: 2022,
          description: [
            "På vegne av mine medstudenter ved Handelshøyskolen BI fikk jeg muligheten til å intervjue Nicolai Tangen, administrerende direktør i Norges Bank Investment Management.",
            "Dette var langt utenfor komfortsonen min, men det er som Tangen selv sa: ''De største tingene i livet skjer utenfor komfortsonen.''",
            "En stor takk til Nicolai Tangen og NBIM, Giovanni Pagliardi og BI for å ha tilrettelagt arrangementet, samt mine medstudenter Nicola Martini, Valeria Lo Re, Anelill Sandnes Engen, Isak Rygg og Ole Martin Bø – det var en glede å jobbe med dere.",
          ],
          tags: ["Offentlig tale", "NBIM", "BI"],
          href: "https://www.linkedin.com/posts/jens-anders-andresen_great-lecture-and-career-event-with-ceo-of-activity-6976918073425453056-pQmv?utm_source=share&utm_medium=member_desktop&rcm=ACoAACiYi_gBhdkr1yO6bx9voH4NufbgEFAu8SQ",
        },
        {
          title: "Formuesskatten etter 2021-valget",
          startYear: 2024,
          description:
            "Semesteroppgave fra kurset 'State and the Market' ved BI, som analyserer den politiske prosessen bak økningen i den norske formuesskatten etter valget i 2021. Med utgangspunkt i rational choice-teori og institusjonell teori ser oppgaven på hvordan skatteøkningen har fått flere av Norges rikeste til å flytte til lavskatteland som Sveits, og diskuterer balansen mellom omfordeling og økonomisk konkurransekraft i velferdsstaten.",
          tags: ["Skatt", "Politikk", "BI"],
          href: "/documents/state-and-the-market.pdf",
        },
        {
          title: "Python for Everybody (Coursera)",
          startYear: 2026,
          description:
            "Fullført de to første kursene i Python for Everybody-spesialiseringen fra University of Michigan på Coursera: 'Programming for Everybody (Getting Started with Python)' og 'Python Data Structures'. Kursene dekker grunnleggende programmeringskonsepter som variabler, løkker, funksjoner og datastrukturer som lister, dictionaries og tupler i Python.",
          tags: ["Python", "Coursera", "Programmering"],
          href: "/documents/python-data-structures-certificate.pdf",
        },
      ],
    },
    kontakt: {
      title: "Kontakt",
      intro:
        "Ta gjerne kontakt om du har spørsmål eller bare vil si hei.",
      emailLabel: "E-post",
      email: "Jens.a.andresen@gmail.com",
      linkedinLabel: "LinkedIn",
      linkedin: "linkedin.com/in/jens-anders-andresen",
      linkedinHref: "https://www.linkedin.com/in/jens-anders-andresen/",
    },
  },
  en: {
    nav: {
      hjem: "Home",
      cv: "CV",
      master: "Master's",
      galleri: "Gallery",
      blogg: "Thoughts",
      prosjekter: "Projects",
      kontakt: "Contact",
      toggleLabel: "NO",
      toggleAriaLabel: "Switch to Norwegian",
    },
    footer: {
      role: "Graduate Economist · MSc in Finance, BI",
    },
    home: {
      heroSubtitle:
        "Graduate Economist · MSc in Finance, BI Norwegian Business School",
      heroGreeting: "Hi,",
      heroName: "My name is Jens Anders Andresen.",
      heroParagraph:
        "A Graduate Economist from BI specializing in finance.",
      heroParagraphTwo:
        "I'm also focused on learning more about AI and machine learning, and how it can be applied to, for example, finance and analysis.",
      heroParagraphThree:
        "This site is, among other things, a result of that curiosity.",
      exploreHeading: "Explore the site",
      sections: {
        cv: {
          title: "CV",
          description: "Education, experience and skills.",
        },
        master: {
          title: "Master's",
          description: "My master's degree — MSc in Finance from BI.",
        },
        galleri: {
          title: "Gallery",
          description: "My photo gallery.",
        },
        blogg: {
          title: "Thoughts",
          description: "Reflections and thoughts.",
        },
        prosjekter: {
          title: "Projects",
          description: "Things I build and explore in my spare time.",
        },
        kontakt: {
          title: "Contact",
          description: "Feel free to reach out.",
        },
      },
    },
    cv: {
      title: "CV",
      intro: "",
      educationHeading: "Education",
      education: [
        {
          degree: "MSc in Business, Major in Finance",
          school: "BI Norwegian Business School",
          period: "Aug 2022 – Jul 2024",
          description:
            "Graduate Economist specializing in finance. The program covered portfolio theory, valuation, risk management and quantitative analysis.",
        },
        {
          degree: "Bachelor in Economics and Management",
          school: "BI Norwegian Business School",
          period: "Aug 2017 – Jul 2020",
          description:
            "Business degree with a broad academic foundation in finance, accounting, macroeconomics, strategy and business law.",
        },
        {
          degree: "General Studies (Upper Secondary School)",
          school: "Nesodden Upper Secondary School",
          period: "Aug 2014 – Jun 2017",
          description:
            "Specialized in English and Economics, alongside advanced mathematics (S) and technology and research theory.",
        },
      ],
      subjectsHeading: "Courses from my studies",
      subjectsBachelorLabel: "Bachelor in Economics and Management · 2017–2020",
      subjectsMasterLabel: "MSc in Finance · 2022–2024",
      subjectsBachelor: [
        {
          code: "MRK 3414",
          title: "Marketing Management",
          description:
            "Introduction to marketing principles, including strategic planning, product development and market analysis.",
          href: "https://programmeinfo.bi.no/nb/kurs/MRK-3414/2020-host",
        },
        {
          code: "BØK 1113",
          title: "Managerial Accounting",
          description:
            "Fundamentals of managerial accounting in businesses, including budgeting and cost control.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-1113/2019-host",
        },
        {
          code: "HIS 3410",
          title: "The Firm",
          description:
            "Historical and societal development of firms, and their role in the economy.",
          href: "https://programmeinfo.bi.no/nb/kurs/HIS-3410/2017-host",
        },
        {
          code: "SØK 1101",
          title: "Microeconomics I",
          description:
            "Basic economic principles at the individual and firm level, such as supply and demand.",
          href: "https://programmeinfo.bi.no/nb/kurs/S%C3%98K-1101/2019-var",
        },
        {
          code: "ORG 3402",
          title: "Psychology, Organization and Leadership",
          description:
            "Understanding human behavior in organizations and how leadership influences it.",
          href: "https://programmeinfo.bi.no/nb/kurs/ORG-3402/2019-var",
        },
        {
          code: "BØK 1121",
          title: "Finance I",
          description:
            "Fundamental principles of finance, such as capital management, investment and financial markets.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-1121/2024-var",
        },
        {
          code: "JUR 3420",
          title: "Business Law",
          description:
            "Introduction to laws and regulations governing businesses and commercial activity.",
          href: "https://programmeinfo.bi.no/nb/kurs/JUR-3420/2021-host",
        },
        {
          code: "ORG 1211",
          title: "Organization Theory and HRM",
          description:
            "Explores theories of how organizations function and how people are managed within firms.",
          href: "https://programmeinfo.bi.no/nb/kurs/ORG-1211/2017-host",
        },
        {
          code: "JUR 3624",
          title: "Accounting Practice and Ethics",
          description:
            "Focus on ethical guidelines and professional practice in accounting.",
          href: "https://programmeinfo.bi.no/nb/kurs/JUR-3624/2021-var",
        },
        {
          code: "ELE 3733",
          title: "Starting a Business",
          description:
            "Practical introduction to starting your own business, including business planning and entrepreneurship.",
          href: "https://programmeinfo.bi.no/nb/kurs/ELE-3733/2019-var",
        },
        {
          code: "SØK 1201",
          title: "Macroeconomics I",
          description:
            "Basic understanding of national and global economics, including GDP, inflation and unemployment.",
          href: "https://programmeinfo.bi.no/nb/kurs/S%C3%98K-1201/2023-host",
        },
        {
          code: "MAD 1214",
          title: "Logistics",
          description:
            "Introduction to logistics and supply chain management, focused on efficiency and cost control.",
          href: "https://programmeinfo.bi.no/nb/kurs/MAD-1214/2017-host",
        },
        {
          code: "STR 1301",
          title: "Strategy I",
          description:
            "Developing and implementing business strategies to achieve competitive advantage.",
          href: "https://programmeinfo.bi.no/nb/kurs/STR-1301/2023-host",
        },
        {
          code: "BØK 1322",
          title: "Finance II",
          description:
            "Continuation of Finance I, with more advanced topics such as risk management and capital structure.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-1322/2018-var",
        },
        {
          code: "BØK 3541",
          title: "Managerial Economics and Control",
          description:
            "Understanding the financial management tools used to lead and measure business performance.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-3541/2018-var",
        },
        {
          code: "BØK 3532",
          title: "Financial Accounting and Statement Analysis",
          description:
            "Fundamentals of financial accounting and analysis of financial reports.",
          href: "https://programmeinfo.bi.no/nb/kurs/B%C3%98K-3532/2018-var",
        },
        {
          code: "STR 1320",
          title: "Strategy II",
          description:
            "Advanced strategic tools and techniques for leading organizations in dynamic markets.",
          href: "https://programmeinfo.bi.no/nb/kurs/STR-1320/2024-var",
        },
        {
          code: "ELE 3743",
          title: "Personal Finance",
          description:
            "Learn how to manage your own finances, including investing, saving and debt.",
          href: "https://programmeinfo.bi.no/nb/kurs/ELE-3743/2021-host",
        },
        {
          code: "SØK 1366",
          title: "Macroeconomics II",
          description:
            "More advanced macroeconomic topics, including international trade and fiscal policy.",
          href: "https://programmeinfo.bi.no/nb/kurs/S%C3%98K-1366/2021-var",
        },
        {
          code: "ELE 3735",
          title: "Financial Accounting",
          description:
            "In-depth accounting, focused on how companies record and report financial transactions.",
          href: "https://programmeinfo.bi.no/nb/kurs/ELE-3735/2023-var",
        },
        {
          code: "SØK 1344",
          title: "Microeconomics II",
          description:
            "Continuation of Microeconomics I, with deeper analysis of markets, game theory and decision theory.",
          href: "https://programmeinfo.bi.no/nb/kurs/S%C3%98K-1344/2019-host",
        },
        {
          code: "MET 1190",
          title: "Statistics",
          description:
            "Introduction to statistical methods and tools used for economic analysis.",
          href: "https://programmeinfo.bi.no/nb/kurs/MET-1190/2021-var",
        },
        {
          code: "MET 1333",
          title: "Econometrics",
          description:
            "Learn how to use statistical methods to analyze economic data and build economic models.",
          href: "https://programmeinfo.bi.no/nb/kurs/MET-1333/2018-host",
        },
        {
          code: "MET 1180",
          title: "Mathematics for Economists",
          description:
            "Fundamental mathematics needed to solve economic and financial problems.",
          href: "https://programmeinfo.bi.no/nb/kurs/MET-1180/2020-host",
        },
      ],
      subjectsMaster: [
        {
          code: "GRA 6035",
          title: "Mathematics",
          description:
            "A foundational understanding of the mathematics used in economic and financial models, such as calculus and linear algebra.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6035/",
        },
        {
          code: "GRA 6031",
          title: "Microeconomics",
          description:
            "Explores economic decision-making at the individual and firm level, focused on supply and demand, market structure and pricing theory.",
          href: "https://programmeinfo.bi.no/en/course/GRA-6031/2015-autumn",
        },
        {
          code: "GRA 6534",
          title: "Investments",
          description:
            "Covers the theory and practice of investing, including portfolio management and the valuation of different asset types.",
          href: "https://programmeinfo.bi.no/en/course/GRA-6534/2018-spring",
        },
        {
          code: "GRA 6038",
          title: "Ethics and Sustainability in Organizations",
          description:
            "Discusses ethical issues and sustainability in business, focused on long-term value creation and responsible leadership.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6038/2019-autumn",
        },
        {
          code: "GRA 6547",
          title: "Research Methodology in Finance",
          description:
            "Teaches research methods used in finance research, including data collection, statistical analysis and empirical studies.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6547/2024-spring",
        },
        {
          code: "GRA 6538",
          title: "Applied Valuation",
          description:
            "Teaches how to value companies and financial instruments using methods such as discounted cash flow (DCF) and comparable analysis.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6538/2021-spring",
        },
        {
          code: "GRA 6555",
          title: "Asset Management",
          description:
            "Focused on managing investment portfolios, including risk management, investment strategies and fund monitoring.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6555/2020-spring",
        },
        {
          code: "GRA 6513",
          title: "Financial Risk Management",
          description:
            "Covers theories and techniques for identifying, measuring and managing financial risk, such as market, credit and liquidity risk.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6513/2018-spring",
        },
        {
          code: "GRA 6560",
          title: "Strategic Asset Allocation",
          description:
            "Explores the strategic allocation of assets across investments, aiming to maximize risk-adjusted returns over time.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6560/2019-autumn",
        },
        {
          code: "GRA 6634",
          title: "Advanced Macroeconomics",
          description:
            "A deeper look at macroeconomic theories and models, emphasizing how national and international economies function.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6634/2017-autumn",
        },
        {
          code: "GRA 6666",
          title: "International Macroeconomics and Finance",
          description:
            "Looks at international financial markets and macroeconomic phenomena, such as exchange rates, inflation and global economic policy.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6666/2022-autumn",
        },
        {
          code: "GRA 6039",
          title: "Econometrics with Programming",
          description:
            "Integrates econometric techniques with programming, building skills to analyze economic data using tools like Python or R.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6039/2017-autumn",
        },
        {
          code: "GRA 6531",
          title: "Applied Portfolio Management",
          description:
            "Hands-on experience in portfolio management, including strategies for active and passive investment management.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-6531/2021-spring",
        },
        {
          code: "GRA 1970",
          title: "Master Thesis",
          description:
            "Co-authored a thesis on the impact of ESG scores on portfolios built using the Fama-French 3- and 5-factor investment models.",
          href: "https://programmeinfo.bi.no/nb/course/GRA-1970/2019-autumn",
        },
      ],
      experienceHeading: "Positions of Trust & Experience",
      experience: [
        {
          role: "Boardmember",
          company: "Nesodden Høyre",
          period: "Jan 2020 – May 2021",
          description:
            "Treasurer on the board, responsible for ongoing bookkeeping, budgeting and financial reporting. Improved budget-tracking routines and ensured accurate recording of transactions.",
        },
        {
          role: "CFO and Co-Founder",
          company: "Hakuna Potata SB",
          period: "Aug 2019 – Dec 2019",
          description:
            "Co-founder and CFO of a student company at BI. Full responsibility for budget, accounting, costing and financial reporting from launch to wind-down – including developing financial routines and strategies for the company.",
        },
      ],
      skillsHeading: "Skills",
      skills: [
        "Arduino IDE",
        "Bloomberg",
        "Budgeting & financial reporting",
        "Eikon",
        "ESG analysis",
        "Excel",
        "Factor investing (Fama-French)",
        "Financial modeling",
        "Quantitative analysis",
        "Portfolio theory",
        "PowerPoint",
        "Python",
        "R",
        "Regression analysis",
        "Risk management",
        "Stata",
        "Valuation",
        "Word",
      ],
      coursesHeading: "Courses & Certifications",
      courses: [
        {
          text: "Bloomberg Market Concepts (BMC)",
          description:
            "Bloomberg's self-paced e-learning course on financial markets, focusing on macroeconomics, currencies, fixed income and equities. Covers how central banks, GDP, inflation and the labor market drive financial markets.",
          tags: ["Macroeconomics", "Financial Markets", "Fixed Income"],
          href: "/documents/bmc-certificate.pdf",
        },
        {
          text: "AmplifyME Simulation - diploma level 4",
          description:
            "A simulated trading floor where I took on the role of trader and broker under time pressure, handling order execution, risk management and client communication in a simulated market environment. Completed at the highest diploma level (level 4).",
          tags: ["Trading", "Risk Management", "Capital Markets"],
          href: "/documents/amplifyme-diploma.pdf",
        },
        {
          text: "Learnesy - Excel - Basic (Norwegian)",
          description:
            "A Learnesy course in fundamental Excel skills delivered in Norwegian, covering formulas, functions and cell formatting to build simple calculations and overviews - a foundation for further work with numbers in Excel.",
          tags: ["Excel", "Formulas & Functions", "Data Overview"],
          href: "/documents/learnesy-diploma.pdf",
        },
        {
          text: "Stockschool - DN - Diploma",
          description:
            "Dagens Næringsliv's stock market course covering the fundamentals of equity investing, including valuation basics, portfolio construction, risk and analysis of Norwegian and international stocks.",
          tags: ["Equities", "Investing", "Portfolio Theory"],
          href: "/documents/aksjeskolen-diplom.jpg",
        },
        {
          text: "Certificate Student Company",
          description:
            "Certified participation in Young Enterprise's student company programme at BI, where I served as CFO for Hakuna Potata. Responsible for budgeting, bookkeeping and financial management of a real company over a full semester.",
          tags: ["Entrepreneurship", "Accounting", "Budgeting"],
          href: "/documents/attest-sb.pdf",
        },
        {
          text: "Python Data Structures (Coursera, University of Michigan)",
          description:
            "Part of the Python for Everybody specialization from the University of Michigan. Covers Python fundamentals such as variables, loops and functions, along with data structures like lists, dictionaries, tuples and file handling.",
          tags: ["Python", "Programming", "Data Structures"],
          href: "/documents/python-data-structures-certificate.pdf",
        },
      ],
      coursesDownloadLabel: "View certificate",
      languagesHeading: "Languages",
      languages: [
        "Norwegian – fluent in writing and oral",
        "English – fluent in writing and oral",
      ],
      interestsHeading: "Interests",
      interestsText:
        "Golf, tennis and frisbee golf, appreciating both the competitive and social aspects, cooking as an outlet for creativity and attention to detail, and gaming with a focus on strategy and teamwork.",
    },
    master: {
      title: "Master's",
      subtitle: "MSc in Business, Major in Finance — BI Norwegian Business School",
      paragraph:
        "My master's thesis examined how ESG scores affect risk and return in the Norwegian stock market. I constructed portfolios based on ESG rankings and analyzed them using the Fama-French 3- and 5-factor models, with a custom ESG factor I called TMB – Top Minus Bottom.",
      paragraphTwo:
        "The data came from Bloomberg and Refinitiv Eikon and covered the Oslo All Share Index from 2002 to 2022 – nearly 300,000 data points across stock prices, financial statements and ESG scores. For companies without sufficient ESG data, I estimated scores using linear regression, setting negative estimates to zero in line with the ESG framework's logic.",
      paragraphThree:
        "The portfolios were constructed by ranking companies by ESG score and splitting them into three groups – top, bottom and a random sample – based on the 30th and 70th percentiles. These were rebalanced every year on July 1st. To calculate the Fama-French factors SMB, HML, RMW and CMA, I constructed separate univariate portfolios based on market value, book-to-market, profitability and investment behavior. The TMB factor was calculated as the return difference between the top and bottom portfolios.",
      paragraphFour:
        "The analysis itself was done using OLS regression in R, regressing the portfolios' excess returns against the factors. The results were tested with ANOVA to assess the models' statistical significance.",
      paragraphFive:
        "The main finding was that portfolios with low ESG scores consistently outperformed those with high scores – particularly in value portfolios. This points to a more complex relationship between sustainability and returns than is often portrayed.",
      thesisHeading: "Master's thesis",
      thesisTitle:
        "ESG Meets Fama French Portfolio Performance — A Risk/Return study of the Norwegian markets",
      thesisSummary:
        "This thesis explores how integrating ESG scores affects the performance and risk characteristics of portfolios built on the Fama-French factor models in the Norwegian market. By constructing portfolios based on ESG scores and analyzing them through the Fama-French 3- and 5-factor models, plus a custom ESG factor (TMB), the findings reveal that portfolios with low ESG scores outperform those with high ESG scores — pointing to a complex relationship between ESG and returns, with new insights for sustainable finance in the Norwegian stock market.",
      thesisPdfLabel: "Download the thesis (PDF)",
      thesisPdfHref: "/documents/master-thesis.pdf",
      dataHeading: "Data & Source Code",
      dataIntro:
        "The dataset and R code behind the analysis are bundled in a zip file. It contains the Excel sheets with raw data, calculations and regression results for each factor (SMB, HML, RMW, CMA and ESG), along with the R scripts that compute portfolio returns and simulate missing ESG scores using linear regression.",
      dataDownloadLabel: "Download data & code (.zip)",
      dataHref: "/documents/master-thesis-data.zip",
    },
    galleri: {
      title: "Gallery",
      intro: "A selection of photos I've taken as a hobby photographer.",
      emptyTitle: "No photos uploaded yet.",
      emptyHintPrefix: "Add photos to ",
      emptyHintSuffix: " to display them here.",
      closeLabel: "Close",
      prevLabel: "Previous image",
      nextLabel: "Next image",
    },
    blogg: {
      title: "Thoughts",
      intro: "Here I collect short reflections — on finance and life in general.",
      posts: [
        {
          title: "[Post title]",
          date: "[Date]",
          excerpt: "[Short excerpt or introduction to the reflection.]",
        },
        {
          title: "[Post title]",
          date: "[Date]",
          excerpt: "[Short excerpt or introduction to the reflection.]",
        },
        {
          title: "[Post title]",
          date: "[Date]",
          excerpt: "[Short excerpt or introduction to the reflection.]",
        },
      ],
    },
    prosjekter: {
      title: "Projects",
      intro: "Things I build and explore in and outside of my spare time — that I'm especially proud of.",
      projectLinkLabel: "Read the article",
      readMoreLabel: "Read more",
      readLessLabel: "Show less",
      projects: [
        {
          title: "Hakuna Potata",
          startYear: 2019,
          description:
            "A student company I co-founded and served as CFO for, part of an entrepreneurship program at BI. We ran a food truck selling baked potatoes from Spikersuppa in Oslo, targeting spectators and runners during the Sentrumsløpet race.",
          tags: ["Entrepreneurship", "Student Company", "Finance"],
          href: "https://www.linkedin.com/pulse/unge-entrepren%C3%B8rer-r%C3%A5-skaperglede-og-varme-poteter-mc-carthy/",
        },
        {
          title: "This website",
          startYear: 2026,
          description:
            "The personal portfolio site you're looking at right now. Built with Next.js (App Router) and TypeScript, styled with Tailwind CSS, and fully bilingual (Norwegian/English) via a custom translation system covering the CV, master's thesis, gallery, blog and projects. Built in collaboration with Claude Code as an AI pair-programmer.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI-Assisted Development"],
          href: "",
        },
        {
          title: "Interview with Oil Fund CEO Nicolai Tangen",
          startYear: 2022,
          description: [
            "On behalf of my fellow students at BI Norwegian Business School, I had the opportunity to interview Nicolai Tangen, CEO of Norges Bank Investment Management.",
            "This was far outside my comfort zone, but as Tangen himself said: ''The biggest things in life happen outside your comfort zone.''",
            "A huge thanks to Nicolai Tangen and NBIM, Giovanni Pagliardi and BI for organizing the event, as well as my fellow students Nicola Martini, Valeria Lo Re, Anelill Sandnes Engen, Isak Rygg and Ole Martin Bø – it was a pleasure working with you.",
          ],
          tags: ["Public Speaking", "NBIM", "BI"],
          href: "https://www.linkedin.com/posts/jens-anders-andresen_great-lecture-and-career-event-with-ceo-of-activity-6976918073425453056-pQmv?utm_source=share&utm_medium=member_desktop&rcm=ACoAACiYi_gBhdkr1yO6bx9voH4NufbgEFAu8SQ",
        },
        {
          title: "Norway's Wealth Tax After the 2021 Election",
          startYear: 2024,
          description:
            "A term paper from the BI course 'State and the Market', analyzing the political process behind the increase in Norway's wealth tax following the 2021 election. Drawing on Rational Choice Theory and Institutional Theory, the paper examines how the tax increase has driven several of Norway's wealthiest individuals to relocate to low-tax countries such as Switzerland, and discusses the balance between redistribution and economic competitiveness within the welfare state.",
          tags: ["Tax Policy", "Politics", "BI"],
          href: "/documents/state-and-the-market.pdf",
        },
        {
          title: "Python for Everybody (Coursera)",
          startYear: 2026,
          description:
            "Completed the first two courses in the Python for Everybody specialization from the University of Michigan on Coursera: 'Programming for Everybody (Getting Started with Python)' and 'Python Data Structures'. The courses cover core programming concepts such as variables, loops, functions, and data structures like lists, dictionaries, and tuples in Python.",
          tags: ["Python", "Coursera", "Programming"],
          href: "/documents/python-data-structures-certificate.pdf",
        },
      ],
    },
    kontakt: {
      title: "Contact",
      intro:
        "Feel free to reach out if you have questions or just want to say hi.",
      emailLabel: "Email",
      email: "Jens.a.andresen@gmail.com",
      linkedinLabel: "LinkedIn",
      linkedin: "linkedin.com/in/jens-anders-andresen",
      linkedinHref: "https://www.linkedin.com/in/jens-anders-andresen/",
    },
  },
};

export type Translations = typeof translations.no;

export default translations;
