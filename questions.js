// Scholastic Bowl practice questions.
// Each entry: { category, text, answer }
// `text` is read word-by-word during a round; `answer` is the accepted answer line.

const QUESTIONS = [
  {
    category: "Science",
    text: `Hypertrophy of this structure's ligamenta flava can lead to stenosis. Parts of this structure have pedicles that attach to transverse and superior articular processes. VCFS and burst fractures in this structure cause damage to tissue within it responsible for motor function. In Scheuermann's Kyphosis, parts of this structure become wedged together in its thoracic or lumbar region. This structure takes an S or C shape in scoliosis. Herniated discs lay between 33 vertically stacked bones that make up this structure that ends at the coccyx. Name this long series of bones that runs down the back.`,
    answer: `Spine`
  },
  {
    category: "Fine Arts",
    text: `In an opera in this language, Mallika sings a "Flower Duet" with a Westernized depiction of Lakshmi. In addition to Lakmé, another opera in this language sees two people fall in love with a Ceylonese princess. That opera features the duet "Au fond du temple saint," sung by Zurga and Nadir. That opera centers around Brahman priests and is by a composer who wrote of a character foreseeing her death drawing tarot cards in another opera. Another opera in this language sees a "Habanera" sung by the title character, who is later stabbed by Don Jose. Name this language used for operas such as Carmen by Georges Bizet.`,
    answer: `French`
  },
  {
    category: "Literature",
    text: `In a novel by this author, a woman returning from a carnival has a strong urge to pee after seeing a woman on a stump. One of this author's characters mistakes a bag of bones hanging from a ceiling for a sack of gold, and is born at the same time Robert Smith jumps off a hospital roof. In a novel by this author, a character is told her love is "too thick" after she confesses to killing her daughter in a woodshed as a carriage approaches. Milkman Dead is a character in a biblically-titled novel by this creator of 124 Bluestone Road, the residence of the escaped slave Sethe. Name this author of Song of Solomon and Beloved.`,
    answer: `Toni Morrison`
  },
  {
    category: "Social Studies",
    text: `A study by Carl Lipo argued that statues in this location were "walked" by being moved side-to-side with rope. Settlers of this location came from Hiva and were first ruled by kings called ariki. Residents of this location would compete in a swimming contest for eggs to be named the Birdman and lead worship to the god Makemake. Deforestation caused by the Polynesian rat led to societal collapse amongst this island's Rapa Nui people. Statues built on this island sit atop platforms called ahu and may represent elongated versions of a chieftain's head. Name this Pacific Island whose residents built massive stone heads called moai.`,
    answer: `Easter Island`
  },
  {
    category: "Social Studies",
    text: `A Nazi-era law banning certain people from providing information on this practice was repealed by the German Bundestag in June 2022. Since September 2021 many Mexican states have legalized this practice in accordance with a decision by the Supreme Court of Justice. Refugees from Ukraine, where this practice is legal, have encountered trouble with Poland's near-total ban on this practice. Justin Trudeau vowed that this practice would remain available for Americans crossing the border after Politico leaked a ruling in Dobbs v. Jackson. Name this practice that was protected in the U.S. by Roe v. Wade.`,
    answer: `Abortion`
  },
  {
    category: "Science",
    text: `Blue-white clouds made of ice crystals that appear in this region are known as noctilucent clouds. Unbound sodium atoms in this region cause airglow. This region is difficult to study as it is too high to access by weather balloon but also inaccessible by satellite. This region has relatively high concentrations of metals due to lingering material from vaporized meteors. The stratopause marks the bottom of this region, which is the coldest in the atmosphere and exists between where airplanes and spaceships travel. Name this atmospheric layer that lies above the stratosphere but below the thermosphere.`,
    answer: `Mesosphere`
  },
  {
    category: "Literature",
    text: `A character in this story laughs when he notices a pin-up of a woman kicking off her shoe. While visiting a German landlady, a character in this story turns pale after seeing the figure of a man often compared to Bartleby the Scrivener. A character in this story is named from a calendar with a name similar to "poop." An office party in this story celebrates a character's decision to visit the tailor Petrovich. A general only referred to as a "Very Important Personage" is haunted by a clerk in this story who dies from the cold after being robbed. Name this story about Akaky Akakievich losing the title piece of clothing, by Nikolai Gogol.`,
    answer: `"The Overcoat"`
  },
  {
    category: "Social Studies",
    text: `This man spoke against "socialized medicine" in a campaign dubbed "Operation Coffee Cup." Before a debate, this man promised not to "exploit" the "youth and inexperience" of his fifty-six-year-old opponent. This man described a group of people as having "slipped the surly bonds of Earth to touch the face of God" in one speech, and endorsed Barry Goldwater in his "A Time For Choosing" speech. In a reelection ad, this man claimed it was "Morning in America," and called upon one world leader to "open this gate" in Berlin. Name this President during the Challenger disaster, who asked Mikhail Gorbachev to "tear down this wall!"`,
    answer: `Ronald Reagan`
  },
  {
    category: "Fine Arts",
    text: `An angel at the top of one of this artist's works was removed by Isamu Noguchi at the request of Clare Boothe Luce. A seashell full of bullet holes appears next to a yellow dress in a painting by this artist which depicts a skyscraper emerging out of a volcano. This artist, who depicted the death of American socialite Dorothy Hale, depicted their legs in a bathtub in their painting What the Water Gave Me. This artist painted a self-portrait where a bus accident is symbolized in the title Broken Column, as well as another self-portrait with a thorn necklace and a hummingbird. Name this unibrowed Mexican artist who was the wife of Diego Rivera.`,
    answer: `Frida Kahlo`
  },
  {
    category: "Literature",
    text: `A creature named for this phenomenon fights the underwater panther in the underworld from Algonquin myth. The waters of the world were liberated after a god of this phenomenon destroyed the ninety-nine fortresses of Vritra. That creature named for this phenomenon typically appears at the top of totem poles of Pacific Northwest peoples. A god of this phenomenon failed to lift a cat since it was a world serpent earlier caught while fishing with Hymir. A gadfly bite caused dwarves to shorten the handle for a god of this phenomenon's hammer, Mjolnir. Name this phenomenon that accompanies Thor's lightning.`,
    answer: `Thunder`
  },
  {
    category: "Social Studies",
    text: `One of these things designed by Swedish inventor John Ericsson was derided as his "folly," despite having its rotating turret widely copied. Another of these things was built at Norfolk using a stripped-down hull of a captured gunboat and pioneered a modern resurgence of the naval ram. The first-ever clash between these things was at the Battle of Hampton Roads, which demonstrated their prowess in 1862. Early examples of these vessels include the CSS Virginia and the USS Monitor. Name these steam-powered ships that were armored by a namesake metal, first used during the Civil War.`,
    answer: `Ironclads`
  },
  {
    category: "Math",
    text: `A theorem describing lengths in these shapes is remembered with the mnemonic "a man and his dad put a bomb in the sink." Concurrent cevians in one of these shapes are related in Ceva's Theorem. The center of the nine-point circle lies on the Euler line of these shapes. It's not an ellipse, but these shapes are degenerate when their namesake inequality reaches equality. The altitudes of these shapes are concurrent at their orthocenters. The hypotenuse of right ones of these shapes can be computed with the Pythagorean Theorem. Name these three-sided polygons.`,
    answer: `Triangles`
  },
  {
    category: "Fine Arts",
    text: `A sarabande by this composer was used as the theme for the film Barry Lyndon. The notes "long D G A G" are sung in an Act II closing piece by this composer. An air and bourrée in F major and a D Major section called "Alla Hornpipe" appear in a composition by this composer played on a barge on the Thames. A libretto by Charles Jennens for a work by this composer features the line "And He shall reign forever and ever" in a massive vocal work celebrating Jesus. Zadok the Priest is a coronation anthem created by this composer. Name this composer of Water Music who included the "Hallelujah" chorus in his oratorio Messiah.`,
    answer: `George Frideric Handel`
  },
  {
    category: "Literature",
    text: `In a story by this author, a colonel, widow, merchant, and politician plan a trip to Florida after dropping a vase. In another story by this author, Georgiana dies after Aylmer removes the title feature from her face. A sermon on secret sin reveals why Mr. Hooper wears the title garment in a story by this author of "Dr. Heidegger's Experiment" and "The Birth-Mark." An Election Day sermon in a novel by this author ends with a reverend dying in the hands of a mother who wears an "A" on her breast. Name this author of "The Minister's Black Veil" who wrote of Hester Prynne's affair with Arthur Dimmesdale in The Scarlet Letter.`,
    answer: `Nathaniel Hawthorne`
  },
  {
    category: "Pop Culture",
    text: `Mike Huckabee created an "Appreciation Day" for a company selling this food in response to boycotts over its donation to the WinShape Foundation. A console's design was inspired by the "Bargain Bucket" and has a "Chamber" for this food. An FDA warning was issued after a TikTok video showed a person cooking this food in NyQuil went viral. Hattie B's sells a "hot" version of this food in Nashville. A company selling this food's Twitter follows members of the band "Spice Girls" and 6 people named "Herb" to reference its eleven herbs and spices. Colonel Sanders is the mascot of a company selling what meat fried at KFC?`,
    answer: `Chicken`
  },
  {
    category: "Social Studies",
    text: `George Akerlof and Janet Yellen's gift-exchange game models the effects of these values. The Shapiro-Stiglitz model calculates how unemployment and this value are affected by shirking. David Card and Alan Krueger studied the effect of policy changes in these values using natural experiments with fast-food restaurants. John Maynard Keynes disagreed with Say's Law which equated this value to the value of goods produced. Only in a monopsony does instituting a floor for these values not induce unemployment due to layoffs and reduced hours. Name these payments for labor, the federal "minimum" for which is $7.25.`,
    answer: `Wages`
  },
  {
    category: "Literature",
    text: `In one poem by this author, the speaker proclaims that despite having "never believed in any promised heaven in the sky" he believes "in a heaven I'll never enter." In another poem, this author of "A Dog Has Died" described a time when "there were thirst and hunger, and you were the fruit," and called one poem's subject "deserted like the wharves at dawn." A poem by this author repeats the refrain "in you everything sank!" and begins by declaring that "the memory of you emerges from the night around me." Name this Chilean poet of Twenty Love Poems and a Song of Despair.`,
    answer: `Pablo Neruda`
  },
  {
    category: "Science",
    text: `Units of this compound are joined by ester linkages in a biodegradable plastic used in 3-D printing. Bacteria in the human mouth convert sugar into this enamel-dissolving compound, causing tooth decay. In the liver, this compound is recycled back into glucose by the Cori cycle. Buildup of this compound may cause a burning sensation after strenuous exercise, but does not cause delayed-onset muscle soreness. Either this compound or ethanol is produced in fermentation, such as by the genus Lactobacillus. Name this acid found in sour dairy products like yogurt.`,
    answer: `Lactic acid`
  },
  {
    category: "Social Studies",
    text: `False Bay is near this country's southernmost point, Cape Agulhas. This country's plateaus include the Great Escarpment, which is surrounded by the Drakensberg Mountains. In this country, the "Big Hole" is a 705-foot-deep former diamond mine. Outside of India, this country's city of Durban has the highest Indian population of any city. The Kalahari desert sits north of this country's Orange River, which forms its border with Namibia. This country nearly surrounds Eswatini and completely surrounds Lesotho. Bloemfontein and Pretoria are among the three capitals of what country that contains Cape Town and Johannesburg?`,
    answer: `South Africa`
  },
  {
    category: "Social Studies",
    text: `This cause defeated the black nobility that supported the independence of Pius IX. A supporter of this cause wrote an open letter to Charles Albert and was a member of the Carbonari. In the Plombières Agreement, Napoleon III agreed to support this cause at the behest of Count Cavour. At the battle of Calatafimi, supporters of this cause called Redshirts defeated the Kingdom of the Two Sicilies. This cause was accomplished when Victor Emmanuel II ascended the throne of a new country with the support of Giuseppe Garibaldi. Name this nationalist cause to create a new kingdom led from Rome.`,
    answer: `Italian Unification`
  },
  {
    category: "Social Studies",
    text: `A location in this state simply called "The Lake" is near the Bethesda Fountain and the Ramble. Lake Tear of the Clouds is on the slopes of this state's highest point, Mount Marcy. This is the larger of two states with sightings of a giant serpent named Champ in a lake drained by the Richelieu River. The "Miracle on Ice" at the 1980 Olympics was held near Lake Placid in this state. The largest lake within this state, Oneida Lake, is nicknamed the "thumb" of its Finger Lakes region. This state, the only one to border Lake Ontario, shares Lake Champlain with its eastern neighbor, Vermont. Name this state where the Hudson River connects to the Erie Canal.`,
    answer: `New York State`
  },
  {
    category: "Social Studies",
    text: `This empire's Periwig Era saw its strong currency deter trade, coining the name for an economic "disease." The term rangaku referred to books sold by this empire's traders on the island of Dejima near Nagasaki. This empire's navy relied on the fluyt and included ships called Sea Beggars. This empire was home to the VOC, the most valuable company of all time. The first stock markets emerged in this empire whose economy experienced a bubble from tulip trading. Land reclamation projects begun in this empire created polders and were drained by now-iconic windmills. Name this empire that was centered in Holland.`,
    answer: `Dutch Empire`
  },
  {
    category: "Literature",
    text: `One character in this play states that his wife is a "sensitive-plant" after acknowledging she clings onto a coat he owns with twelve bullet holes in it. That character in this play also complains about the lack of nighttime and his missing toothbrush. Another character in this play is summoned by the sound of a faulty bell, and lacks eyelids. While stroking a bronze ornament in a Second Empire-style room, one character in this play declares "Hell is — other people!" Name this play about Estelle, Garcin, and Inez, written by Jean-Paul Sartre.`,
    answer: `No Exit`
  },
  {
    category: "Science",
    text: `The duty cycle is equal to pulse width over one form of this quantity. Resistance times capacitance gives a constant named after this quantity. Crystal oscillators measure this quantity and frequently use piezoelectric materials such as quartz. Faraday's law states that the electromotive force is equal to the derivative of electric flux with respect to this quantity. Electric current is defined as the derivative of charge with respect to this quantity. The change in position over the change in this quantity is equal to velocity. Name this quantity frequently measured in seconds.`,
    answer: `Time`
  },
  {
    category: "Pop Culture",
    text: `A TikTok clip features this actress in a blue dress saying "Smile!" before she takes a photo with a bedazzled camera. This actress played a character who picks up a bottle of medicine instead of morphine during a game of go. A hologram played by this actress asks "You look lonely, I can fix that" to Ryan Gosling's synth in Blade Runner: 2049. A caretaker portrayed by this actress vomits every time she lies and is stabbed with a retractable knife by Ransom. This actress played Marilyn Monroe in the controversial film Blonde and played Paloma in the Bond film No Time to Die. Name this Cuban actress who starred in Knives Out.`,
    answer: `Ana de Armas`
  },
  {
    category: "Fine Arts",
    text: `An ascending theme in this work is first stated in B minor, where it ends with the notes "A G E C E long G." A flute plays "B, G-sharp, F-sharp, E" and ascends to B in one piece of this work, while another featuring the triangle depicts "Anitra's Dance." An E major piece in 6/8 time from this work depicts the sun rising over a desert and is called "Morning Mood." Increasingly fast and loud cellos, bassoons, and double basses represent trolls chasing the protagonist of this work in its piece "In the Hall of the Mountain King." Name this collection of incidental music to a Henrik Ibsen play, composed by Edvard Grieg.`,
    answer: `Peer Gynt`
  },
  {
    category: "Social Studies",
    text: `A precursor to this city was founded by Ascanius after his father fought Turnus and married Lavinia, and was named Alba Longa. A layered shield depicting this city's history was owned by a hero who was advised by his father Anchises in the underworld. This city's location was decided in an augury contest over who could count more auspicious birds. A she-wolf suckled the sons of Rhea Silvia who would found this city. After a hero leaves to begin this city's legacy, queen Dido commits suicide in Virgil's Aeneid. Remus was killed by a twin who names what city whose civilization worshiped gods like Mars and Jupiter?`,
    answer: `Rome`
  },
  {
    category: "Social Studies",
    text: `This tribe had a White Chief that ruled in peacetime and a Red Chief that ruled in wartime. After fighting the Red Sticks in the Battle of Horseshoe Bend, a disabled member of this tribe devised a syllabary with 86 symbols. The Phoenix newspaper catered to this tribe, whose language was made legible by Sequoyah. This tribe's chief John Ross did not approve of signing the Treaty of New Echota, which occurred after this tribe's sovereignty was defended by Samuel Worcester in an 1832 Supreme Court case. Name this largest of the "Five Civilized" tribes who were forced to abandon their lands in Georgia during the Trail of Tears.`,
    answer: `Cherokee`
  },
  {
    category: "Literature",
    text: `One poem describes how this figure "broods with warm breast and with ah! bright wings." The narrator asks this figure to "divorce me, untie or break that knot again" in a poem addressed to this figure. Gerard Manley Hopkins wrote a poem about the grandeur of this figure. One sonnet begins by asking this figure to "batter my heart." In one work, this figure defeats a character who holds a meeting in Pandemonium. That work, which was written to "justify the ways of this figure to man," is John Milton's Paradise Lost. Name this figure who banished Satan from Heaven.`,
    answer: `God`
  },
  {
    category: "Science",
    text: `Alexander Bacot discovered how one bacterium colonized the midgut of these organisms, thus encouraging transmission via regurgitation. Pulicosis is a condition that results from the bites of these organisms which also transmit murine typhus. These wingless organisms use their pleural arches and resilin hinges to leap over 200 times their body length. An allergic dermatitis named for these ectoparasites is the leading cause of dog allergic reactions. A condition transmitted by these insects inflames lymph nodes, forming buboes. Rats colonized by what blood-sucking insects transmit bubonic plague?`,
    answer: `Fleas`
  },
  {
    category: "Fine Arts",
    text: `The left side of a painting by this artist depicts eyes and a nose above the mouth of Hell, out of which several monsters are escaping. A work by this artist shows a giant woman carrying a skillet through a burning village. One of this man's paintings originally titled The Blue Cloak depicts peasants doing things like sitting on hot coals and tying a bell to a cat. This artist of Mad Meg painted a work that shows a frozen water wheel and a man carrying a fox, as well as ice skaters on the right and the title people walking through the forest surrounded by dogs. Name this Dutch artist of Netherlandish Proverbs and Hunters in the Snow.`,
    answer: `Pieter Bruegel the Elder`
  },
  {
    category: "Fine Arts",
    text: `Rangoli carpets made of these objects are popular during the Onam festival. Earth, humanity, and heaven are unified by these objects in ikebana. Victorian society developed a "language" of these objects to express unspoken feelings such as virtue and chastity. Crescent, cascading, and nosegay are three ways to arrange these objects, which are bound by doilies. These objects name wheel-like windows that appear in Gothic churches. Boutonnieres and corsages containing these objects are worn at weddings, where brides traditionally carry a bouquet of them. Name these objects that include daffodils and carnations.`,
    answer: `Flowers`
  },
  {
    category: "Science",
    text: `Apophis is the only one of these objects to attain a Torino rating above level 2. One of these objects experienced a 32-minute decrease in its orbital period in September 2022. Arrokoth is an example of the "contact binary" type of these objects. When these objects orbit a Lagrange point, they are called trojans. The DART mission sent a probe to impact one of these objects. "Near-Earth" examples of these objects are monitored due to a possible need for deflection. A region between Mars and Jupiter is named after what small, rocky objects that make up a namesake "belt"?`,
    answer: `Asteroids`
  },
  {
    category: "Social Studies",
    text: `A "Hail Mary" formation was used against this leader in battles like 73 Easting. This leader ordered the Dujail Massacre after an attempted assassination in 1982. This leader's Osirak nuclear reactor was destroyed in Operation Opera; that attack may have encouraged this leader to fire 42 Scud missiles toward Israel during another conflict. One of this leader's top generals was nicknamed "Chemical Ali," whose Al-Anfal campaign massacred thousands of Kurds. During Operation Red Dawn, this leader was found in a "spider hole" near the town of Tikrit after being accused of possessing WMDs. Name this Ba'athist dictator of Iraq.`,
    answer: `Saddam Hussein`
  },
  {
    category: "Literature",
    text: `In this novel, a father tries to sell his artificial leg so he can feed his kids. During a soccer game in this novel, a couple is stoned to death in chest-deep holes for committing adultery. In "a way to be good again," a character in this novel adopts Sohrab before returning to San Francisco. A man shouts "For you, a thousand times over!" while performing this novel's title activity with shards of glass and a spool. This novel's protagonist witnesses Hassan being raped by Assef while completing the title action after a tournament. Name this novel about Amir's return to Taliban-ruled Afghanistan, by Khaled Hosseini.`,
    answer: `The Kite Runner`
  },
  {
    category: "Science",
    text: `This philosopher imagined walking inside a thinking machine as if it were a mill to argue that physical mechanisms cannot explain human consciousness. This non-Democritus thinker proposed shapeless units of reality which each have different qualities, with the soul consisting of a dominant one of those units. In his Théodicée, this philosopher attempted to solve the problem of evil by stating that we live in the "best of all possible worlds." This author of Monadology devised the modern notation for mathematical derivatives. Name this German polymath who invented calculus independently of Isaac Newton.`,
    answer: `Gottfried Wilhelm Leibniz`
  },
  {
    category: "Social Studies",
    text: `This leader denounced the Five Black Categories, which included "rich peasants" and "rightists." This leader began political campaigns with photoshoots of himself crossing a river. This leader temporarily encouraged criticism in the Hundred Flowers Movement, and caused a famine attempting to eradicate sparrows in the Four Pests campaign. This leader promoted steel-making communes in the Great Leap Forward. This leader oversaw the Cultural Revolution and published many of his writings in The Little Red Book. Name this former Chairman of the People's Republic of China.`,
    answer: `Mao Zedong`
  },
  {
    category: "Social Studies",
    text: `One of these people was spared to tell of an event recognized by all-night study of the Torah on Shvi'i Shel Pesach. Yochanan ben Zakai argued that God took away one of these people's free will by "hardening [his] heart." One of these people dreams of seven lean cows eating seven fat cows, which is interpreted as a sign to stock grain by Joseph. A baby set adrift down a river to escape an order from one of these people to kill all newborn children. One of these people's soldiers were drowned in the Red Sea after it was earlier parted by Moses. Exodus describes the Jews escaping the rule of what leaders of ancient Egypt?`,
    answer: `Pharaohs`
  },
  {
    category: "Science",
    text: `Calcium hydroxide and this element's sulfate are combined in a Bordeaux mixture to kill crop-threatening fungi. In Benedict's test, this element's sulfate is reduced to an oxide in the presence of aldehydes. This is the first transition metal heavier than chromium to violate the aufbau principle, since it has only one 4s electron. In aqueous solutions, this element's two-plus cations appear bright blue. A substance known as verdigris forms when this element is oxidized to a green color. This metal is alloyed with tin to make bronze. Name this metal whose atomic symbol is Cu.`,
    answer: `Copper`
  },
  {
    category: "Literature",
    text: `This character is compared to a "terrier who doesn't want to bring a ball" as he hides an animal in his pocket. This character's death is foreshadowed by Carlson's killing of a smelly "ancient dog." This character crushes a man's hand in his "huge paws" after he is attacked for supposedly laughing at a glove filled with vaseline. This character panics while feeling the hair of a woman who reminds him of his Aunt Clara after a dead puppy is discovered in a barn. This character imagines living "off the fatta' the lan'" and tending rabbits after killing Curley's wife. Name this mentally disabled laborer who is shot by George at the end of John Steinbeck's Of Mice and Men.`,
    answer: `Lennie Small`
  },
  {
    category: "Science",
    text: `One of these bodies named Pan is considered a "shepherd" because it helps form the Encke Gap. The Herschel crater on one of these bodies gives it an appearance resembling the Death Star. One of these objects is the most reflective body in the solar system and has water vapor plumes emanating from its "tiger stripe" regions. The largest of these bodies contains lakes of liquid hydrocarbons and was studied by the Huygens probe. There are 83 confirmed examples of these bodies including Mimas, Enceladus, and Titan. Name these natural satellites of the ringed planet.`,
    answer: `Moons of Saturn`
  },
  {
    category: "Fine Arts",
    text: `This composer took over when a conductor snorted snuff in the middle of the premiere of a piece by him that calls for four offstage brass ensembles. The Rákóczi March opens this composer's "dramatic legend" of The Damnation of Faust. This composer profiled over 60 instruments in his Treatise on Instrumentation and Orchestration. An onstage English horn and offstage oboe depict a conversation between two shepherds in a symphony by this composer in which the clarinet carries the idée fixe theme. The final second-to-last movement of that symphony by this composer is called the "March to the Scaffold" and precedes a witches' sabbath. Name this French Romantic composer of the Symphonie fantastique.`,
    answer: `Hector Berlioz`
  },
  {
    category: "Religion",
    text: `The name of this place is thought to come from the Akkadian word for a plain or steppe. Mormons believe this location to be placed in Jackson County, Missouri. Two of the four rivers flowing from this location are the Pishon and Gihon. The Land of Nod is found to the east of this place, which is guarded by a flaming sword and cherubim. The principle of "original sin" is derived from an event in this location that caused its residents to flee in shame due to their nakedness. A serpent tricks a resident of this place into eating the forbidden fruit.`,
    answer: `Garden of Eden`
  },
  {
    category: "Social Studies",
    text: `One ruler of this empire commissioned al-Sahili to construct an audience chamber for its capital. The territory acquired after conquering Kaniaga from the Sosso Empire was one of this empire's "twelve doors." Mud bricks were used to construct this empire's Sankore University. This empire was founded after Sumanguru was defeated by an alliance led by Sundiata at the Battle of Kirina. Griots maintained the oral stories of this empire, including one in which its ruler crashes the economy of Cairo through gold depreciation during a lavish hajj. Name this West African empire.`,
    answer: `Mali Empire`
  },
  {
    category: "Literature",
    text: `In one work by this poet, a bird laments that "humankind cannot bear very much reality." That work by this poet describes the rose garden of a decaying manor after discussing "time present and time past." A poem by this author of "Burnt Norton" describes "those pearls that were his eyes" in reference to the "Phoenician Sailor" card drawn by Madame Sosostris. This author ended a section of a poem titled "What the Thunder Said" with the phrase "Shantih shantih shantih." The first section of a work by this poet, "The Burial of the Dead," opens by stating "April is the cruelest month."`,
    answer: `T. S. Eliot`
  },
  {
    category: "Video Games",
    text: `A server in this video game displays journalism from oppressive countries in the Uncensored Library. Kristoffer Zetterstrand created most of the paintings in this game, including one of a pixelated fighter touching a giant hand; the only painting not by him shows three black skulls atop a brown-colored "T," depicting how to summon an in-game boss. Absurd luck with blaze rod drops in this game was used to accuse the streamer Dream of cheating a speedrun. A mix-up in the height and width coordinates of a pig gave rise to an iconic enemy from this game known as the Creeper.`,
    answer: `Minecraft`
  },
  {
    category: "Social Studies",
    text: `This man hosted events in which immigrants would walk through a giant "melting pot" as part of his Sociological Department. Walter Reuther's unionbusters beat protestors of this man's River Rouge Plant at the Battle of the Overpass. This American was praised in Mein Kampf for publishing anti-semitic articles through his newspaper The Dearborn Independent. A five-dollar work day and mass usage of the assembly line were pioneered by this man for the creation of a product he joked was available in any color "so long as it was black."`,
    answer: `Henry Ford`
  },
  {
    category: "Literature",
    text: `This character is given a note reading "Marshall Aid. Thirty-Two Million Francs" and told to bankrupt a member of SMERSH. This character meets Gala Brand while investigating Hugo Drax's construction of a weapon from a stolen space shuttle. John Gardner wrote novels about this character, who orders a Vesper martini in his first appearance. In a novel, this character is tasked with bankrupting Le Chiffre at baccarat. Many novels featuring this character were written at the Goldeneye estate in Jamaica.`,
    answer: `James Bond`
  },
  {
    category: "Science",
    text: `A deep-sea type of these animals has a pelican-like mouth, a hinged jaw, and a bioluminescent tail, and is called their "gulper" variety. The European species of these animals' reproductive cycle was unknown for ages, leading Aristotle to conclude that they spontaneously generate; they actually breed in the Sargasso Sea. These fish of the order Anguilliformes have a "conger" variety, as well as a large yellow freckled variety called the "moray." This common name is shared by a South American fish that stuns its prey by discharging up to 600 volts of electricity.`,
    answer: `Eels`
  },
  {
    category: "Music",
    text: `Baby Dodds pioneered "ride patterns" on this instrument of two eighth notes and a quarter note. The bebop trick of speeding up music by staying "on top of the beat" with this instrument was developed by "Big Sid" Catlett and perfected by Max Roach. The Jazz Messengers accompanied a performer of this instrument named Art Blakey. A solo on this instrument played by Gene Krupa opens Benny Goodman's Sing Sing Sing. Buddy Rich did not use matched grip while playing these instruments that can play sustained notes called rolls.`,
    answer: `Drums`
  },
  {
    category: "Science",
    text: `This quantity is increased when a system has a lower zero-point energy due to having heavier isotopes. This quantity over R has a negative slope when the natural log of K and 1 over T are plotted against each other. The rate constant is given as e raised to negative this quantity over RT in the Arrhenius equation. On a reaction coordinate, this quantity is the difference between the transition state and the reactants. This quantity is lowered by catalysts to increase the reaction rate. Name this minimum energy needed to start a chemical reaction.`,
    answer: `Activation energy`
  },
  {
    category: "Mythology",
    text: `One god from this culture made the sun appear halved because he was missing a leg, causing his brother to club him out of the sky. While fighting a crocodilian monster to create the earth, one god from this culture lost his foot. This culture's war god flayed himself to bring food to humanity. A god from this culture was born from an impregnated ball of feathers and was represented by the hummingbird. This culture's first humans were created when a "feathered serpent's" blood mixed with the bones of its underworld, Mictlan. Name this Mesoamerican culture whose pantheon included Quetzalcoatl.`,
    answer: `Aztecs`
  },
  {
    category: "History",
    text: `This ruler was forced to return the Maastricht to the Netherlands in the Treaties of Nijmegen. This ruler's so-called "daughters" were women recruited to populate a New World colony. Jean-Baptiste Colbert was a minister of this ruler. In addition to starting the War of Devolution, this ruler faced a rebellion of noblemen and Parliament, called the Fronde, who opposed Cardinal Mazarin. Many Huguenots were displaced after this ruler issued the 1685 Edict of Fontainebleau, which revoked the Edict of Nantes. The Palace of Versailles was ordered to be constructed by what longest-ruling "Sun King" of France?`,
    answer: `Louis XIV`
  },
  {
    category: "Literature",
    text: `A character created by this author mistakes a pile of receipts for a secret manuscript of General Tilney due to her imagination from reading novels with Isabella Thorpe like The Mysteries of Udolpho. In another novel by this author, a cleverness competition during a Box Hill picnic upsets Ms. Bates and a man who deters a protagonist's romance with Frank Churchill. The estate of Pemberley names a massive fanfiction collection for this author's six "novels of manners." This author of Northanger Abbey wrote a novel in which Mr. Knightley marries the aspiring matchmaker Emma.`,
    answer: `Jane Austen`
  },
  {
    category: "Social Studies",
    text: `This modern-day leader is protected online by the 50 Cent Army who spam critical posts. This leader's administration outlined "Eight Musts" promoting his country's "peaceful development" and "social harmony." Terry Branstad was tapped as ambassador to this leader's country due to his time spent in Muscatine, Iowa as an agricultural delegate. In 2021 textbooks on this leader's namesake "Thought" were added to his country's school curriculum. The Belt and Road Initiative began under this leader, who banned satirical depictions of him as Winnie the Pooh.`,
    answer: `Xi Jinping`
  },
  {
    category: "Fine Arts",
    text: `A painting by this earlier artist inspired a later painter's series depicting its central subject blurring into curtain folds and screaming. A historical work by this artist shows Ambrosio de Spinola receiving the keys to the title city from Justin of Nassau. Francis Bacon was inspired by this artist's Portrait of Pope Innocent X. This artist of The Surrender of Breda appears in a painting wearing the red cross of the Order of St. James on his chest. The daughter of King Philip IV is accompanied by the title "maids of honor" in a painting by what Spanish artist who depicted the Infanta Margarita in his painting Las Meninas?`,
    answer: `Diego Velázquez`
  },
  {
    category: "Science",
    text: `These particles are emitted in namesake "generators" by the limited fusion of deuterium and tritium. Roughly 80 percent of ITER's energy will be transferred to these particles. In fission reactors, graphite and water have high cross-sections for these particles and are called their namesake "moderators." These particles are composed of two down quarks and one up quark. In beta-minus decay, one of these particles turns into a neutrino, an electron, and a proton. Different numbers of these particles are found in each isotope of an element.`,
    answer: `Neutrons`
  },
  {
    category: "Literature",
    text: `A character in this play is told that her brother died after his appendix burst during a camping trip. A character in this play forecasts the weather with his knee. This play is intended to be performed with no set or props. After a character in this play asks if "human beings ever realize life while they live it," another character replies "saints and poets, maybe." In this play, "Blessed Be the Tie That Binds" is sung by a choir led by Simon, who eventually hangs himself. George Gibbs and Emily Webb are characters in this play. Name this Thornton Wilder play set in Grover's Corners.`,
    answer: `Our Town`
  },
  {
    category: "Social Studies",
    text: `Roger Verbeek investigated one of these events that triggered the nativist Banten Peasants Revolt. David Keys argued that the Medieval era began when one of these events in 536 precipitated the collapse of societies like pre-Islamic Arabia. One of these events at Huaynaputina caused famines that precipitated Russia's Time of Troubles. Edvard Munch's The Scream documents how Norwegian skies turned red from the jet stream after one of these events in 1883. 1815 was the "Year Without a Summer" because one of these events in Indonesia coated the world in ash. Name these events like the one at Krakatoa.`,
    answer: `Volcanic eruptions`
  },
  {
    category: "Social Studies",
    text: `Geoffrey Brennan and Loren Lomasky proposed that this activity has contrasting "expressive" and "instrumental" motivations as a solution to Downs' paradox. A Condorcet method for this activity avoids situations similar to rock, paper, scissors. Clear preferences cannot be illustrated through this activity by Arrow's impossibility theorem. A "wasteful" form of this activity is common in "first-past-the-post" systems for it, which are contrasted with a "ranked choice" method. Name this civic activity performed at the ballot box.`,
    answer: `Voting`
  },
  {
    category: "Physics",
    text: `This phenomenon occurs whenever a signal encounters a discontinuity in impedance along its path. Coefficients for this phenomenon and transmission are computed by the Fresnel equations. The type of this phenomenon that occurs at a very smooth surface is its specular type. Instead of refracting, light waves past the critical angle will undergo the "total internal" type of this phenomenon at a boundary. The angle of light undergoing this phenomenon is equal to the angle of incidence.`,
    answer: `Reflection`
  },
  {
    category: "Mythology",
    text: `Procris cured a king of this place from a curse that caused him to produce deadly animals when being unfaithful. Megara fell to that king of this place after Scylla cut off a lock of hair from her father's head. One prince of this place was revived by Polyidus after drowning in a cask of honey. A king of this place adopted Sarpedon, Rhadamanthus, and a man who earned the ire of Poseidon after refusing to sacrifice a great white bull. Seven young men and seven virgin maidens were sent to this island every year to be sacrificed to a son of Pasiphaë.`,
    answer: `Crete`
  },
  {
    category: "History",
    text: `One group of these people converted to Catholicism under their king Reccared I. Instead of waiting for his nephew Gratian, Valens decided to engage in battle with these people, leading to his death at the hands of their leader Fritigern at the battle of Adrianople. Flavius Aetius worked with a leader of these people named Theodoric to defeat the Huns at the battle of the Catalaunian Plains. A group of these people sacked Rome in 410 CE under the leadership of their king Alaric. These people were divided into western and eastern branches prefixed "Visi-" and "Ostro-."`,
    answer: `Goths`
  },
  {
    category: "Literature",
    text: `This character orders a farmer to stop flogging a shepherd boy, which only makes him flog the boy harder. A companion of this character learns that he must whip himself 3,300 times in order to lift a curse on this character's love interest. Those instructions are given by a Duke and a Duchess who claim to have learned about this character from Part One of a novel titled for this character and published ten years prior. A barber and curate burn down this character's library of chivalric romances. This character moons after the peasant Dulcinea and takes on Sancho Panza as a squire.`,
    answer: `Don Quixote`
  },
  {
    category: "Science",
    text: `Actives, like retinol, are compounds that increase a turnover rate in this thing. Salicylic acid and beta hydroxy acids, or BHAs, remove excess material from this thing, while hyaluronic acid acts as a humectant for it. Oil-based then water-based products are used to clean this thing in the first two steps of a Korean ten-step process. Sebum secreted onto this tissue can clog follicles in it. The porous stone pumice can be applied to this tissue to exfoliate it, removing layers of dead cells. Ultraviolet light causes aging indicators like wrinkles and dark spots on this tissue which are prevented by sunscreen.`,
    answer: `Human skin`
  },
  {
    category: "Fine Arts",
    text: `One artist's collection of "Persians" of this material are marked with an optic ribbed pattern and brightly-colored "lips." In works like Dream Garden, an artist embedded color directly in the Favrile form of this material. Nature and gardens inspired many of Dale Chihuly's large-scale sculptures in this material. Lamps with ornate shades made of this material were designed by Louis Comfort Tiffany. After being melted in a furnace, this material can be blown into shape using a blowpipe.`,
    answer: `Glass`
  },
  {
    category: "Science",
    text: `The transfer of functional groups between two of these elements occurs between oxidative addition and reductive elimination steps during cross-coupling reactions. The number of these elements that a substituent is bound to is its denticity. These elements are at the center of complexes whose orbital splitting behavior is described by crystal field theory. Most coordination complexes are centered around one of these elements bound to ligands. The catalytic activity of these elements stems from their ability to adopt different oxidation states due to their partially filled d orbitals.`,
    answer: `Transition metals`
  },
  {
    category: "Literature",
    text: `A character in this play remarks, "the wheel is come full circle," after he loses a trial by combat. That character from this play questions, "Why bastard? Wherefore base?" in a speech that concludes, "Now, gods, stand up for bastards!" Another character in this play laments, "As flies to wanton boys are we to the gods. / They kill us for their sport," after he is blinded by the Duke of Cornwall. In this play, Edmund manipulates the Earl of Gloucester into turning against his son Edgar, who flees and runs into the title king and his fool in a storm.`,
    answer: `King Lear`
  },
  {
    category: "History",
    text: `This leader received a ceremonial "Sword of Islam" from the native population of the "fourth shore" of this leader's country. This leader guaranteed a two-thirds majority in Parliament to the party that received the largest share of votes by passing the Acerbo Law. This leader used claims of native irredentism to force King Zog into exile and justify his country's occupation of Albania. Victor Emmanuel III appointed this leader as prime minister after this leader's paramilitary army, the Blackshirts, marched on Rome.`,
    answer: `Benito Mussolini`
  },
  {
    category: "Philosophy",
    text: `This thinker urged the "privileged minority" to "speak the truth and to expose lies" in the anti-Vietnam War essay "The Responsibility of Intellectuals." This thinker listed ownership and flak as two of the five filters of the propaganda model for systemic media bias in a book co-written with Edward S. Herman titled Manufacturing Consent. This thinker pointed to a "poverty of the stimulus" to argue that children have an innate understanding of universal grammar. This thinker's Syntactic Structures introduced the nonsense sentence "colorless green ideas sleep furiously."`,
    answer: `Noam Chomsky`
  },
  {
    category: "Science",
    text: `The rotation speed of these objects changes quickly at the tachocline. These objects will lose mass if they exceed their Roche lobe. These objects are grouped by metallicity into Populations I and II. Some of these objects enter the horizontal branch after experiencing a helium flash, which initiates the triple-alpha process. These objects comprise open and globular clusters. The luminosities and temperatures of these objects are plotted on H-R diagrams, which places most of these objects in the main sequence.`,
    answer: `Stars`
  },
  {
    category: "Fine Arts",
    text: `A video of the North State orchestra performing one of these works went viral because a woman in the audience screamed after a sudden fortississimo. A "Dance of the Knights" features in Sergei Prokofiev's adaptation of Romeo and Juliet as one of these works. Prokofiev collaborated with George Balanchine on one of these works titled Prodigal Son for Sergei Diaghilev, an impresario for these works. A high-pitched bassoon solo opens one of these works by Igor Stravinsky that caused a riot at its Paris premiere.`,
    answer: `Ballets`
  },
  {
    category: "Religion",
    text: `This holder of this title challenged people to point him to where God is not after pointing his feet toward the Kaaba. That holder of this title threw his bowl in a sewer to find a successor. The first person to hold this title declared, "there is no Hindu, there is no Muslim." The last person to hold this title founded an order called the Khalsa and told his followers to obey the Five Ks. The last human to hold this title, Gobind Singh, declared that the eternal holder of this title would be a book called Granth Sahib. The first person to hold this title was named Nanak.`,
    answer: `Guru`
  },
  {
    category: "History",
    text: `A guerrilla group in this country killed 69 peasants in the Lucanamarca Massacre and carried out the Tarata Street bombing. In this country, a hostage crisis at an embassy was perpetrated by the insurgent group MRTA. A right-wing dictator of this country established the Grupo Colina death squad and oversaw the capture of Abimael Guzman, who led the Shining Path insurgency. The novelist Mario Vargas Llosa lost this country's 1990 presidential election to that dictator, Alberto Fujimori. In 1975, this country granted official status to the Quechua language.`,
    answer: `Peru`
  },
  {
    category: "Literature",
    text: `A poem by this author describes "voices" that are "more distant and more solemn / Than a fading star." In a poem by this author, the speaker describes being "almost, at times, the Fool" in a stanza that begins, "No, I am not Prince Hamlet, nor was meant to be." That poem by this author asks, "Do I dare / Disturb the universe?" A poem by this author quotes the words "Datta. Dayadhvam. Damyata" from the Upanishads in its last section, "What the Thunder Said." That poem begins, "April is the cruellest month."`,
    answer: `T. S. Eliot`
  },
  {
    category: "Music",
    text: `This artist sings "Don't be afraid to try again / Everyone goes south / Every now and then" in a song beginning "Well we all have a face / that we hide away forever." In a song about his time working at the Executive Room, this artist described his first wife, Elizabeth Weber, as a "waitress… practicing politics." This artist sings into a wrench in the music video for a song about someone "living in her white-bred world" who's "looking for a downtown man." In another song, this artist's character is told "we're all in the mood for a melody / and you've got us feeling alright" as he plays music at a bar.`,
    answer: `Billy Joel`
  },
  {
    category: "History",
    text: `Due to a lack of white volunteers in this conflict, Christopher Greene was put in command of an integrated army unit. During this conflict, which saw the formation of the First Rhode Island Regiment, several enslaved people joined an "Ethiopian Regiment" after Lord Dunmore's Proclamation was issued. The Black spy James Armistead helped one side in this conflict secure victory at a battle where the other side's band is said to have played the song "The World Turn'd Upside Down." In the build-up to this conflict, Crispus Attucks was killed in the Boston Massacre.`,
    answer: `Revolutionary War`
  },
  {
    category: "Literature",
    text: `The protagonist of a story by this author is told "Rome wasn't built in a day" and annoys a man reading a newspaper by asking him for matches. In another story by this author, a gray monkey tied to a "small chinaberry tree" plays outside a restaurant called "The Tower." A character created by this author wears a large purple hat and has a stroke after condescendingly attempting to give Carver a penny. In a story by this author, the escaped convict "the Misfit" has a conversation with the Grandmother before shooting her.`,
    answer: `Flannery O'Connor`
  },
  {
    category: "Science",
    text: `The Attini subgroup of this family can create food by intentionally promoting fungal growth. Certain species of acacias grow hollow spicules to provide homes for animals in this family as a mutualistic defense mechanism. E. O. Wilson's extensive research on animals in this family led to the founding of sociobiology. Studies using these members of order Hymenoptera led to the first isolation of formic acid. A red-colored invasive species in this family of insects can form rafts and defend colonies using pincers.`,
    answer: `Ants`
  },
  {
    category: "Social Studies",
    text: `According to legend, a "watcher" in a Ford pickup truck protects the indestructible Devil's tree in this state. Many horror films have been filmed at the abandoned Essex County Hospital Center in Cedar Grove in this state. This state's Pine Barrens are supposedly inhabited by a monster known as this state's "devil." Because another state has a border partially forming a twelve-mile circle, this state owns no islands in the Delaware River. This state disputed ownership of Ellis Island with a northern neighbor until 1998. The George Washington Bridge connects this state to Manhattan.`,
    answer: `New Jersey`,
    alt: [`Jersey`]
  },
  {
    category: "Fine Arts",
    text: `In one painting by this artist, a green dress strung between a toilet and trophy hangs in front of skyscrapers. Another painting by this artist shows a naked girl holding a ribbon that makes a family tree with her parents and grandparents. In one painting, this artist's face replaces the face of a deer with arrows lodged in its hide. This artist's spine is replaced by the title Broken Column in a painting she made after a bus accident that caused her chronic pain. Two versions of this artist hold hands with each other in a painting she made shortly after her divorce with Diego Rivera.`,
    answer: `Frida Kahlo`
  },
  {
    category: "Science",
    text: `Sequences where the value of one term is equal to this quantity for the next term are called "martingales." The moment-generating function of a random variable X is computed by finding this quantity for "e to the t X." For a random variable x with PDF f of x, this quantity equals "the integral from minus infinity to infinity of x times f of x dx." The law of large numbers states that for a large number of trials, the mean result will approach this value. When rolling a six-sided die, this value for the outcome is 3.5.`,
    answer: `Expected value`,
    alt: [`Expectation`, `EV`, `Conditional expectation`]
  },
  {
    category: "Social Studies",
    text: `The Battle of Golden Hill broke out after sticks topped with Phrygian caps put up by this organization were repeatedly cut down. This organization met underneath an elm tree from which they hung a boot in protest of Lord Bute. The Loyal Nine, a predecessor to this organization, hung Andrew Oliver in effigy and raided Lieutenant Governor Thomas Hutchinson's house while protesting a certain piece of legislation. This organization was founded by Samuel Adams, who ran its Boston branch.`,
    answer: `Sons of Liberty`,
    alt: [`Loyal Nine`]
  },
  {
    category: "Literature",
    text: `The protagonist of this novel is stopped from saving a drowning man by a character who claims that the harbor was made for the victim to drown in. After shooting two monkeys, the protagonist of this novel is kidnapped by the cannibalistic Oreillons. A pirate steals red sheep carrying gold from this novel's protagonist while leaving El Dorado. After being kicked out of the castle Thunder-ten-Tronckh, the protagonist of this novel survives the 1755 Lisbon earthquake. This novel's title character is told that humans live in the "best of all possible worlds" by his tutor Pangloss.`,
    answer: `Candide`
  },
  {
    category: "Social Studies",
    text: `The decline of this country's industrial sector in the mid-18th century is derisively known as the "Periwig Era." This country's colonial ventures were overseen by companies operated by the 19 Gentlemen and 17 Gentlemen. This country's financial innovations included hosting the first publicly traded company and the first stock exchange. This country expanded its farmland and created a vast system of polders using windmills. In the 1630s, a speculative bubble drove up the price of tulips in this country, then collapsed dramatically.`,
    answer: `The Netherlands`,
    alt: [`Kingdom of the Netherlands`, `Nederland`, `Koninkrijk Nederlanden`, `Dutch Republic`]
  },
  {
    category: "Fine Arts",
    text: `In a film by this director, a soldier plays with a flare that emits purple smoke before his group is shot at by unseen enemies hiding in foliage. In another film by this director, a man squeezes his brother's temples and says, "I know it was you… You broke my heart. You broke my heart!" This director directed a film in which shots of a man's rivals being assassinated are interspersed with shots of his son's baptism. A fleet of helicopters plays "The Ride of the Valkyries" as they attack a village in this director's Heart of Darkness-inspired film about the Vietnam War.`,
    answer: `Francis Ford Coppola`
  },
  {
    category: "Science",
    text: `In special relativity, the component of this quantity parallel to the direction of motion is scaled by a factor of gamma cubed. In systems where this quantity is always antiparallel to position, this quantity is called central. If this quantity can be written as the negative spatial derivative of potential energy, it is conservative. For a spring, this quantity equals "minus the spring constant times displacement," according to Hooke's law. Vectors of this quantity are represented as arrows on a free body diagram.`,
    answer: `Force`,
    alt: [`Central force`, `Conservative force`, `Restoring force`]
  },
  {
    category: "Philosophy",
    text: `Avicenna argued that something which has this property necessarily must also be simple and good. In metaphysics, nominalism holds that this property only applies to particulars, not to universals. The monk Gaunilo imagined an island that clearly lacks this property to refute an argument in the Proslogion. That argument was put forth by Anselm of Canterbury and claims that "that which nothing greater can be conceived" must have this property. Materialists believe that only physical things have this property.`,
    answer: `Existence`,
    alt: [`Being`, `Reality`]
  },
  {
    category: "Literature",
    text: `A clay bas-relief of this figure, sculpted by Henry Wilcox in his sleep, sparks an investigation in which Professor Angell finds high rates of disturbing dreams in artists and poets. The Norwegian sailor Johannsen describes stumbling across this figure's "damp Cyclopean city of slimy green stone." In a story about this figure, a couplet ending, "And with strange aeons even death may die," parallels a cult chant translating to "in his house at R'lyeh [this creature] waits dreaming." This Great Old One inspired a namesake "mythos," starting with a short story titled "The Call of [this creature]."`,
    answer: `Cthulhu`
  },
  {
    category: "Science",
    text: `These groups have the most s character of any group due to their electropositivity according to Bent's rule. In MO theory, a filled nonbonding molecular orbital is equivalent to one of these groups. Hydrides act as nucleophiles because they possess one of these groups. Organic chemists describe the movement of one of these groups by "pushing" them from the base to the tip of a double-barbed curved arrow. Water has a bent molecular geometry due to the repulsion these groups exert on the hydrogen atoms according to VSEPR theory.`,
    answer: `Electron pairs`,
    alt: [`Lone pairs`]
  },
  {
    category: "Social Studies",
    text: `This governor's Project Roomkey used state funds to provide hotel rooms for homeless people at risk of COVID. In September 2021, this governor signed a bill to allow duplexes on lots zoned single-family-only, SB 9. A candidate who ran against this governor, John Cox, rented a bear to display on the campaign trail. This governor attended a November 2020 birthday party at the restaurant The French Laundry which violated COVID restrictions. Candidates like Kevin Paffrath and Larry Elder were defeated in the September 2021 attempted recall election of this governor.`,
    answer: `Gavin Newsom`
  },
  {
    category: "Social Studies",
    text: `A holder of this position declared that "the twentieth century belongs to [his country]." A constitutional crisis ensued when one holder of this position was replaced by Arthur Meighen in the King-Byng affair. A different holder of this position faced the Conscription Crisis during the First World War. The Pacific Scandal resulted in the resignation of the first holder of this position, John MacDonald. Later holders of this position included William Lyon Mackenzie King and Pierre Trudeau.`,
    answer: `Prime Minister of Canada`
  },
  {
    category: "Fine Arts",
    text: `This composer transcribed themes from other composers' operas for piano solo as loosely structured "paraphrases" and "reminiscences." The right hand rapidly alternates between two D-sharps an octave apart throughout an etude by this composer. This composer dedicated a set of 12 etudes to his teacher Czerny, the fourth of which is titled "Mazeppa." This composer's six "Grand Etudes" are adapted from Paganini violin pieces. A collection of 19 virtuosic piano works by this composer features the folk music of his home country Hungary.`,
    answer: `Franz Liszt`
  },
  {
    category: "Literature",
    text: `A stage director asks an actress to sing a song about summer in the prologue to a play from this country. After being cursed by a sage, a character in a play from this country is forgotten by her husband. In that play from this country, a fisherman who finds a lost ring enables a king to identify his wife. The story of that play from this country is also found in an epic in which five brothers are exiled after losing a game of dice. An eighteen-day war between the Pandavas and Kauravas occurs in that epic from this country.`,
    answer: `India`
  },
  {
    category: "Social Studies",
    text: `A court ruled that this country's Urantia Foundation could not hold the copyright to its namesake book because it was written by aliens. Another religion in this country believes that the wheel in Ezekiel's visions was a UFO called the "Mother Wheel." In this country, a pair of cult leaders calling themselves Ti and Do led their followers to board a spacecraft behind Comet Hale-Bopp by committing mass suicide. A religion from this country believes the ancient Earth was visited by an alien named Xenu. That religion was founded by L. Ron Hubbard.`,
    answer: `United States`,
    alt: [`America`, `US`, `USA`]
  },
  {
    category: "Social Studies",
    text: `In this city, poems by authors such as Alcman were read at a festival in which men danced around naked called the Gymnopaedia. In this city, a council called the apella would debate proposals submitted by its council of elders, the gerousia. The poet Tyrtaeus supported this city's second war to conquer its neighbors Messenia and Laconia. This city's law-giver, Lycurgus, is credited with founding its system of military training, the agoge. A class of serfs in this city were called the helots.`,
    answer: `Sparta`
  },
  {
    category: "Fine Arts",
    text: `In response to accusations of sexualizing healthcare workers, this band removed a nurse outfit from a scene set to the words "love is a drug that I quit." One member of this band describes herself as "so sweet, then I get a little angry" on a collaboration with Lady Gaga, "Sour Candy." This band sings "ice cream, chillin', chillin'" in the chorus of a collaboration with Selena Gomez that appears on their first album, which is titled The Album. Songs on that album also include "How You Like That" and the number one hit "Lovesick Girls."`,
    answer: `BLACKPINK`
  },
  {
    category: "Literature",
    text: `The narrator of this novel is reminded of Louis Armstrong's song "Black and Blue" while imagining talking to a slave woman mourning her master's death. This novel's narrator is mistaken for a man named Rinehart after attending the funeral of a man who was shot selling dolls on the street. After failing to give a tour to the stakeholder Mr. Norton, the narrator of this novel is sent to New York with fake letters of recommendation by Dr. Bledsoe. At the end of this novel, the narrator kills Ras the Destroyer during the race riot and falls through a manhole into a hidden underground room.`,
    answer: `Invisible Man`
  },
  {
    category: "Fine Arts",
    text: `William Walton composed works of this type titled Crown Imperial and Orb and Sceptre for the coronations of British monarchs. Traditionally, the flautists switch to playing piccolo during the "obbligato" solo in the final strain of one of these works. The song "Land of Hope and Glory" adapts the trio section of one of these works often performed at graduation ceremonies. Those works are titled Pomp and Circumstance. American works of this type like "Semper Fidelis" and "The Stars and Stripes Forever" were composed by the "King" of them, John Philip Sousa.`,
    answer: `Marches`
  },
  {
    category: "Social Studies",
    text: `Instead of OpenGL, this company uses its own graphics API, named Metal, with its Cocoa native API. This company makes major product announcements at its annual Worldwide Developers Conference. This company began to shift away from using Intel processors in 2020 in favor of its own "silicon," like the ARM architecture-based M1 chip. "Bionic" chips and Retina displays are recent consumer technology innovations by this company. This company's current CEO, the first Fortune 500 CEO to come out as gay, is Tim Cook.`,
    answer: `Apple Inc.`,
    alt: [`Apple`]
  },
  {
    category: "Literature",
    text: `A character in this novel declares that he would rather betray the world than let the world betray him after accidentally killing his father's blood brother. A southern barbarian chieftain in this novel is captured and released seven times before submitting. Three men in this novel declare that although they were not born on the same day, they seek to die on the same day in the Peach Garden Oath. A strategist "borrows" the east wind to aid fire ships in this novel's dramatization of Battle of Red Cliffs.`,
    answer: `Romance of the Three Kingdoms`
  },
  {
    category: "Social Studies",
    text: `A kingdom in this region was dominated for a time by a faction known as the Sarim. That kingdom from this region was home to a research institute known as the Hall of Worthies and was dominated by an elite class known as the yangban. A military commander employed by a kingdom in this region designed so-called "turtle ships" to counter the forces of Toyotomi Hideyoshi; that commander was Yi Sun-Sin. Sejong the Great ruled the kingdom of Joseon, which dominated this region for five centuries.`,
    answer: `Korean peninsula`,
    alt: [`Korea`]
  },
  {
    category: "Literature",
    text: `A short story by this author ends with a psychologist watching "vultures… dropping down" while checking up on a family in the "Happylife Home." In that story by this author, Peter and Wendy lock their parents in an autonomous nursery, where they are eaten by lions. This author of "The Veldt" wrote a novel in which the protagonist memorizes lines from the Book of Ecclesiastes. In that novel by this author, the protagonist meets up with the former professor Faber before escaping Captain Beatty's mechanical hounds.`,
    answer: `Ray Bradbury`
  },
  {
    category: "Social Studies",
    text: `Because he believes it will increase personal liberty, this system of government is advocated by Curtis Yarvin, who is also known as Mencius Moldbug. Robert Filmer's argument for this system of government based on the life of Adam is refuted in John Locke's First Treatise. Only this system of government can prevent a "war of all against all" according to Thomas Hobbes' Leviathan. The European belief that this system is justified by an inalienable "divine right" contrasts with the Chinese belief in a revocable "Mandate of Heaven."`,
    answer: `Monarchy`
  },
  {
    category: "Science",
    text: `Fluorescence can be introduced into this compound by tagging it with intercalating agents like acridine orange and ethidium bromide. S-adenosyl methionine donates methyl groups to CpG sites located in this compound. Chargaff's rules can be used to determine the melting temperature of this compound because one pair of its subunits has three hydrogen bonds while the other purine-pyrimidine pair has only two. Photo 51 is a photo of this compound that was taken using X-ray crystallography by Rosalind Franklin before Francis and Crick modeled this compound in 3D.`,
    answer: `DNA`
  },
  {
    category: "Social Studies",
    text: `This city's MLB ballpark had a slope in center field called Tal's Hill that was removed in 2016. This city was nicknamed "Clutch City" after its NBA team came back from 0-2 down in the playoffs against the Suns, eventually defeating the Patrick Ewing-led Knicks in the finals. George Springer won the World Series MVP for this city's MLB team in 2017, before the discovery that the team cheated during the season by illegally stealing signs and banging on a trash can to warn of opponents' upcoming pitches. In 2021, the Brooklyn Nets traded for James Harden from this city's NBA team.`,
    answer: `Houston`
  },
  {
    category: "Social Studies",
    text: `The death of Bogislaw XIV during this war resulted in one belligerent annexing his state under the Treaty of Stettin. The War of the Mantuan Succession was a part of this larger conflict which featured the brutal sack of Magdeburg. The Treaty of Lübeck ended Christian IV's involvement with one side in this war. Count Tilly won the battle of White Mountain during this war's Bohemian phase, which began after Ferdinand II's representatives were thrown out of a window in the Second Defenestration of Prague.`,
    answer: `Thirty Years' War`
  },
  {
    category: "Science",
    text: `These compounds can be selectively oxidized by either pyridinium chlorochromate or sodium dichromate depending on whether the desired product is an aldehyde or a carboxylic acid. One of these compounds is toxic because a dehydrogenase oxidizes it to produce formic acid instead of the intended product acetaldehyde. It is difficult to purify one of these compounds past 96% because it forms an azeotrope with water during distillation. The primary ingredient in many disinfectants is a type of these compounds named "isopropyl."`,
    answer: `Alcohols`
  },
  {
    category: "Fine Arts",
    text: `One painting from this movement depicts a bunch of grapes resting on a checkered tablecloth above a copy of Le Journal. The "crystal" form of this movement was promoted by artists like Juan Gris. A portrait from this movement depicts the artist's lover Dora Maar with her cat. It's not Fauvism, but Louis Vauxcelles accidentally coined the name of this movement while making fun of Houses at L'Estaque by Georges Braque. A lightbulb is seen above a screaming horse in one painting from this movement that depicts a bombing in the Spanish Civil War, Guernica.`,
    answer: `Cubism`
  },
  {
    category: "Social Studies",
    text: `Among this monarch's early reforms was the consolidation of the Hermandad police force under the crown. This monarch's position was secured against a rival relative after the Battle of Toro. This monarch's advisor Tomás de Torquemada was appointed to head one institution originating in this monarch's realm. This mother of Juana the Mad conquered the kingdom of Granada and, along with her husband, expelled all Jews from their lands through the Alhambra Decree. This monarch and her husband also sponsored Christopher Columbus' voyages to the New World.`,
    answer: `Isabella I of Castile`,
    alt: [`Isabella of Castile`, `Isabella the Catholic`]
  },
  {
    category: "Literature",
    text: `In one poem, this author remarked, "to die is different from what any one supposed, and luckier." The phrase "the sea whisper'd me" concludes a poem by this author in which a mockingbird mourns the death of its mate. This author's "Calamus" poems include several explicit passages describing sexual love between men. This author of "Out of the Cradle Endlessly Rocking" declared, "I sound my barbaric yawp over the roofs of the world" in a poem that begins "I celebrate myself, and sing myself."`,
    answer: `Walt Whitman`
  },
  {
    category: "Fine Arts",
    text: `In one work, policemen sing "tarantara" as members of this profession shout "With Cat-Like Tread, Upon Our Prey We Steal." In an opera, a character sings "it is, it is a glorious thing" to be this profession's king. In that opera, after Ruth mishears her instructions, she indentures Frederic to this profession until his 21st birthday. A man introduces himself to these people with a song claiming he can write "a washing bill in Babylonic cuneiform." That character from an opera titled for these people declares "I Am the Very Model of a Modern Major-General."`,
    answer: `Pirates`
  },
  {
    category: "Social Studies",
    text: `This person introduced the discovery doctrine, which held that the United States could lay claim to Native American-owned land that was originally 'discovered' by European colonial powers. This person ruled that the Supreme Court could not constitutionally issue a writ of mandamus, preventing "midnight judges" from taking office. Andrew Jackson reportedly said "now let him enforce it" in response to this judge's ruling defending Native American tribal sovereignty in Worcester v. Georgia.`,
    answer: `John Marshall`
  },
  {
    category: "Science",
    text: `For three intersecting segments inside one of these shapes, the butterfly theorem says their intersecting point is the midpoint of a new, generated segment. The distance from a point to the perimeter of one of these shapes is given by the power of a point theorem. One of these shapes that passes through nine special points can be constructed for every triangle. Constructing a square with the same area as one of these shapes is impossible because pi is transcendental. A segment whose endpoints lie on one of these shapes is called a chord.`,
    answer: `Circles`
  },
  {
    category: "Social Studies",
    text: `The peel of the yuzu fruit, salt, and one kind of this food form Japanese yuzukosho paste, often used to augment miso soup. A sauce using the piri piri kind of this food is central to some dishes from African former Portuguese colonies. Prik kee noo is a kind of this food used in Thai cuisine nicknamed "mouse dropping" or "bird's eye." The New Mexico group of types of this food contains the Hatch and Pueblo varieties. A dish named for being relleno, or stuffed, often uses the poblano variety of this food. The Carolina Reaper kind of this food has very high capsaicin levels.`,
    answer: `Chile peppers`,
    alt: [`Chili peppers`, `Peppers`]
  },
  {
    category: "Literature",
    text: `One hero from this country's myth performs the salmon-leap to reach the home of a warrior so he can learn weaponry. A beautiful woman elopes with a man with a love-spot on his forehead despite agreeing to marry a hero from this country. The story about Grainne and her lover is narrated by the son of that hero from this country, the bard Oisín. Another hero from this country's myth defeats the attacking forces of Queen Medb at the Cattle Raid of Cooley. One hero from this country burns his thumb while cooking the Salmon of Knowledge, as recounted in the Fenian Cycle.`,
    answer: `Ireland`
  }
];
