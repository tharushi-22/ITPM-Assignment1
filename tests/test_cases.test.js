import { test, expect } from "@playwright/test";

const testCases = [

  // Positive Functional Test Cases
  { id: "Pos_Fun_0001",
    input: "suBha dhavasak!",
    expected: "සුභ දවසක්!" },
  {
    id: "Pos_Fun_0002",
    input: "mama adha library ekata yanavaa pothak ganna.",
    expected: "මම අද library එකට යනවා පොතක් ගන්න.",
  },
  {
    id: "Pos_Fun_0003",
    input: "oyaa heta panthi ennee naedhdha?",
    expected: "ඔයා හෙට පන්ති එන්නේ නැද්ද?",
  },
  {
    id: "Pos_Fun_0004",
    input: "mata 7ta kalin vaeda ivara vunoth, mama pansal yanavaa.",
    expected: "මට 7ට කලින් වැඩ ඉවර වුනොත්, මම පන්සල් යනවා.",
  },
  {
    id: "Pos_Fun_0005",
    input: "api adha muhudhu veraLata yanavaa saha paapandhu kriidaa karanavaa.",
    expected: "අපි අද මුහුදු වෙරළට යනවා සහ පාපන්දු ක්‍රීඩා කරනවා.",
  },
  {
    id: "Pos_Fun_0006",
    input: "vathura boothalaya ganna.",
    expected: "වතුර බෝතලය ගන්න.",
  },
  {
    id: "Pos_Fun_0007",
    input: "mama adha assignment eka karanavaa.",
    expected: "මම අද assignment එක කරනවා.",
  },
  {
    id: "Pos_Fun_0008",
    input: "mama raeeta kannee naehae.",
    expected: "මම රෑට කන්නේ නැහැ.",
  },
  {
    id: "Pos_Fun_0009",
    input: "uBata puLuvan velaavakata mata call ekak ganin.",
    expected: "උඹට පුළුවන් වෙලාවකට මට call එකක් ගනින්.",
  },
  {
    id: "Pos_Fun_0010",
    input: "mata thaama badagini naee.",
    expected: "මට තාම බඩගිනි නෑ.",
  },
  {
    id: "Pos_Fun_0011",
    input: "api canteen ekata gihillaa kamu.",
    expected: "අපි canteen එකට ගිහිල්ලා කමු.",
  },
  {
    id: "Pos_Fun_0012",
    input: "iiyee bus eka hemin hemin giyee.",
    expected: "ඊයේ bus එක හෙමින් හෙමින් ගියේ.",
  },
  {
    id: "Pos_Fun_0013",
    input: "api Java project eka LinkedIn dhaamu.",
    expected: "අපි Java project එක LinkedIn දාමු.",
  },
  {
    id: "Pos_Fun_0014",
    input: "oyaa Postman eken API tika check karee naedhdha?",
    expected: "ඔයා Postman එකෙන් API ටික check කරේ නැද්ද?",
  },
  {
    id: "Pos_Fun_0015",
    input: "oyaa gedhara giyaama, mata SMS ekak dhaalaa thiyanna.",
    expected: "ඔයා ගෙදර ගියාම, මට SMS එකක් දාලා තියන්න.",
  },
  {
    id: "Pos_Fun_0016",
    input: "adha lecture eka 8.00 AM needha thiyennee?",
    expected: "අද lecture එක 8.00 AM නේද තියෙන්නේ?",
  },
  {
    id: "Pos_Fun_0017",
    input:  "mema varShayee upaaDhi praDhaanoothsavaya 23/03/2026 vana saDHudhaa dhina peravaru 9.00 sita dhahaval 12.00 dhakvaa vishva vidhYaalayiiya praDhaana shaalaaveedhii paevaethviimata siyaluma katayuthu suudhaanam kara aetha. (ebaevin, peravaru 8.30 vanavita siyaluma upaaDhiDhaariin praDhaana godanaegilla vetha paemiNa sitiimata kaaruNika vanna).",
    expected:  "මෙම වර්ෂයේ උපාධි ප්‍රධානෝත්සවය 23/03/2026 වන සඳුදා දින පෙරවරු 9.00 සිට දහවල් 12.00 දක්වා විශ්ව විද්‍යාලයීය ප්‍රධාන ශාලාවේදී පැවැත්වීමට සියලුම කටයුතු සූදානම් කර ඇත. (එබැවින්, පෙරවරු 8.30 වනවිට සියලුම උපාධිධාරීන් ප්‍රධාන ගොඩනැගිල්ල වෙත පැමිණ සිටීමට කාරුණික වන්න).",
  },
  {
    id: "Pos_Fun_0018",
    input:  "saamaanYa pudhgalayeku dhinakata vathura 2000ml - 3000ml (liitar 2-3) pramaaNayak paanaya kaLa yuthuya.\nEsee siidhukiriimen shariiraya niroogiiva saha prabooDhamathva pavathvaa gatha haeki bava pariikShaNa thuLin heLi vii aetha.\nnamuth varthamaanaya vanavita jalaya paanaya kiriima adu viima nisaa vakugadu roogaya shrii lQQkaava thuLa sulaba vii aetha.",
    expected:  "සාමාන්‍ය පුද්ගලයෙකු දිනකට වතුර 2000ml - 3000ml (ලීටර් 2-3) ප්‍රමාණයක් පානය කළ යුතුය.\nඑසේ සීදුකිරීමෙන් ශරීරය නිරෝගීව සහ ප්‍රබෝධමත්ව පවත්වා ගත හැකි බව පරීක්ෂණ තුළින් හෙළි වී ඇත.\nනමුත් වර්තමානය වනවිට ජලය පානය කිරීම අඩු වීම නිසා වකුගඩු රෝගය ශ්‍රී ලංකාව තුළ සුලබ වී ඇත.",
  },
  {
    id: "Pos_Fun_0019",
    input:  "mata adha      party ekata enna puLuvan        venne 5.00 PM ta kalin vaeda        ivara unoth        vitharayi. ee nisaa maQQ        7ta kalin aavee              naethnam oyaagee       gedharata, maQQ enakan inna   epaa. oyaa          yanna. maQQ enakan           hitiyoth    oyaatath parakku    veyi.",
    expected:  "මට අද      party එකට එන්න පුළුවන්        වෙන්නෙ 5.00 PM ට කලින් වැඩ        ඉවර උනොත්        විතරයි. ඒ නිසා මං        7ට කලින් ආවේ              නැත්නම් ඔයාගේ       ගෙදරට, මං එනකන් ඉන්න   එපා. ඔයා          යන්න. මං එනකන්           හිටියොත්    ඔයාටත් පරක්කු    වෙයි.",
  },
  {
    id: "Pos_Fun_0020",
    input:  "kasuni, anee oyaata puLuvandha mata lecture 3 eka kiyalaa dhenna Zoom meeting ekak dhaalaa? mata ee lecture eka tikak theerum ganna amaaruyi. oyaa free velaavak mata kiyannakoo. maQQ ethakota Zoom link eka WhatsApp ekata dhaalaa thiyannam.",
    expected:  "කසුනි, අනේ ඔයාට පුළුවන්ද මට lecture 3 එක කියලා දෙන්න Zoom meeting එකක් දාලා? මට ඒ lecture එක ටිකක් තේරුම් ගන්න අමාරුයි. ඔයා free වෙලාවක් මට කියන්නකෝ. මං එතකොට Zoom link එක WhatsApp එකට දාලා තියන්නම්.",
  },
  {
    id: "Pos_Fun_0021",
    input:  "ammatasiri, mageth bara hoDHatama vaedi velaa machan kalin thibbata vadaa. kalin thibbee 80kg yi. dhaen 95kg k velaa. siraavatama mehema giyoth uBatayi matayi looke thiyena okkoma leda tika haedheyi. dhennagema bara vaedi ekee udheeta udheeta ravumak dhekak dhuvamudha?",
    expected:  "අම්මටසිරි, මගෙත් බර හොඳටම වැඩි වෙලා මචන් කලින් තිබ්බට වඩා. කලින් තිබ්බේ 80kg යි. දැන් 95kg ක් වෙලා. සිරාවටම මෙහෙම ගියොත් උඹටයි මටයි ලෝකෙ තියෙන ඔක්කොම ලෙඩ ටික හැදෙයි. දෙන්නගෙම බර වැඩි එකේ උදේට උදේට රවුමක් දෙකක් දුවමුද?",
  },
  {
    id: "Pos_Fun_0022",
    input: "plz, mata paeena dhenna.",
    expected: "ප්ලz, මට පෑන දෙන්න.",
  },
  {
    id: "Pos_Fun_0023",
    input: "heta mama Matara yanavaa.",
    expected: "හෙට මම Matara යනවා.",
  },
  {
    id: "Pos_Fun_0024",
    input: "oyaa kohoma kivvath mata eeka karanna baehae.",
    expected: "ඔයා කොහොම කිව්වත් මට ඒක කරන්න බැහැ.",
  },
  {
    id: "Pos_Fun_0025",
    input: "adoo!! mee thiyenne.",
    expected: "අඩෝ!! මේ තියෙන්නෙ.",
  },
  {
    id: "Pos_Fun_0026",
    input: "100m Dhaavana tharaGaya adha dhina nopaevaethvee.",
    expected: "100m ධාවන තරඟය අද දින නොපැවැත්වේ.",
  },
  {
    id: "Pos_Fun_0027",
    input: "parippu 1kg - Rs. 300/=",
    expected: "පරිප්පු 1kg - Rs. 300/=",
  },
  {
    id: "Pos_Fun_0028",
    input:  "Interview ekata apply karanakota CV ekayi, NIC ekayi Email ekee dhaalaa yavanna.",
    expected:  "Interview එකට apply කරනකොට CV එකයි, NIC එකයි Email එකේ දාලා යවන්න.",
  },
  {
    id: "Pos_Fun_0029",
    input:  "maanasika rooga adha lookayee ithaa sulaba maathRUkaavak bavata path vii aetha. looka sAUKYA saQQviDhaanayata anuva, dhenaladha saeema varShayakama pudhgalayan 8 dhenekugen ek pudhgalayeku monayamhoo aakaarayaka maanasika roogayakata godhuru vii aetha. dhala vashayen, vaedihiti janagahanayen 5%ka pamaNa pramaaNayak vishaadhaya roogayen peleyi. emanisaa, shaariirika sAUKYA menma, maanasika sAUKYA pilibaDHavadha apa miita vadaa saeLakilimath viya yuthuya.",
    expected:  "මානසික රෝග අද ලෝකයේ ඉතා සුලබ මාතෘකාවක් බවට පත් වී ඇත. ලෝක සෞඛ්‍ය සංවිධානයට අනුව, දෙනලද සෑම වර්ෂයකම පුද්ගලයන් 8 දෙනෙකුගෙන් එක් පුද්ගලයෙකු මොනයම්හෝ ආකාරයක මානසික රෝගයකට ගොදුරු වී ඇත. දල වශයෙන්, වැඩිහිටි ජනගහනයෙන් 5%ක පමණ ප්‍රමාණයක් විශාදය රෝගයෙන් පෙලෙයි. එමනිසා, ශාරීරික සෞඛ්‍ය මෙන්ම, මානසික සෞඛ්‍ය පිලිබඳවද අප මීට වඩා සැළකිලිමත් විය යුතුය.",
  },
  {
    id: "Pos_Fun_0030",
    input:  "parigaNaka aakRUthiyee praDhaana kotas lesa, CPU, Memory, Input devices saha Output devices haDHUnaagatha haekiya. CPU eka parigaNakayee moLaya lesa haeDHinvena athara emagin parigaNakayee upadhes kriyaathmaka karanu laebee. Memory ekee data/programs thaavakaalikava hoo sThirava gabadaa karayi. RAM eka thaavakaalikava data gabadaa karayi. Keyboard, mouse vaeni input devices parishiilakayanta dhaththa aadhaanaya kiriimata ida salasana athara, output devices magin parishiilakayanta avashYa thorathuru prathidhaanaya karayi.",
    expected:  "පරිගණක ආකෘතියේ ප්‍රධාන කොටස් ලෙස, CPU, Memory, Input devices සහ Output devices හඳුනාගත හැකිය. CPU එක පරිගණකයේ මොළය ලෙස හැඳින්වෙන අතර එමගින් පරිගණකයේ උපදෙස් ක්‍රියාත්මක කරනු ලැබේ. Memory එකේ data/programs තාවකාලිකව හෝ ස්ථිරව ගබඩා කරයි. RAM එක තාවකාලිකව data ගබඩා කරයි. Keyboard, mouse වැනි input devices පරිශීලකයන්ට දත්ත ආදානය කිරීමට ඉඩ සලසන අතර, output devices මගින් පරිශීලකයන්ට අවශ්‍ය තොරතුරු ප්‍රතිදානය කරයි.",
  },

  // Negative Functional Test Cases
  {
    id: "Neg_Fun_0001",
    input: "mamaiiyeekoLaBagiyeenaee.",
    expected: "මමඊයේකොළඹගියේනෑ.",
  },
  {
    id: "Neg_Fun_0002",
    input: "mama AliExpress ekee t-shirt ekak baeluvaa. eeka $16k venavaa.",
    expected: "මම AliExpress එකේ t-shirt එකක් බැලුවා. ඒක $16ක් වෙනවා.",
  },
  {
    id: "Neg_Fun_0003",
    input:  "hari, mama ee file eka hoyannam. please give me just one minute. maQQ mee vaedee ivara karalaa eeka hoyanna patan gannam. mee vaedee urgent ekak. maQQ meeka lunch ekata kalin Bhaara dhenna oonee.",
    expected:  "හරි, මම ඒ file එක හොයන්නම්. please give me just one minute. මං මේ වැඩේ ඉවර කරලා ඒක හොයන්න පටන් ගන්නම්. මේ වැඩේ urgent එකක්. මං මේක lunch එකට කලින් භාර දෙන්න ඕනේ.",
  },
  {
    id: "Neg_Fun_0004",
    input: "heta mama Malabe enne naee.",
    expected: "හෙට මම Malabe එන්නෙ නෑ.",
  },
  {
    id: "Neg_Fun_0005",
    input: "mamadhaenpodivaedakainnee.eenisaa,mamaoyaatapassecallekakgannam.",
    expected: "මමදැන්පොඩිවැඩකඉන්නේ. ඒනිසා,මමඔයාටපස්සෙcallඑකක්ගන්නම්.",
  },
  {
    id: "Neg_Fun_0006",
    input: "baeebaeemataeekakaranna.",
    expected: "බෑබෑමටඒකකරන්න.",
  },
  {
    id: "Neg_Fun_0007",
    input: "api children's park yamu.",
    expected: "අපි children's park යමු.",
  },
  {
    id: "Neg_Fun_0008",
    input: 'adha mama "Perera and Sons" restaurant eken kanavaa.',
    expected: 'අද මම "Perera and Sons" restaurant එකෙන් කනවා.',
  },
  {
    id: "Neg_Fun_0009",
    input: "anee Keells ekata yamudha?",
    expected: "අනේ Keells එකට යමුද?",
  },
  {
    id: "Neg_Fun_0010",
    input: "Ms.Bimali oyaata pdf eka evaavii.",
    expected: "Ms.Bimali ඔයාට pdf එක එවාවී.",
  },
  {
    id: "Neg_Fun_0011",
    input: "Api meeka kohomahari karamu. Let's do this!",
    expected: "අපි මේක කොහොමහරි කරමු. Let's do this!",
  },
  {
    id: "Neg_Fun_0012",
    input:  "Dear Mr.Perera, mata adha enna venne naee meeting ekata. I'm truly sorry.",
    expected:  "Dear Mr.Perera, මට අද එන්න වෙන්නෙ නෑ meeting එකට. I'm truly sorry.",
  },

  // Positive UI Test Cases 
  {
    id: "Pos_UI_0001",
    input: "karuNaakaralaa mata pitu 80 pothak dhenna puLuvandha?",
    expected: "කරුණාකරලා මට පිටු 80 පොතක් දෙන්න පුළුවන්ද?",
  },
  {
    id: "Pos_UI_0002",
    input: "hari, mama heta gedhara ennam.",
    expected: "හරි, මම හෙට ගෙදර එන්නම්.",
  },

  // Negative UI Test Cases
  {
    id: "Neg_UI_0001",
    input:  "2004dhesaembar26vanadhinasumaathraadhuupathasalasidhuvuuvishaalaBhuukampanayakheethuvenavaasanaavanthalesashriilQQkaavasunaamianathuratagodhuruviya.memaanathurenpudhgalayan35,000kataaDhikasQQKYaavakageedhiviahimiviya.memasunaamianathura,shriilQQkaaithihaasayeesidhuvuudharuNuthamasvaaBhaavikavYAsanayaklesasaDHAhanvee.",
    expected:  "2004දෙසැම්බර්26වනදිනසුමාත්‍රාදූපතසලසිදුවූවිශාලභූකම්පනයක්හේතුවෙන්අවාසනාවන්තලෙසශ්‍රී ලංකාවසුනාමිඅනතුරටගොදුරුවිය.මෙමඅනතුරෙන්පුද්ගලයන්35,000කටඅධිකසංඛ්‍යාවකගේදිවිඅහිමිවිය.",
  },
];

test.describe("Singlish to Sinhala conversion", () => {
  for (const tc of testCases) {
    test(tc.id, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/");

      const input = page.locator(
        'textarea[placeholder="Input Your Singlish Text Here."]',
      );
      const output = page.locator("div.w-full.h-80.p-3");

      // Clear input first
      await input.fill("");

      // Fill input
      await input.fill(tc.input.replace(/\s+/g, " ").trim());

      // Wait for output to update
      await expect
        .poll(
          async () => {
            const text = await output.evaluate((el) => el.innerText);
            if (!text) return null;
            return text.trim().replace(/\s+/g, " ");
          },
          { timeout: 30000 },
        )
        .toBe(tc.expected.replace(/\s+/g, " "));

      const result = (await output.evaluate((el) => el.innerText)).trim();
      console.log(`Input: ${tc.input}`);
      console.log(`Expected: ${tc.expected}`);
      console.log(`Output: ${result}`);
    });
  }
});
