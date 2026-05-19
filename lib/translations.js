// ---------------------------------------------------------------------------
// Centralised bilingual content for the entire site.
// Every visible string lives here so the language toggle can swap the whole UI.
// Access pattern in components: const { t } = useLanguage();  ->  t.hero.headline
// ---------------------------------------------------------------------------

export const translations = {
  en: {
    /* ---------- Header / Navigation ---------- */
    nav: {
      home: 'Home',
      about: 'About Us',
      goals: 'Goals',
      gallery: 'Gallery',
      legal: 'Legal Docs',
      news: 'News & Events',
      contact: 'Contact',
      donate: 'Donate Now',
      donateNote: '80G Tax Benefit',
      brand: 'Kanyadan Foundation',
      brandTag: 'Empowering Daughters',
    },

    /* ---------- Hero ---------- */
    hero: {
      eyebrow: 'Registered Section 8 Non-Profit · Bihar, India',
      headline: 'Empowering Daughters, Uplifting Families.',
      subline:
        'For over a decade, Kanyadan Foundation has stood beside underprivileged families — funding dignified marriages, subsidising health insurance for women, and teaching the skills that build lasting independence.',
      ctaPrimary: 'Support a Marriage',
      ctaSecondary: 'Apply for Assistance',
      stat1: 'Marriages Supported',
      stat1Val: '2,400+',
      stat2: 'Women Insured',
      stat2Val: '8,600+',
      stat3: 'Years of Service',
      stat3Val: '12',
      stat4: 'Volunteers',
      stat4Val: '350+',
      imageCaption: 'A daughter sent off with dignity, surrounded by her family.',
    },

    /* ---------- Leadership Message ---------- */
    leadership: {
      tag: 'Message from the Desk',
      title: 'Why We Began This Journey',
      body1:
        'When I was a young man in our village, I watched families fall into lifelong debt simply to give their daughters a respectful wedding. I saw mothers skip medical care because a single hospital visit meant a month without food. That helplessness never left me.',
      body2:
        'Kanyadan Foundation was born from a simple belief — that no family should have to choose between dignity and survival. Today, with our donors and volunteers, we turn that belief into thousands of weddings celebrated, women insured, and young people trained for a livelihood.',
      body3:
        'Every rupee you give is treated as a sacred trust. We publish our audits, our certificates, and our outcomes openly. We invite you to walk this path with us.',
      sign: 'Shri Ramesh Kumar Verma',
      role: 'Founder & President, Kanyadan Foundation',
      values: ['Transparency', 'Compassion', 'Dignity', 'Accountability'],
    },

    /* ---------- Goals / Mission ---------- */
    goals: {
      tag: 'Our Goals & Mission',
      title: 'Three Pillars of Lasting Change',
      subtitle:
        'Every programme is designed to move a family from crisis to stability — and keep them there.',
      items: [
        {
          icon: 'ring',
          title: 'Financial Aid for Kanyadan',
          desc: 'Direct, transparent grants that help underprivileged families conduct their daughters’ marriages with dignity — covering essentials, not extravagance.',
        },
        {
          icon: 'shield',
          title: 'Subsidised Health Insurance for Women',
          desc: 'We co-pay health insurance premiums so mothers and daughters can seek medical care without fear of debt or delay.',
        },
        {
          icon: 'book',
          title: 'Skill Development Programmes',
          desc: 'Tailoring, computer literacy, and wellness training that give women a steady income and a voice within their households.',
        },
      ],
      missionTag: 'Our Mission',
      missionText:
        'To ensure that every underprivileged daughter in our region is married with dignity, every woman is protected by health cover, and every family has a path to self-reliance.',
    },

    /* ---------- Team ---------- */
    team: {
      tag: 'Our Team',
      title: 'The People Behind the Promise',
      subtitle:
        'Board members, full-time staff, and grassroots volunteers working hand in hand.',
      members: [
        { name: 'Shri Ramesh Kumar Verma', role: 'Founder & President', bio: 'Guides the foundation’s vision and oversees every major welfare drive.' },
        { name: 'Smt. Anjali Sharma', role: 'Secretary & Programme Head', bio: 'Designs and manages the marriage-aid and insurance programmes.' },
        { name: 'Dr. Pooja Mishra', role: 'Health & Wellness Director', bio: 'Leads health camps and the women’s insurance subsidy desk.' },
        { name: 'Shri Arun Prasad', role: 'Treasurer & Compliance', bio: 'Maintains audited accounts and statutory transparency filings.' },
        { name: 'Smt. Kavita Devi', role: 'Field Coordinator', bio: 'Connects rural families with the foundation’s assistance schemes.' },
        { name: 'Shri Manoj Kumar', role: 'Skill Training Lead', bio: 'Runs tailoring and computer-literacy centres across the district.' },
        { name: 'Ms. Sneha Raj', role: 'Communications & Outreach', bio: 'Shares beneficiary stories and donor reports with the public.' },
        { name: 'Shri Dinesh Yadav', role: 'Volunteer Captain', bio: 'Mobilises and trains the foundation’s 350+ grassroots volunteers.' },
      ],
    },

    /* ---------- Supporters ---------- */
    supporters: {
      tag: 'Our Supporters',
      title: 'Standing With Us',
      subtitle:
        'Corporate CSR partners and devoted individual donors who make every milestone possible.',
      corporateTag: 'Corporate CSR Partners',
      wallTag: 'Wall of Fame — Our Regular Donors',
      donors: [
        { name: 'Suresh & Meena Agarwal', note: 'Monthly donor since 2016' },
        { name: 'Dr. Rakesh Bansal', note: 'Sponsors 10 marriages a year' },
        { name: 'Priya Industries Family', note: 'Health-camp patron' },
        { name: 'Anonymous Well-Wisher', note: 'Annual education grant' },
        { name: 'Lata & Vinod Khanna', note: 'Insurance subsidy donor' },
        { name: 'The Gupta Charitable Trust', note: 'Skill-centre sponsor' },
      ],
    },

    /* ---------- Gallery ---------- */
    gallery: {
      tag: 'Media Gallery',
      title: 'Moments That Move Us',
      subtitle:
        'Photographs and clips from weddings, health camps, and distribution drives.',
      filters: {
        all: 'All',
        weddings: 'Weddings',
        health: 'Health Camps',
        events: 'Distribution Drives',
      },
      items: [
        { cat: 'weddings', caption: 'Mass wedding drive — 40 daughters married with dignity' },
        { cat: 'health', caption: 'Free health check-up camp for rural women' },
        { cat: 'events', caption: 'Sewing-machine distribution to skill graduates' },
        { cat: 'weddings', caption: 'A bride blessed by her parents and our volunteers' },
        { cat: 'health', caption: 'Insurance enrolment desk at the village health camp' },
        { cat: 'events', caption: 'Winter blanket and ration distribution drive' },
        { cat: 'weddings', caption: 'Community wedding feast organised by donors' },
        { cat: 'health', caption: 'Wellness and nutrition workshop for new mothers' },
        { cat: 'events', caption: 'Certificates awarded at the tailoring training centre' },
      ],
    },

    /* ---------- Awards ---------- */
    awards: {
      tag: 'Awards & Recognition',
      title: 'Honoured for Our Impact',
      subtitle:
        'Recognition that reflects the trust of the community and our partners.',
      items: [
        { year: '2024', title: 'State Social Impact Award', org: 'Bihar Welfare Council' },
        { year: '2023', title: 'Best NGO for Women Empowerment', org: 'National NGO Forum' },
        { year: '2022', title: 'Excellence in Transparency', org: 'GuideStar India' },
        { year: '2021', title: 'Community Service Recognition', org: 'District Administration' },
      ],
    },

    /* ---------- Legal Documents ---------- */
    legal: {
      tag: 'Legal Documents & Transparency',
      title: 'Open Books, Earned Trust',
      subtitle:
        'Every donor deserves to see exactly how the foundation is governed. View or download our statutory documents below.',
      view: 'View',
      download: 'Download',
      items: [
        { name: '12A Registration Certificate', desc: 'Income-tax registration that exempts the foundation’s income.' },
        { name: '80G Tax-Exemption Certificate', desc: 'Allows donors to claim tax deduction on their contributions.' },
        { name: 'Section 8 Incorporation Certificate', desc: 'Certifies Kanyadan Foundation as a registered non-profit company.' },
        { name: 'Annual Audit Report 2023–24', desc: 'Independently audited statement of accounts and fund utilisation.' },
        { name: 'Annual Audit Report 2022–23', desc: 'Previous year’s audited financial statement.' },
        { name: 'FCRA Compliance Statement', desc: 'Declaration of compliance for regulated contributions.' },
      ],
    },

    /* ---------- News & Events ---------- */
    news: {
      tag: 'News & Events',
      title: 'What’s Happening',
      subtitle: 'Upcoming drives and the latest from the field.',
      upcomingTag: 'Upcoming Events',
      latestTag: 'Latest News',
      register: 'Register / Learn More',
      readMore: 'Read full story',
      events: [
        { date: '28 Jun 2026', title: 'Mass Wedding Drive — Patna', place: 'Gandhi Maidan, Patna', desc: '50 daughters to be married with full community support. Family registration open now.' },
        { date: '12 Jul 2026', title: 'Free Women’s Health Camp', place: 'Muzaffarpur Block Office', desc: 'Check-ups, screenings, and on-the-spot insurance enrolment.' },
        { date: '03 Aug 2026', title: 'Skill Centre Admissions Open', place: 'Kanyadan Training Hall', desc: 'New batch for tailoring and computer-literacy courses for women.' },
      ],
      articles: [
        { date: '02 May 2026', title: 'Foundation crosses 2,400 supported marriages', excerpt: 'A milestone reached thanks to a record year of donor generosity and volunteer effort.' },
        { date: '18 Apr 2026', title: 'New insurance tie-up brings cover to 1,000 more women', excerpt: 'A fresh partnership lowers premiums and widens the women’s health-cover programme.' },
        { date: '27 Mar 2026', title: 'Success story: From trainee to entrepreneur', excerpt: 'Meet Sunita, who turned a tailoring course into a thriving home business.' },
      ],
    },

    /* ---------- Donate band ---------- */
    donate: {
      tag: 'Make a Difference Today',
      title: 'Your Gift Becomes Someone’s New Beginning',
      desc: 'A single contribution can fund a daughter’s wedding, insure a mother’s health, or train a young woman for a livelihood. Every donation is 100% tax-exempt under Section 80G.',
      amounts: ['₹2,100', '₹5,100', '₹11,000', '₹21,000'],
      amountNote: 'Choose an amount — or give what your heart allows.',
      cta: 'Donate Securely',
      ctaSecondary: 'Become a Monthly Donor',
      trust1: '80G Tax-Exempt',
      trust2: 'Section 8 Registered',
      trust3: 'Audited Accounts',
      trust4: '100% to the Cause',
    },

    /* ---------- Contact ---------- */
    contact: {
      tag: 'Contact & Assistance',
      title: 'We Are Here to Help',
      subtitle: 'Reach out for support, or to learn how you can contribute.',
      assistTitle: 'Apply for Assistance',
      assistDesc: 'For families seeking marriage aid or a health-insurance subsidy.',
      enquiryTitle: 'General Enquiry',
      enquiryDesc: 'For donations, partnerships, media, and volunteering.',
      fields: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address',
        district: 'District / Village',
        type: 'Type of Assistance',
        typeOptions: ['Marriage Aid', 'Health Insurance Subsidy', 'Skill Training'],
        message: 'Tell us about your situation',
        subject: 'Subject',
        submit: 'Submit Application',
        send: 'Send Message',
        consent: 'I confirm the information provided is true to the best of my knowledge.',
      },
      success: 'Thank you. Our team will contact you within 3 working days.',
      infoTitle: 'Registered Office',
      address: 'Kanyadan Foundation, Welfare Bhawan, Boring Road, Patna, Bihar 800001, India',
      hours: 'Working Hours: Monday – Saturday, 10:00 AM – 6:00 PM',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      mapTitle: 'Find Us',
    },

    /* ---------- Footer ---------- */
    footer: {
      about:
        'Kanyadan Foundation is a registered Section 8 non-profit working to uplift underprivileged families through dignified marriages, women’s health cover, and skill development.',
      quickLinks: 'Quick Links',
      programmes: 'Programmes',
      connect: 'Connect With Us',
      taxNote: 'All donations are tax-exempt under Section 80G of the Income Tax Act.',
      rights: '© 2026 Kanyadan Foundation. All rights reserved.',
      disclaimer:
        'Kanyadan Foundation is a registered non-profit organisation. Donations are utilised solely for charitable purposes as per our governing documents.',
      madeWith: 'Built with care for a better tomorrow.',
      newsletter: 'Get our impact updates',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Your email address',
    },

    /* ---------- Misc ---------- */
    common: {
      langLabel: 'हिंदी',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
    },
  },

  /* ======================================================================= */
  /* ============================== HINDI ================================== */
  /* ======================================================================= */
  hi: {
    nav: {
      home: 'मुख्य पृष्ठ',
      about: 'हमारे बारे में',
      goals: 'लक्ष्य',
      gallery: 'गैलरी',
      legal: 'कानूनी दस्तावेज़',
      news: 'समाचार और कार्यक्रम',
      contact: 'संपर्क करें',
      donate: 'अभी दान करें',
      donateNote: '80G कर लाभ',
      brand: 'कन्यादान फ़ाउंडेशन',
      brandTag: 'बेटियों का सशक्तिकरण',
    },

    hero: {
      eyebrow: 'पंजीकृत धारा 8 गैर-लाभकारी संस्था · बिहार, भारत',
      headline: 'बेटियों का कन्यादान, समाज का सम्मान।',
      subline:
        'एक दशक से अधिक समय से, कन्यादान फ़ाउंडेशन वंचित परिवारों के साथ खड़ा है — सम्मानजनक विवाह, महिलाओं के लिए स्वास्थ्य बीमा सब्सिडी, और स्थायी आत्मनिर्भरता हेतु कौशल प्रशिक्षण प्रदान करता है।',
      ctaPrimary: 'एक विवाह में सहयोग दें',
      ctaSecondary: 'सहायता के लिए आवेदन करें',
      stat1: 'समर्थित विवाह',
      stat1Val: '2,400+',
      stat2: 'बीमित महिलाएँ',
      stat2Val: '8,600+',
      stat3: 'सेवा के वर्ष',
      stat3Val: '12',
      stat4: 'स्वयंसेवक',
      stat4Val: '350+',
      imageCaption: 'अपने परिवार के बीच सम्मान के साथ विदा होती एक बेटी।',
    },

    leadership: {
      tag: 'अध्यक्ष की कलम से',
      title: 'हमने यह यात्रा क्यों शुरू की',
      body1:
        'जब मैं अपने गाँव में एक युवक था, मैंने देखा कि परिवार केवल अपनी बेटियों का सम्मानजनक विवाह कराने के लिए जीवन भर के कर्ज़ में डूब जाते थे। मैंने माताओं को इलाज टालते देखा क्योंकि अस्पताल का एक चक्कर महीने भर की भूख के बराबर था। वह बेबसी मुझे कभी नहीं भूली।',
      body2:
        'कन्यादान फ़ाउंडेशन एक सरल विश्वास से जन्मा — कि किसी भी परिवार को सम्मान और जीवित रहने के बीच चुनाव न करना पड़े। आज, अपने दानदाताओं और स्वयंसेवकों के साथ, हम इस विश्वास को हज़ारों विवाहों, बीमित महिलाओं और प्रशिक्षित युवाओं में बदलते हैं।',
      body3:
        'आपके द्वारा दिया गया हर रुपया एक पवित्र धरोहर है। हम अपने ऑडिट, प्रमाणपत्र और परिणाम खुले रूप से प्रकाशित करते हैं। हम आपको इस मार्ग पर हमारे साथ चलने का निमंत्रण देते हैं।',
      sign: 'श्री रमेश कुमार वर्मा',
      role: 'संस्थापक एवं अध्यक्ष, कन्यादान फ़ाउंडेशन',
      values: ['पारदर्शिता', 'करुणा', 'सम्मान', 'जवाबदेही'],
    },

    goals: {
      tag: 'हमारे लक्ष्य और उद्देश्य',
      title: 'स्थायी बदलाव के तीन स्तंभ',
      subtitle:
        'हर कार्यक्रम परिवार को संकट से स्थिरता की ओर ले जाने — और वहाँ बनाए रखने — के लिए बनाया गया है।',
      items: [
        {
          icon: 'ring',
          title: 'कन्यादान हेतु आर्थिक सहायता',
          desc: 'प्रत्यक्ष, पारदर्शी अनुदान जो वंचित परिवारों को अपनी बेटियों का विवाह सम्मान के साथ कराने में मदद करते हैं — आवश्यकताओं के लिए, फिजूलखर्ची के लिए नहीं।',
        },
        {
          icon: 'shield',
          title: 'महिलाओं हेतु सब्सिडी युक्त स्वास्थ्य बीमा',
          desc: 'हम स्वास्थ्य बीमा प्रीमियम में सह-भुगतान करते हैं ताकि माताएँ और बेटियाँ कर्ज़ के डर के बिना इलाज करवा सकें।',
        },
        {
          icon: 'book',
          title: 'कौशल विकास कार्यक्रम',
          desc: 'सिलाई, कंप्यूटर साक्षरता और स्वास्थ्य प्रशिक्षण जो महिलाओं को स्थिर आय और परिवार में आवाज़ देते हैं।',
        },
      ],
      missionTag: 'हमारा मिशन',
      missionText:
        'यह सुनिश्चित करना कि हमारे क्षेत्र की हर वंचित बेटी का विवाह सम्मान के साथ हो, हर महिला स्वास्थ्य बीमा से सुरक्षित हो, और हर परिवार के पास आत्मनिर्भरता का मार्ग हो।',
    },

    team: {
      tag: 'हमारी टीम',
      title: 'इस संकल्प के पीछे के लोग',
      subtitle:
        'बोर्ड सदस्य, पूर्णकालिक कर्मचारी और जमीनी स्वयंसेवक — सब साथ मिलकर काम करते हैं।',
      members: [
        { name: 'श्री रमेश कुमार वर्मा', role: 'संस्थापक एवं अध्यक्ष', bio: 'फ़ाउंडेशन की दृष्टि का मार्गदर्शन करते हैं और हर बड़े कल्याण अभियान की देखरेख करते हैं।' },
        { name: 'श्रीमती अंजली शर्मा', role: 'सचिव एवं कार्यक्रम प्रमुख', bio: 'विवाह-सहायता और बीमा कार्यक्रमों की रूपरेखा और प्रबंधन करती हैं।' },
        { name: 'डॉ. पूजा मिश्रा', role: 'स्वास्थ्य एवं कल्याण निदेशक', bio: 'स्वास्थ्य शिविरों और महिला बीमा सब्सिडी डेस्क का नेतृत्व करती हैं।' },
        { name: 'श्री अरुण प्रसाद', role: 'कोषाध्यक्ष एवं अनुपालन', bio: 'ऑडिट किए गए खाते और वैधानिक पारदर्शिता दस्तावेज़ संभालते हैं।' },
        { name: 'श्रीमती कविता देवी', role: 'क्षेत्रीय समन्वयक', bio: 'ग्रामीण परिवारों को फ़ाउंडेशन की सहायता योजनाओं से जोड़ती हैं।' },
        { name: 'श्री मनोज कुमार', role: 'कौशल प्रशिक्षण प्रमुख', bio: 'जिले भर में सिलाई और कंप्यूटर साक्षरता केंद्र चलाते हैं।' },
        { name: 'सुश्री स्नेहा राज', role: 'संचार एवं जनसंपर्क', bio: 'लाभार्थियों की कहानियाँ और दानदाता रिपोर्ट जनता तक पहुँचाती हैं।' },
        { name: 'श्री दिनेश यादव', role: 'स्वयंसेवक कप्तान', bio: 'फ़ाउंडेशन के 350+ जमीनी स्वयंसेवकों को संगठित और प्रशिक्षित करते हैं।' },
      ],
    },

    supporters: {
      tag: 'हमारे सहयोगी',
      title: 'हमारे साथ खड़े हैं',
      subtitle:
        'कॉर्पोरेट CSR साझेदार और समर्पित व्यक्तिगत दानदाता जो हर उपलब्धि को संभव बनाते हैं।',
      corporateTag: 'कॉर्पोरेट CSR साझेदार',
      wallTag: 'सम्मान दीवार — हमारे नियमित दानदाता',
      donors: [
        { name: 'सुरेश एवं मीना अग्रवाल', note: '2016 से मासिक दानदाता' },
        { name: 'डॉ. राकेश बंसल', note: 'प्रति वर्ष 10 विवाह प्रायोजित' },
        { name: 'प्रिया इंडस्ट्रीज़ परिवार', note: 'स्वास्थ्य शिविर संरक्षक' },
        { name: 'अज्ञात शुभचिंतक', note: 'वार्षिक शिक्षा अनुदान' },
        { name: 'लता एवं विनोद खन्ना', note: 'बीमा सब्सिडी दानदाता' },
        { name: 'गुप्ता चैरिटेबल ट्रस्ट', note: 'कौशल केंद्र प्रायोजक' },
      ],
    },

    gallery: {
      tag: 'मीडिया गैलरी',
      title: 'वे पल जो हमें प्रेरित करते हैं',
      subtitle:
        'विवाह, स्वास्थ्य शिविर और वितरण अभियानों की तस्वीरें और झलकियाँ।',
      filters: {
        all: 'सभी',
        weddings: 'विवाह',
        health: 'स्वास्थ्य शिविर',
        events: 'वितरण अभियान',
      },
      items: [
        { cat: 'weddings', caption: 'सामूहिक विवाह अभियान — 40 बेटियों का सम्मानजनक विवाह' },
        { cat: 'health', caption: 'ग्रामीण महिलाओं के लिए निःशुल्क स्वास्थ्य जाँच शिविर' },
        { cat: 'events', caption: 'कौशल स्नातकों को सिलाई मशीन वितरण' },
        { cat: 'weddings', caption: 'माता-पिता और स्वयंसेवकों का आशीर्वाद पाती दुल्हन' },
        { cat: 'health', caption: 'गाँव के स्वास्थ्य शिविर में बीमा नामांकन डेस्क' },
        { cat: 'events', caption: 'सर्दी में कंबल और राशन वितरण अभियान' },
        { cat: 'weddings', caption: 'दानदाताओं द्वारा आयोजित सामुदायिक विवाह भोज' },
        { cat: 'health', caption: 'नई माताओं के लिए स्वास्थ्य एवं पोषण कार्यशाला' },
        { cat: 'events', caption: 'सिलाई प्रशिक्षण केंद्र में प्रमाणपत्र वितरण' },
      ],
    },

    awards: {
      tag: 'पुरस्कार एवं सम्मान',
      title: 'हमारे प्रभाव के लिए सम्मानित',
      subtitle:
        'समुदाय और हमारे साझेदारों के विश्वास को दर्शाने वाली पहचान।',
      items: [
        { year: '2024', title: 'राज्य सामाजिक प्रभाव पुरस्कार', org: 'बिहार कल्याण परिषद' },
        { year: '2023', title: 'महिला सशक्तिकरण हेतु सर्वश्रेष्ठ एनजीओ', org: 'राष्ट्रीय एनजीओ मंच' },
        { year: '2022', title: 'पारदर्शिता में उत्कृष्टता', org: 'गाइडस्टार इंडिया' },
        { year: '2021', title: 'सामुदायिक सेवा सम्मान', org: 'जिला प्रशासन' },
      ],
    },

    legal: {
      tag: 'कानूनी दस्तावेज़ एवं पारदर्शिता',
      title: 'खुली किताबें, अर्जित विश्वास',
      subtitle:
        'हर दानदाता को यह देखने का अधिकार है कि फ़ाउंडेशन कैसे संचालित होता है। नीचे हमारे वैधानिक दस्तावेज़ देखें या डाउनलोड करें।',
      view: 'देखें',
      download: 'डाउनलोड',
      items: [
        { name: '12A पंजीकरण प्रमाणपत्र', desc: 'आयकर पंजीकरण जो फ़ाउंडेशन की आय को कर-मुक्त करता है।' },
        { name: '80G कर-छूट प्रमाणपत्र', desc: 'दानदाताओं को उनके योगदान पर कर कटौती का दावा करने देता है।' },
        { name: 'धारा 8 निगमन प्रमाणपत्र', desc: 'कन्यादान फ़ाउंडेशन को पंजीकृत गैर-लाभकारी कंपनी के रूप में प्रमाणित करता है।' },
        { name: 'वार्षिक ऑडिट रिपोर्ट 2023–24', desc: 'खातों और निधि उपयोग का स्वतंत्र रूप से ऑडिट किया गया विवरण।' },
        { name: 'वार्षिक ऑडिट रिपोर्ट 2022–23', desc: 'पिछले वर्ष का ऑडिट किया गया वित्तीय विवरण।' },
        { name: 'FCRA अनुपालन विवरण', desc: 'विनियमित योगदान हेतु अनुपालन की घोषणा।' },
      ],
    },

    news: {
      tag: 'समाचार और कार्यक्रम',
      title: 'क्या हो रहा है',
      subtitle: 'आगामी अभियान और क्षेत्र से ताज़ा समाचार।',
      upcomingTag: 'आगामी कार्यक्रम',
      latestTag: 'ताज़ा समाचार',
      register: 'पंजीकरण / और जानें',
      readMore: 'पूरी कहानी पढ़ें',
      events: [
        { date: '28 जून 2026', title: 'सामूहिक विवाह अभियान — पटना', place: 'गांधी मैदान, पटना', desc: 'पूर्ण सामुदायिक सहयोग से 50 बेटियों का विवाह। परिवार पंजीकरण अब खुला है।' },
        { date: '12 जुलाई 2026', title: 'निःशुल्क महिला स्वास्थ्य शिविर', place: 'मुजफ्फरपुर प्रखंड कार्यालय', desc: 'जाँच, स्क्रीनिंग और मौके पर बीमा नामांकन।' },
        { date: '03 अगस्त 2026', title: 'कौशल केंद्र में प्रवेश आरंभ', place: 'कन्यादान प्रशिक्षण हॉल', desc: 'महिलाओं के लिए सिलाई और कंप्यूटर साक्षरता पाठ्यक्रम का नया बैच।' },
      ],
      articles: [
        { date: '02 मई 2026', title: 'फ़ाउंडेशन ने 2,400 समर्थित विवाह पार किए', excerpt: 'दानदाताओं की उदारता और स्वयंसेवकों के प्रयास के रिकॉर्ड वर्ष की बदौलत यह उपलब्धि।' },
        { date: '18 अप्रैल 2026', title: 'नया बीमा गठजोड़ 1,000 और महिलाओं को कवर देगा', excerpt: 'एक नई साझेदारी प्रीमियम कम करती है और महिला स्वास्थ्य-कवर कार्यक्रम का विस्तार करती है।' },
        { date: '27 मार्च 2026', title: 'सफलता की कहानी: प्रशिक्षु से उद्यमी तक', excerpt: 'मिलिए सुनीता से, जिन्होंने सिलाई पाठ्यक्रम को एक सफल घरेलू व्यवसाय में बदला।' },
      ],
    },

    donate: {
      tag: 'आज ही बदलाव लाएं',
      title: 'आपका दान बनता है किसी की नई शुरुआत',
      desc: 'एक योगदान किसी बेटी का विवाह करा सकता है, किसी माँ का स्वास्थ्य बीमा करा सकता है, या किसी युवती को आजीविका हेतु प्रशिक्षित कर सकता है। हर दान धारा 80G के अंतर्गत 100% कर-मुक्त है।',
      amounts: ['₹2,100', '₹5,100', '₹11,000', '₹21,000'],
      amountNote: 'एक राशि चुनें — या जो आपका मन कहे, वह दें।',
      cta: 'सुरक्षित रूप से दान करें',
      ctaSecondary: 'मासिक दानदाता बनें',
      trust1: '80G कर-मुक्त',
      trust2: 'धारा 8 पंजीकृत',
      trust3: 'ऑडिट किए गए खाते',
      trust4: '100% कार्य हेतु',
    },

    contact: {
      tag: 'संपर्क एवं सहायता',
      title: 'हम आपकी सहायता के लिए हैं',
      subtitle: 'सहायता के लिए, या योगदान कैसे करें यह जानने के लिए संपर्क करें।',
      assistTitle: 'सहायता के लिए आवेदन करें',
      assistDesc: 'विवाह सहायता या स्वास्थ्य-बीमा सब्सिडी चाहने वाले परिवारों के लिए।',
      enquiryTitle: 'सामान्य पूछताछ',
      enquiryDesc: 'दान, साझेदारी, मीडिया और स्वयंसेवा के लिए।',
      fields: {
        name: 'पूरा नाम',
        phone: 'फ़ोन नंबर',
        email: 'ईमेल पता',
        district: 'जिला / गाँव',
        type: 'सहायता का प्रकार',
        typeOptions: ['विवाह सहायता', 'स्वास्थ्य बीमा सब्सिडी', 'कौशल प्रशिक्षण'],
        message: 'अपनी स्थिति के बारे में बताएं',
        subject: 'विषय',
        submit: 'आवेदन जमा करें',
        send: 'संदेश भेजें',
        consent: 'मैं पुष्टि करता/करती हूँ कि दी गई जानकारी मेरी जानकारी के अनुसार सत्य है।',
      },
      success: 'धन्यवाद। हमारी टीम 3 कार्य दिवसों के भीतर आपसे संपर्क करेगी।',
      infoTitle: 'पंजीकृत कार्यालय',
      address: 'कन्यादान फ़ाउंडेशन, कल्याण भवन, बोरिंग रोड, पटना, बिहार 800001, भारत',
      hours: 'कार्य समय: सोमवार – शनिवार, सुबह 10:00 – शाम 6:00',
      phoneLabel: 'फ़ोन',
      emailLabel: 'ईमेल',
      mapTitle: 'हमें खोजें',
    },

    footer: {
      about:
        'कन्यादान फ़ाउंडेशन एक पंजीकृत धारा 8 गैर-लाभकारी संस्था है जो सम्मानजनक विवाह, महिला स्वास्थ्य कवर और कौशल विकास के माध्यम से वंचित परिवारों के उत्थान हेतु कार्यरत है।',
      quickLinks: 'त्वरित लिंक',
      programmes: 'कार्यक्रम',
      connect: 'हमसे जुड़ें',
      taxNote: 'सभी दान आयकर अधिनियम की धारा 80G के अंतर्गत कर-मुक्त हैं।',
      rights: '© 2026 कन्यादान फ़ाउंडेशन. सर्वाधिकार सुरक्षित।',
      disclaimer:
        'कन्यादान फ़ाउंडेशन एक पंजीकृत गैर-लाभकारी संस्था है। दान का उपयोग हमारे शासी दस्तावेज़ों के अनुसार केवल धर्मार्थ उद्देश्यों के लिए किया जाता है।',
      madeWith: 'एक बेहतर कल के लिए स्नेह से बनाया गया।',
      newsletter: 'हमारी प्रभाव रिपोर्ट पाएं',
      subscribe: 'सब्सक्राइब करें',
      emailPlaceholder: 'आपका ईमेल पता',
    },

    common: {
      langLabel: 'English',
      themeLight: 'लाइट मोड',
      themeDark: 'डार्क मोड',
    },
  },
};
