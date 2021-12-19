const threePigs = {
  texts: [
    [
      'Olipa kerran kolme pientä porsasta, veljestä, jotka olivat samanpituisia, pyöreitä, vaaleanpunaisia ja samoilla iloisilla hännillä. ' +
      'Nimetkin kuulostivat samanlaiselta. Heidän nimensä olivat: Nif-Nif, Nuf-Nuf и Naf-Naf.',
      'Koko kesän ajan porsaat hyppivät vihreällä ruoholla, nauttivat auringon paistetta ja laiskottelivat lätäköissä. Mutta kohta tuli syksy:',
      '- Meidän pitää miettiä talvea, - sanoi Naf-Naf kerran veljilleen herätessään aikaisin aamulla. - Minä tärisen kylmyydestä. ' +
      'Rakennetaan talo ja vietetään talvi yhdessä saman lämpimän katon alla.'
    ], // 0
    [
      'Mutta hänen veljensä eivät halunneet aloittaa työt.',
      '- Kaikkeen vielä ehtii ja myös talveenkin on aikaa. Me voimme vielä pitää hauskaa, olla ulkona ja pelata, - sanoi Nif-Nif ja teki kuperkeikkan.',
      '- Tarvittaessa rakennan itselleni talon, sanoi Nuf-Nuf ja makasi lätäkköön.',
      '- Minäkin, - sanoi Nif-Nif.',
      '- Ihan miten haluatte. Rakennan talon itselleni, - sanoi Naf-Naf.',
      'Nif-Nif ja Nuf-Nuf päättivät ettei kiirettä ole ja pelasivat vaan omia porsaiden peleja; hyppivät ja tekivät kuperkeikoja koko ajan.',
      '- Tänään vielä pelataan, - he ajattelivat, - ja huomenna aloitamme työt.',
      'Mutta seuraavanakin päivänä he ajattelivat samaa.',
      'Päivästä toiseen sää muuttui kylmemmäksi ja kylmemmäksi. Ja vasta kun tien varrella iso lätäkkö alkoi aamuisin' +
      'peitellä ohueen jääkuoren laiskat veljekset pääsivät alkaa työt.'
    ], // 1
    [
      'Nif-Nif päätti, että on helpompi ja nopeampi on tehdä talon olkeista. Ketään kysymättä hän teki näin. ' +
      'Illaksi hänen talonsa oli jo valmis. Nif-Nif laittoi katolle viimeisen oljen ja ihan tyytyväisenä ' +
      'omasta talosta alkoi laulamaan:',
      '' +
      'Voisit käydä koko maailman ympäri',
      'Maailman ympäri, maailman ympäri,',
      'Parempaa taloa kuin tämä,',
      'Et löydä, et löydä!',
      '',
      'Laulamalla tätä laulua, Hän lähti Nuf-Nufin luo. Lähellä Nuf-Nuf rakensi myös oman talon. ' +
      'Hän oli yrittänyt lopettaa tylsän ja epämielenkiintoisen teon mahdollisimman nopeasti. Ensin kuten hänen veljensä ' +
      'hän halusi rakentaa oman talon oljista. Mutta sitten hän päätti, että semmosessa talossa olisi liian kylmää talvella. ' +
      'Talo olisi kestävämpää ja lämpimämpää, jos sen rakenteisiin oksista. Näin hän päättikin tehdä.. ' +
      'Hän löi paaluja maahan, kietoi ne oksilla, kaatoi kuivia lehtiä katolle, ja illalla talo oli valmis. ' +
      'Nuf-Nuf käveli ylpeänä talon ympäri useamman kerran ja alkoi laulamaan:',
      '',
      'Minulla on hyvä talo,',
      'Se on uusi, se on kestävä,',
      'Minä en pelkää sadetta, eikä ukkosta,',
      'Ei sadetta, eikä ukkosta, ei sadetta, eikä ukkosta!',
      '',
      'Hän ei ehtinyt laulamaan loppuun, kun Nif-Nif juoksisi pensaan takaa.',
      '',
      '- No niin, sinunkin talosi on nyt valmis! - sanoi Nif-Nif veljelle. - Minähän sanoin, että me saadaan hommat nopeasti valmiiksi!' +
      'Nyt me ollaan vapaat, voidaan tehdä vapaasti mitä haluamme ja mitä keksimme!',
      '- Mennään Naf-Nafin luokse katsomaan minkälaisen talon hän oli rakentanut! – sanoi Nuf-Nuf. - Emme ole nähneet häntä pitkään!',
      '- Mennään katsomaan! - Nif-Nif myönsi.',
      'Naf-Naf oli jo rakentamassa talonsa jo useampia päiviä. Hän toi kivet, sekoitti savea ja nyt kaiken rauhassa' +
      ' rakensi itsellesi pysyvän ja vahvan talon, jossa hän voisi piilottaa tuulesta, sadesta ja pakkasesta. Hän teki ' +
      'taloon painavan oven tammista lukkineen, niin ettei susi lähimmästä metsästä voisi päästää hänen taloon.',
      '',
      'Nif-Nif ja Nuf-Nuf kerkesivät nähdä rakentamisprosessin.',
      '',
      '- Mitä olet rakentamassa? - yllättyneenä  Nif-Nif ja Nuf-Nuf huusivat samaan aikaan. - Mitä tämä on? Onko se talo ' +
      'possulle vai linna?'
    ], // 2
    [
      '- Talon possulle on oltava linna! - rauhallisesti vastaisi heille Naf-Naf ja jatkoi työt.',
      '- Vai aiotko käydä sotaa jonkun kanssa? -Nif-Nif  murahti iloisesti ja iski silmää Nuf-Nufin suuntaan. ',
      '',
      'Ja molemmat veljet olivat niin ilahtuneita, että heidän röhkäisy kuului kauas nurmikon yli. ' +
      'Mutta Naf-Naf ikään kuin mitään ei olisi tapahtunut, jatkoi talonsa kiviseinän rakentamista, laulamalla hiljaisesti:' +
      '',
      'Mikään maailman petoeläin,',
      'Ei pääse tästä ovesta sisään',
      'ovela, pelottava, pelottava petoeläin,',
      'Ei pääse tästä ovesta sisään!',
      '',
      'Olen kaikista viisain,',
      'Kaikista viisain, kaikista viisain!',
      'Rakennan talon kivistä,',
      'Kivistä, kivistä!',
      '',
      '- Mistä petoeläimestä hän puhuu? - kysyi Nif-Nif Nuf-Nufilta.',
      '- Mistä petoelämästä puhut? - kysyi Nuf-Nuf Naf-Nafilta.',
      '- Puhun susista! - vastasi Naf-Naf ja laittoi seinälle vielä yhden kiven.',
      '- Katsokaa, hän pelkää susia! - sanoi Nif-Nif.',
      '- Minkälaiset sudet täällä voi olla? - kysyi Nif-Nif.',
      '- Täällä ei ole yhtäkään susia! Hän on vain pelkuri! - lisäsi Nuf-Nuf.',
      '',
      'Ja molemmat possut alkoivat laulamaan ja tanssimaan:,',
      '',
      'Emme pelkää harmaata susia,',
      'Harmaata susia, harmaata susia!',
      'Missä olet tyhmä susi,',
      'Vanha susi, pelottava susi?',
      '',
      'He halusivat kiusata Naf-Nafia, mutta hän ei reagoinut tähän.',
      '',
      '- Mennään Nuf-Nuf - sanoi sitten Nif-Nif. - Meillä ei ole mitään tekemistä täällä!'
    ], // 3
    [
      'Ja kaksi rohkeaa veljeä lähti kävelemään. Matkalla he lauloivat ja tanssivat, ja kun he tulivat metsään, he pitivät niin paljon melua, ' +
      'että herättivät susin, joka nukkui männyn alla.' +
      '\n',
      '- Mikä melu täällä on? - vihainen ja nälkäinen susi murahti tyytymättömästi ja lähti siihen paikkaan josta kuulisi' +
      'kahden pienen tyhmän possun kirkumista ja murinaa.',
      '- Minkälaiset sudet täällä voisi olla! - sillä ajalla sanoi Nif-Nif, joka oli nähnyt susia vain kuvissa.',
      '- Mehän otamme häntä nenästä kiinni! - lisäsi Nuf-Nuf, joka myöskään ei ollun nähnyt elävää susia.',
      '- Kaadetaan hänet alas ja sidotaan, ja potkitaan jaloilla, näin! – ilkutteli Nif-Nif.',
      '\n',
      'Ja yhtäkkiä he näkivät todellisen elävän suden! Hän seisoi suuren puun takana ja näytti niin pelottavalta, ' +
      'hänellä oli niin vihaiset silmät ja isot hampaat, että kylmä hiki ilmestyi pitkin Nif-Nifin ja Nuf-Nufin selkiä ' +
      'ja heidän häntänsä alkoi tärisee. Porsaat eivät pystyneet edes liikkumaan pelosta.',
      'Susi valmistautui hyppimään, napsautti hampaitaan, räpäytti oikealla silmällä, mutta possuille yhtäkkiä tuli järki ja huutaen' +
      ' he pakenivat pois metsästä. Heidän ei ole koskaan tarvinnut juosta näin nopeasti! Vilkkuvat kantapäät ja kohotettuja ' +
      'pölypilviä näkyi vaan ja jokainen porsas yritti rynnätä omaan taloonsa piiloon. '
    ], // 04
    [
      'Nif-Nif ensimmäisenä pääsi omaan olkeiseen taloon ja viimeisessä hetkessä kerkesi sulkea oven ennen kuin susi pääsisi sisään.',
      '\n',
      '- Avaa oven nyt! - huusi susi. - Muuten rikkoon sen!',
      '- En, - vastasi Nif-Nif, - en avaa!',
      'Oven ulkopuolelta kuului kauhean pedon hengitys.',
      '- Avaa oven nyt! - susi huusi. - Muuten puhallan sen niin, että koko talosi hajoaa!',
      '\n',
      'Mutta peloissa oleva Nif-Nif ei voinut enää vastata.',
      '\n',
      'Silloin susi alkoi puhaltaa: "U-u-u-u-u-u!" Oljet lensivät talon katolta, talon seinät tärisivät. ' +
      'Susi hengitti syvään vielä kerran ja puhalsi toisen kerran: "U-u-u-u-u-u!". Kun susi oli puhaltanut kolmannen kertaan - ' +
      'talo romahti ja sen palat lensi kaikkiin suuntiin, ikään kuin hurrikaanissa. Susi oli napsahtanut hampaitaan  ' +
      'pienen possun kantapäiden edessä, mutta Nif-Nif taitavasti välttyi pakoon ja lähti juoksemaan. Minuutin päästä hän oli jo Nuf-Nufin oven edessä.',
      '\n',
      'Just silloin kun veljet kerkesivät sulkea ovet lukkoon, susi sanoi:',
      '- Nyt syön teidät molemmat!',
      '\n',
      'Nif-Nif ja Nuf-Nuf peloissa katsoivat toistensa, mutta susi oli liian väsynyt ja siksi hän oli päättänyt toimia ovelasti.',
      '\n',
      '- Minä vaihdoin mielen! - sanoi hän niin kovalla äänellä, että häntä kuulisi koko talossa. – Minä en aio syödä noita laihoja possuja!' +
      ' Lähden kotiin.' +
      '- Kuulitko? - kysyi Nif-Nif Nuf-Nufilta. - Hän sanoi, ettei aikoo syödä meidät! Me olemme laihat!',
      '- Tämä on oikein hyvä! - sanoi Nuf-Nuf ja saman tien lopetti tärisemään. '
    ], // 05
    [
      'Veljekset alkoivat pitää hauskaa, ikään kuin mitään ei olisi tapahtunut:',
      '\n',
      'Emme pelkää harmaata susia,',
      'Harmaata susia, harmaata susia!',
      'Missä olet tyhmä susi,',
      'Vanha susi, pelottava susi?',
      '\n',
      'Todellisuudessahan susi ei halunnut lähteä pois, vaan meni sivuun ja hiljeni. ' +
      'Hän pidätteli tuskin pystyi hillitsemään itseään ollakseen purskahtamatta nauruun.',
      '- Miten ovelasti minä onnistuin harhauttaa pieniä tyhmiä possuja!',
      '\n',
      'Kun possut olivat täysin rauhoittuneita, susi otti lampaan turkin ja varovasti hiipi talon viereen. ' +
      'Oven edessä hän laittoi turkin päälle ja hiljaisesti koputti oveen.',
      'Nif-Nif ja Nuf-Nuf säikähtivät.',
      '\n',
      '- Kuka on siellä? - he kysyivät, ja taas heidän häntänsä alkoi tärisee.',
      '- Olen pieni lammas! - susi vastasi kapealla ja vieraalla äänellä. ',
      '- Päästäkää minut yöpymään, minä olen kadonnut laumasta ja muutenkin niin väsynyt!',
      '- Lampaan voi päästää sisään! - sanoi Nuf-Nuf. - Lammas ei ole susi! '
    ], // 06
    [
      'Mutta kun possut avasi pikkasen ovea, huomasivat, ettei se ollut lammas, vaan vihainen susi. ',
      'Veljekset sulki oven ja pitivät kiinni omalla painolla, ettei pelottava peto pääsisi sisään.',
      '\n',
      'Susi muuttui vihaiseksi. Hän ei onnistunut huijaamaan possuja! Hän heitti pois lampaan turkin ja kiljui:',
      '- Hei, odota! Tästä ovesta ei jää kohta mitään!',
      '\n',
      'Ja hän aloitti puhaltaa. Talo vilkaisi pikkasen sivulle. Susi puhalsi toisen kerran, kolmannen ja nelosen kerran. ' +
      'Katosta lähti lehdet, seinät tärisi, mutta talo vielä pysyi paikalla. Ja vasta silloin kun susi puhalsi viidennen kerran, ' +
      'talo alkoi heilua ja loppujen lopuksi räjähti paloiksi. Vain ovi jäi pystyyn jonkin aikaa. ' +
      'Peloissa olevat possut juoksivat pakoon. Pelosta heillä tärisi jalat, ja oli tosi vaikeaa juosta. ' +
      'Veljet juoksi Naf-Nafin taloon.',
      '\n',
      'Susi juoksi niin lujaa, että melkein sai Nif-Nifia kiinni jalasta, mutta sillä aikaa ' +
      'hän ehti nopeuttaa tahtia.',
      '\n',
      'Susikin nopeutti tahtia. Hän oli varma siitä, että täällä kertaa possut eivät juoksee hänestä karkuun. Mutta ei täälläkään kertaa ollut onnistunut. ' +
      'Possut juoksivat nopeasti ison omenapuun ohi, koskematta sitä. Mutta susi ei ehtinyt kääntyä ja törmäsi puuhun, jonka omenat putosivat susiin. ' +
      'Yksi kova omena osui otsaan just silmien väliin, jonka seurauksena siihen tuli iso mustelma. ' +
      '\n',
      '\n',
      'Nif-Nif ja Nuf-Nuf elämän ja kuoleman välillä melkein astuivat Naf-Nafin taloon. Veli päästi heidät sisään ja nopeasti ' +
      'sulki oven lukkoon. Pienet possut olivat niin peloissa, etteivät pystyneet sanoa mitään. Sanattomasti he hyppäsivät ' +
      'sängyn alle ja pysyivät melkein hengittämättä. '
    ], // 07
    [
      'Naf-Naf heti sai selvää, että heidän perään juoksee susi. Mutta hänen ei tarvinnut pelätä mitään omassa kivitalossa .' +
      ' Hän nopeasti sulki oven lukkoon, istui tuoliin ja alkoi laulamaan:',
      '\n',
      'Mikään maailman eläin,',
      'Ei pääsisi tämän oven ohi',
      'Viekas, pelottava, pelottava eläin,',
      'Ei pääsisi tämän oven ohi!',
      '\n',
      'Silloin joku koputti oveen.',
      '- Avaa nyt heti! - kuului susin ääni.',
      '- Emme halua! Emme avaa! - kovalla äänellä vastasi Naf-Naf. ',
      '- No niin! Nyt minä syön teidät! ',
      '\n',
      '- Yritä vaan! - vastasi oven takaa Naf-Naf istuen penkillä. Hän tiesi, että hänelle ja hänen veljille ' +
      'ei tarvitse olla peloissaan mistään hyvässä kivitalossa. Silloin susi oli ottanut mahdollisimman paljon ilmaa keuhkoihin ja puhaltanut niin kovaa kuin vaan pystynyt! ' +
      'Mutta kuinka hän ei puhaltaisi, ei kumpikaan kivi heilahtanut, mitä teki sudesta tosi vihainen. ' +
      'Talo pysyi paikallaan kuin linna. Sitten susi alkoi iskeä oveen useampaa kertaa. Mutta ovi pysyi tiukasti kiinni. ' +
      'Vihasta susi alkoi raapia ovea ja järsiä kiviä, joista talo oli rakennettu.' +
      'Mutta se vaan murtui itsellesi kynnet ja hajotti hampaat. Nälkäiselle ja vihaiselle sudella ei ollut muuta vaihtoehtoa kuin lähteä pois. ' +
      '',
      'Pään nostaessa ja yhtäkkiä huomasi ison ja kapean piipun katolla.',
      ' \n',
      '- Jaahas! Tästä piipusta minä pääsen taloon! Ilahtui susi. . ',
      '\n',
      'Hän varovasti astui kattoon ja alkoi kuunnella. Talossa oli hiljaista. No niin, tänään minä syönkin pikku possuja! ' +
      '- Susi oli miettinyt ja nuoli huulensa ja kiipesi piippuun. '
    ], // 08
    [
      'Mutta, kun hän alkoi laskea piippua pitkin, possut kuulivat hörinää. ' +
      'Ja kun padan kannen päälle alkoi pudota nokea, viisas Naf-Naf heti hoksasi mitä tapahtuu. ' +
      'Hän nopeasti revähti kattilan luo, jossa oli kiehuva vesi ja veti pois kannen.',
      '\n',
      '- Tervetuloa! - sanoi Naf-Naf ja iski silmällä veljekselle.',
      '\n',
      'Possuille ei tarvinnut odottaa pitkään. Musta, kuin nuohooja susi kaatui suoraan kattilaan. ' +
      'Silmät valuivat ulos, sen turkkinsa nousi kaikkiin suuntiin. Villi huudon kanssa susi lensi ulos kiehuvasta vedestä' +
      'takaisin katolle, laski sillä maahan, pyöri pään yli neljää kertaa, ja pakeni takaisin metsään.',
      'Ja kolme veljestä, kolme pikku possua seurasivat häntä katseillaan ja iloitsivat ' +
      'että he onnistuivat antaa hyvän opetuksen vihaiselle pedolle.',
      '\n',
      'Mikään maailman eläin,',
      'Ei pääsisi tämän oven ohi',
      'Viekas, pelottava, pelottava eläin,',
      'Ei pääsisi tämän oven ohi!',
      'Voisit käydä koko maailman ympäri',
      'Maailman ympäri, maailman ympäri,',
      'Parempaa taloa kuin tämä,',
      'Et löydä, et löydä!',
      'Susi metsästä,',
      'Ei koskaan, ei koskaan',
      'Ei palaa meille tänne,',
      'Meille tänne, meille tänne!',
      '\n',
      'Tästä ajasta veljet aloittivat asua yhdessä yhden katon alla. '
    ], // 09
    [
      'Mutta, kun hän alkoi laskea piipua pitkin, possut eivät kuullu hörinää.',
      'Possuille ei tarvinnut odottaa pitkään. Musta, kuin nuohooja susi kaatui suoraan kotiin.',
      'Hänen silmät olivat vihaiset, sen turkkinsa nousi kaikkiin suuntiin. Villi huudon kanssa susi hyppäisi possujen suuntaan.',
      '\n',
      'Ja kolme veliä, kolme pientä possua oli mennyt huoneen kulmaan. Heillä ei ollut vaihtoehtoa mihin voisi lähteä. Susi söi heidät. '
    ], // 10
    [
      'Possut rakensi talonsa jo useampia päiviä. He toivat kivet, sekoittivat savea ja nyt kaiken rauhassa' +
      ' rakensivat itsellesi pysyvän ja vahvan talon, jossa he voisivat piilottaa tuulesta, sadesta ja pakkasesta. He tekivät ' +
      'taloon painavan oven tammista lukkineen, niin ettei susi lähimmästä metsästä voisi päästää heidän taloon.'
    ], // 11
    [
      'Mutta kun possut avasi pikkasen ovea, huomasivat, ettei se ollut lammas, vaan vihainen susi. ',
      'Veljekset sulki oven ja pitivät kiinni omalla painolla, ettei peloittava peto pääsisi sisään,',
      'mutta susi oli paljon vahvempi ja hänellä oli kovaa nälkää.',
      '\n',
      'Susi pääsi taloon ja söi possut. Tyytyväisenä hän lähti nukkumaan takaisin metsään. '
    ], // 12
    [
      'Nif-Nif ja Nuf-Nuf oli yrittäneet lopettaa tylsän ja epämielenkiintoisen teon mahdollisimman nopeasti. Ensin' +
      'he halusivat rakentaa oman talon oljista. Mutta sitten he päättivät, että semmosessa talossa olisi liian kylmää talvella. ' +
      'Talo olisi kestävämpää ja lämpimämpää, jos sen rakentaisiin oksista. Näin he päättivätkin tehdä. ' +
      'He löivät paaluja maahan, kietoivät ne oksilla, katoivät kuivia lehtiä katolle, ja illalla talo oli valmis. ' +
      'Nif-Nif ja Nuf-Nuf kävelivät ylpeänä talon ympäri useamman kerran ja alkoivät laulamaan:',
      '\n',
      'Meillä on hyvä talo,',
      'Se on uusi, se on kestävä,',
      'Minä en pelkää sadetta, eikä ukkosta,',
      'Ei sadetta, eikä ukkosta, ei sadetta, eikä ukkosta!',
      '\n',
      '- No niin, meidän talo on nyt valmis! - sanoi Nif-Nif veljelle. - Minähän sanoin, että me saadaan hommat nopeasti valmiiksi!' +
      'Nyt me ollaan vapaat, voidaan tehdä vapaasti mitä haluamme ja mitä keksimme!',
      '- Mennään Naf-Nafin luokse katsomaan minkälaisen talon hän oli rakentanut! – sanoi Nuf-Nuf. - Emme ole nähneet häntä pitkään!',
      '- Mennään katsomaan! - Nif-nif myönsi.',
      'Naf-Naf oli jo rakentamassa talonsa jo useampia päiviä. Hän toi kivet, sekoitti savea ja nyt kaiken rauhassa' +
      ' rakensi itsellesi pysyvän ja vahvan talon, jossa hän voisi piilottaa tuulesta, sadesta ja pakkasesta. Hän teki ' +
      'taloon painavan oven tammista lukkineen, niin ettei susi lähimmästä metsästä voisi päästää hänen taloon.',
      '',
      'Nif-Nif ja Nuf-Nuf kerkesivät nähdä rakentamisprosessin.',
      '',
      '- Mitä olet rakentamassa? - yllättyneenä  Nif-Nif ja Nuf-Nuf huusivat samaan aikaan. - Mitä tämä on? Onko se talo ' +
      'possulle vai linna?'
    ], // 13
    [
      'Just silloin kun veljet sulki oven lukkoon, susi sanoi:',
      '\n',
      '- Nyt syön teidät molemmat!',
      '\n',
      'Nif-Nif ja Nuf-Nuf peloissa katsoivat toistensa, mutta susi oli liian väsynyt ja siksi hän oli päättänyt toimia ovelasti.',
      '\n',
      '- Minä vaihdoin mielen! - sanoi hän niin kovalla äänellä, että häntä kuulisi koko talossa. – Minä en aio syödä noita laihoja possuja!' +
      ' Lähden kotiin.' +
      '- Kuulitko? - kysyi Nif-Nif Nuf-Nufilta. - Hän sanoi, ettei aikoo syödä meidät! Me olemme laihat!',
      '- Tämä on oikein hyvä! - sanoi Nuf-Nuf ja saman tien lopetti tärisemään. '
    ], // 14
    [
      'Ja kaksi rohkeaa veljeä lähti kävelemään.  ' +
      'Matkalla he lauloivat ja tanssivat. Iltaan asti he leikkivät talonsa vieressä olevan metsän reunassa.'
    ] // 15
  ],
  actions: [
    ['Rakennetaan sama talo kaikille', 'Jatketaa pelaamista'], // 0
    ['Rakennetaan yhdessä', 'Rakennetaan jokainen itsellenne'], // 1
    ['Lähdetään Naf-Nafille'], // 2
    ['Mennään kävelemään metsään!', 'Mennään pelamaan talon viereen!'], // 3
    ['Juostaan pakoon!'], // 4
    ['Huh, ehti'], // 5
    ['Päästään lammaksen sisään!', 'Se on susi!'], // 6
    ['Juostaan taloon!'], // 7
    ['Laitetaan kannen pois', 'Mitään ei tapahtuu'], // 8
    [], // 9
    [] // 10
  ],
  currentStep: 0,
  story: {
    isThreeTogether: false,
    isTwoTogether: false,
    isGoingToForest: false,
    isTheyBelievedToSheep: false,
    isWolfBrokeTheDoor: false,
    isWolfPassedViaChimney: false
  },
  init: function () {
    return {
      text: this.texts[0],
      actions: this.actions[0]
    }
  },
  doAction: function (action) {
    switch (this.currentStep++) {
      case 0:
        this.story.isThreeTogether = action === 0
        if (this.story.isThreeTogether) {
          this.currentStep += 2
          return {
            text: [...this.texts[11], ...this.texts[3]],
            actions: this.actions[3]
          }
        } else {
          return {
            text: this.texts[1],
            actions: this.actions[1]
          }
        }
      case 1:
        this.story.isTwoTogether = action === 0
        if (this.story.isTwoTogether) {
          return {
            text: this.texts[13],
            actions: this.actions[2]
          }
        } else {
          return {
            text: this.texts[2],
            actions: this.actions[2]
          }
        }
      case 2:
        return {
          text: this.texts[3],
          actions: this.actions[3]
        }
      case 3:
        this.story.isGoingToForest = action === 0
        if (this.story.isGoingToForest) {
          return {
            text: this.texts[4],
            actions: this.actions[4]
          }
        } else {
          return {
            text: this.texts[15],
            actions: this.actions[9]
          }
        }
      case 4:
        if (this.story.isThreeTogether) {
          this.currentStep += 3
          return {
            text: this.texts[8],
            actions: this.actions[8]
          }
        }
        if (this.story.isTwoTogether) {
          return {
            text: this.texts[14],
            actions: this.actions[5]
          }
        }
        return {
          text: this.texts[5],
          actions: this.actions[5]
        }
      case 5:
        return {
          text: this.texts[6],
          actions: this.actions[6]
        }
      case 6:
        this.story.isTheyBelievedToSheep = action === 0
        if (this.story.isTheyBelievedToSheep) {
          return {
            text: this.texts[12],
            actions: this.actions[9]
          }
        } else {
          return {
            text: this.texts[7],
            actions: this.actions[7]
          }
        }
      case 7:
        return {
          text: this.texts[8],
          actions: this.actions[8]
        }
      case 8:
        this.story.isWolfPassedViaChimney = action === 0
        if (this.story.isWolfPassedViaChimney) {
          return {
            text: this.texts[9],
            actions: this.actions[9]
          }
        } else {
          return {
            text: this.texts[10],
            actions: this.actions[9]
          }
        }
    }
  }
}

export default threePigs
