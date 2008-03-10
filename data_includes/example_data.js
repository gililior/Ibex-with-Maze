var shuffleSequence = /*seq("intro", sepWith("sep", seq("practice", rshuffle("f", rshuffle("s1", "s2")))), "break", */sepWith("sep", rshuffle("q1", "q2"))/*)*/;
var practiceItemTypes = ["practice"];

var ds = DashedSentence;
var q = AcceptabilityJudgment;

var defaults = [
    Separator, { transfer: 1000, normalMessage: "Please wait for the next sentence." },
    DashedSentence, {mode: "self-paced reading"},
    AcceptabilityJudgment, {q: "How would you rate that sentence?", as: ["1", "2", "3", "4", "5", "6", "7"], presentAsScale: true, instructions: "Use number keys to answer."}
]

var items = [

["sep", Separator, { }],

["intro", Message, {html: "<p>This experiment has two parts. In the first part, you will be required to read a number of English sentences one word at a time. You can advance to the next word by pressing the space bar.</p><p>In the second part, you will be asked to &ldquo;rate&rdquo; some sentences on a scale of 1-7 (with 1 bad and 7 good).</p><p><b>Press any key to continue.</b></p>"}],
["break", Message, {transfer: 10000, html: "You've completed the first part of the experiment. Thanks! In a few seconds you'll be taken to the second part."}],

["practice", ds, {s: "This is a practice sentence to get you used to reading sentences like this."}],
["practice", ds, {s: "This is another practice sentence."}],
["practice", ds, {s: "This is the last practice sentence before the experiment begins."}],

[["s1",1], ds, {s: "The journalist interviewed an actress who he knew to be shy of publicity after meeting on a previous occasion"}],
[["s2",1], ds, {s: "The journalist interviewed an actress who after meeting on a previous occasion he knew to be shy of publicity"}],
[["q1", [2, 1]], q, {s: "Which actress did the journalist interview after meeting her PA on a previous occasion?"}],
[["q2", [2, 1]], q, {s: "Which actress did the journalist interview her husband after meeting on a previous occasion?"}],

[["s1",3], ds, {s: "The teacher helped struggling students who he encouraged to succeed without treating like idiots"}],
[["s2",3], ds, {s: "The teacher helped struggling students who without treating like idiots he encouraged to succeed"}],
[["q1", [4, 3]], q, {s: "Which struggling students did the teacher encourage to succeed without treating their friends like idiots?"}],
[["q2", [4, 3]], q, {s: "Which struggling students did the teacher encourage their friends to succeed without treating like idiots?"}],

[["s1",5], ds, {s: "The geologist photographed a fossil which he found to be older than expected after submitting for analysis"}],
[["s2",5], ds, {s: "The geologist photographed a fossil which after submitting for analysis he found to be older than expected"}],
[["q1", [6, 5]], q, {s: "Which fossil did the geologist discover its age after photographing?"}],
[["q2", [6, 5]], q, {s: "Which fossil did the geologist discover after photographing its surroundings?"}],

[["s1",7], ds, {s: "The President proposed secret plans which the generals agreed to fast-track for implementation without divulging to Congress"}],
[["s2",7], ds, {s: "The President proposed secret plans which without divulging to Congress the generals agreed to fast-track for implementation"}],
[["q1", [8, 7]], q, {s: "Which secret plans did the President propose without divulging their contents to Congress?"}],
[["q2", [8, 7]], q, {s: "Which secret plans did the President propose a spending bill without divulging?"}],

[["s1",9], ds, {s: "Airport officials searched some men who they allowed to get on the plane despite thinking rather suspicious"}],
[["s2",9], ds, {s: "Airport officials searched some men who despite thinking rather suspicious they allowed to get on the plane"}],
[["q1", [10, 9]], q, {s: "Which men did airport officials allow to get on the plane despite thinking their demenour rather suspicious?"}],
[["q2", [10, 9]], q, {s: "Which men did airport officials allow their bags to go on the plane despite thinking rather suspicious?"}],

[["s1",11], ds, {s: "The carpenter made a chair which designers thought to be really rather trendy after painting turquoise"}],
[["s2",11], ds, {s: "The carpenter made a chair which after painting turquoise designers thought to be really rather trendy"}],
[["q1", [12, 11]], q, {s: "Which chair did designers think to be really rather trendy after painting its legs turquoise?"}],
[["q2", [12, 11]], q, {s: "Which chair did designers think its appearence to be really rather trendy after painting turquoise?"}],


["f", ds, {s: "The foreign spy that encoded the top-secret messages was given a new mission that required going to Japan."}],
["f", ds, {s: "The receptionist that the real estate company just hired immediately familiarized herself with all the phone numbers of their clients."}],
["f", ds, {s: "Every delicious chocolate cake that the kind baker is making will be one of a kind."}],
["f", ds, {s: "The gangsters that the local police officers tracked for years were represented by an inexperienced lawyer."}],
["f", ds, {s: "The woman that John had seen in the subway bought himself a pair of stunning shoes that cost a fortune."}],
["f", ds, {s: "If the award-winning chef had entered this competition, he surely would have won first prize."}],
["f", ds, {s: "If the organized secretary had filed the documents when she first received them, they are easy to find."}],
["f", ds, {s: "If the homemade beer had been left to ferment more, it would have been drinkable."}],
["f", ds, {s: "The cowboy that the bulls tried to trample injured herself getting off a horse."}],
["f", ds, {s: "The patient that was admitted to the hospital last month still suffers severe pain in his left leg."}],
["f", ds, {s: "Very few economists that work in downtown DC will traveling to Russia this year."}],
["f", ds, {s: "The warm weather that everyone had been waiting patiently for melted the frost on the fields in two weeks."}]/*,
["f", ds, {s: "The basketball player that had just signed a million dollar contract bounced the new ball with great skill in twenty minutes."}],
["f", ds, {s: "The girls that rode the elephants at the beginning of the parade was from Africa."}],
["f", ds, {s: "If the spoiled toddler had stopped shouting when the baby sitter asked, he would have gotten a piece of candy."}],
["f", ds, {s: "The brave detective that had just been put on a new case searched for the dangerous criminals at the docks in ten hours."}],
["f", ds, {s: "If the careful scientist had tested his data one more time, he finds that his results were wrong all along."}],
["f", ds, {s: "The cattle that destroyed the farmer's field have eaten all his food as well."}],
["f", ds, {s: "If the amateur marathon runners had practiced more, they finish in the top fifty in this year's marathon."}],
["f", ds, {s: "If the tough boxer had gotten punched in the face one more time, he gets a concussion."}],
["f", ds, {s: "The engineer that designed the new and innovative rocket has bought himself a fancy new desk."}],
["f", ds, {s: "The waiter that the manager scolded in front of customers defended herself."}],
["f", ds, {s: "The construction worker that was fired by four contruction firms in the last three months convinced himself that he was not at fault."}],
["f", ds, {s: "If the old-fashioned farmers had bought new equipment this year, they would have grown a lot more food in their fields."}],
["f", ds, {s: "If the lucky gambler had played one more round of poker, he would have doubled his money."}],
["f", ds, {s: "If the troublesome child had skipped class this morning, he is in detention all afternoon long."}],
["f", ds, {s: "Very few pandas that are in captivity at the National Zoo will have a baby."}],
["f", ds, {s: "Only two specialized surgeons that work in the hospital could do this operation."}],
["f", ds, {s: "The mischevious boy that never took his vitamins ate the candy with his bare hands in ten minutes."}],
["f", ds, {s: "Every new intern that the political campaign group hired will doing lots of work."}],
["f", ds, {s: "Very few romance novels that the author wrote will containing offensive content."}],
["f", ds, {s: "The company that always ignored the environmental regulations was fined thousands of dollars."}],
["f", ds, {s: "If the long-distance calling cards had been cheaper, the freshmen would have called home much more often."}],
["f", ds, {s: "The pistol that the sly robber used in the hold-up was known to be a very dangerous model."}],
["f", ds, {s: "The goofy clown that had been hired for the child's birthday party amused the children with balloon animals in thirty minutes."}],
["f", ds, {s: "The burglar that took the jewelry from the home of the CEO's wife got himself arrested within twenty-four hours."}],
["f", ds, {s: "The tenants that the greedy landlord despised has been evicted for failing to pay rent."}],
["f", ds, {s: "If the small town tourist commission had put an ad in the travel magazines, they would have had more tourist business."}],
["f", ds, {s: "The plants that the gardener trimmed with his special tool has made the house more attractive."}],
["f", ds, {s: "No homework assignments that the cruel professor assigned will count in the course average."}],
["f", ds, {s: "The businessman who made a record number of sales this year treated herself to several drinks."}],
["f", ds, {s: "Only two secret spies that know about this mission could knowing where the documents are."}],
["f", ds, {s: "The nanny that doesn't have much work to do entertained herself in the large empty house."}],
["f", ds, {s: "The actress that the director has chosen for the role of the bank robber has proven himself to be a great talent."}],
["f", ds, {s: "If the brave fireman had waited any longer to enter the building, it would have been too late to save the puppy."}],
["f", ds, {s: "The fireman who saved the mewling kittens from the burning building cut himself on a piece of broken glass."}],
["f", ds, {s: "The hardworking student that took all the toughest English classes read the assigned pieces of literature at the library in two weeks."}],
["f", ds, {s: "The salesman that examined the brand new line of products worry about his job everyday."}],
["f", ds, {s: "If the popular rock band had been successful on their last tour, they have a new multi-million dollar record deal."}],
["f", ds, {s: "The strict teacher whose class some students skipped every day corrected the midterms with a huge red pen in fifty minutes."}],
["f", ds, {s: "If the aging general had consulted his senior officers about the strategy, they would have won the battle easily."}],
["f", ds, {s: "If the lazy employees had met their deadlines, they would have gotten a raise at the end of the year."}],
["f", ds, {s: "The ballerina that rehearsed the Russian ballets every day introduced herself to all the stars from Hollywood after the show."}],
["f", ds, {s: "The plumber that helped the union-certified electricians all the time has retired after twenty years on the job."}],
["f", ds, {s: "The surgeon who worked with well-educated anesthesiologists upset himself with the patient who kept complaining."}],
["f", ds, {s: "The scruffy dog whose owner had accidentally set free frightened the nervous man with its loud bark in two minutes."}],
["f", ds, {s: "The boy that came from a troubled family situation has supported herself with odd jobs for the last several years."}],
["f", ds, {s: "If the cruel pirate had kidnapped the king's daughter, the entire royal army searches for him."}],
["f", ds, {s: "The wrestlers that the television station recruited for their new show exercise at least eight hours a day."}],
["f", ds, {s: "The barber that the four bald men still go see every day is hiring herself a new assistant."}],
["f", ds, {s: "The waitress that served the delicious pizza in under twenty minutes earned himself a giant tip."}],
["f", ds, {s: "The writer that angered the managing editor and his staff is known to often make irritating remarks."}],
["f", ds, {s: "No substitute teachers that know advanced calculus can work on Fridays."}],
["f", ds, {s: "The soldiers that the rustic summer camp lodges each summer love staying in the wilderness."}],
["f", ds, {s: "The teacher that watched the play starring his students were pleased by the final scene."}],
["f", ds, {s: "If the clever bank robbers had forgotten to leave the get-away car running, they get caught by the police."}],
["f", ds, {s: "The nurse that the doctor had been searching for everywhere was upset with herself for being late to a surgery."}],
["f", ds, {s: "Very few angry protesters that the police arrested will spend a night in jail."}],
["f", ds, {s: "The lawyer that met with the shrewd prosecutors meet with the group of clients every week."}],
["f", ds, {s: "The stewardess that was kind to the irritable passengers on the flight poured herself a soda."}],
["f", ds, {s: "If the new fashionable restaurant had opened a new location, it makes record profits this year."}],
["f", ds, {s: "The article that was the source of many scandals were written by a young journalist."}],
["f", ds, {s: "The wise scholar that had translated many classical texts studied the ancient Greek scrolls with his colleagues in twelve months."}],
["f", ds, {s: "The actor whose movie was extremely popular among teenagers killed herself last week."}],
["f", ds, {s: "The freshmen that complain too much about their toughest class has always failed the final exam."}],
["f", ds, {s: "The little girl that played a ghost with a bed sheet on Halloween scared himself in the mirror."}],
["f", ds, {s: "The child that chases the neighbor's dogs around the yard likes playing games."}]
*/

];